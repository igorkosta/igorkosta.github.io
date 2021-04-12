---
title: 'Mock promisified AWS service operation calls with Jest'
---

At [Mbanq Cloud](https://mbanq.com/cloud) we run most of our services on AWS and try to use AWS Lambda as much as possible.

A while ago I’ve been working on the a small npm package that should have helped us to make use of SSM and [KMS](https://aws.amazon.com/kms/) to manage our system configuration. SSM and KMS play nicely together as the most of the AWS services.

In order to test the newly written npm package, I had to mock the promisified version of the `ssm.getParameters(request)`

```js
const AWS = require('aws-sdk')
const ssm = AWS.SSM({ region: 'eu-west-1 })
ssm.getParameters(request).promise() // we have to mock the response from this call
```

There are different ways of mocking the AWS JS SDK calls. For example there is the [aws-mock-sdk](https://github.com/dwyl/aws-sdk-mock) package from the very cool [DWYL](https://dwyl.com/) guys. I decided to go with pure Jest implementation though.

![](https://cdn-images-1.medium.com/max/2000/1*yZyG4rhfvTehkTsKtLxD9Q.png)

There are some things to be taken into account to make the SSM’s functionality testable:

- Use **ssm** as a parameter in your function call, e.g. const `load = (ssm, keys, expiryMs)` It will help you to use the mocked ssm whenever you write your tests. Sure you could also `module.exports = { ssm }` alongside other functions you want to export but I didn’t really like this idea
- If you wanna check for the errors thrown inside of an `async/await` function you have to use: `expect(yourFunc()).rejects.toEqual(new Error('Error Message'))` . The regular `expect(yourFunc()).toThrowError('Error Message')` [**WON’T WORK](https://github.com/facebook/jest/issues/1700#issuecomment-377890222)**

Ok, now you’re probably asking yourself:
> How the heck do you mock the promisified AWS service operation calls?

You will either want to mock a successful response from the `ssm.getParameters(request).promise()` or the `Error` thrown by the this function call.

### Successful response
First, create a js object with the promise key and mock the value of the promise with the `jest.fn().mockImplementation()` that will return a Promise that when resolved return a successful response.

Then return the created `ssmPromise` whenever you make a call to `getParameters()` function.

```js
const AWS = require('aws-sdk')
let ssm = new AWS.SSM()
const ssmPromise = {
  promise: jest.fn().mockImplementation((request) => {
    return new Promise((resolve, reject) => {
      const response = {
        Parameters: [
          {
            Name: 'bar',
            Type: 'String',
            Value: 'barfoorista',
            Version: 1,
            LastModifiedDate: '2018-08-22T13:49:55.717Z',
            ARN: 'arn:aws:ssm:eu-west-1:whatever:parameter/bar'
          },
          {
            Name: 'foo',
            Type: 'String',
            Value: 'foobarista',
            Version: 1,
            LastModifiedDate: '2018-08-22T13:49:41.486Z',
            ARN: 'arn:aws:ssm:eu-west-1:whatever:parameter/foo'
           }
         ],
         InvalidParameters: []
       }
       resolve(response)
     })
  })
}
ssm = { getParameters: () => { return ssmPromise } }
```

### Throw an Error

By using the ssm instance you created at the top of your test, you can also mock the `ssm.getParameters()` in one go.

Here is an example of how you could mock `ssm.getParameters()` throwing an Error

```js
ssm = {
  getParameters: () => {
    return {
      promise: jest.fn().mockImplementation((request) => {
        return new Promise((resolve, reject) => {
          return reject(new Error('foobar'))
        }).catch(() => console.log('Ok'))
      })
    }
  }
}
```

In a [gist](https://gist.github.com/igorkosta/6dae64ca2ababed7bec95255b2252842#file-sreda-test-js) (pun intended) you can see part of the test, we’re using to test our package.

Here is the content of the `gist` for you to check out:
```js
/* eslint-env jest */
'use strict'

const { read, keys } = require('../sreda')
const AWS = require('aws-sdk')
let ssm = new AWS.SSM()

var ssmPromise = {
  promise: jest.fn().mockImplementation((request) => {
    return new Promise((resolve, reject) => {
      const response = {
        Parameters: [
          {
            Name: 'bar',
            Type: 'String',
            Value: 'barfoorista',
            Version: 1,
            LastModifiedDate: '2018-08-22T13:49:55.717Z',
            ARN: 'arn:aws:ssm:eu-west-1:whatever:parameter/bar'
          },
          {
            Name: 'foo',
            Type: 'String',
            Value: 'foobarista',
            Version: 1,
            LastModifiedDate: '2018-08-22T13:49:41.486Z',
            ARN: 'arn:aws:ssm:eu-west-1:whatever:parameter/foo'
          }
        ],
        InvalidParameters: []
      }
      resolve(response)
    })
  })
}
ssm = { getParameters: () => { return ssmPromise } }

describe('mock AWS.SSM()', () => {
  beforeAll(async () => {
    process.env.NODE_ENV = 'production'
  })

  it(`throws an error if no keys are providerd`, async () => {
    function throwsErr () {
      read(ssm, [])
    }
    expect(throwsErr).toThrowError(`You need to provide a non-empty array of config keys`)
  })

  it(`throws an error if some keys are missing`, async () => {
    expect(keys(ssm, ['foobar'])).rejects.toEqual(new Error(`Missing SSM Parameter Store keys: foobar`))
  })

  it(`throws an error when ssm is throwing one`, async () => {
    ssm = {
      getParameters: () => {
        return {
          promise: jest.fn().mockImplementation((request) => {
            return new Promise((resolve, reject) => {
              return reject(new Error('foobar'))
            }).catch(() => console.log('Ok'))
          })
        }
      }
    }
    expect(keys(ssm, ['foo'])).rejects.toEqual(new Error(`TypeError: Cannot destructure property \`Parameters\` of 'undefined' or 'null'.`))
  })
})
```

The `sreda` package is in the dev mode. Check it out if you would like to use
it in you serverless project: https://www.npmjs.com/package/sreda

```bash
yarn add sreda

npm i -S sreda
```
