---
title: GraphQL Partial Update
published: 2021-04-13
---

Recently we decided to use [AWS Amplify](https://aws.amazon.com/amplify) for one of the products we’re currently working on.

[AWS Amplify](https://aws.amazon.com/amplify) promises to provide you with the option to rapidly develop the [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) or a [GraphQL](https://graphql.org/) based backend that's very well integrated with your frontend development - be it a web application or a mobile app. That's at least the marketed value proposition.

I don't wanna say that's [AWS Amplify](https://aws.amazon.com/amplify) is still in its infancy but let's say it's
not without its caveats. One of them is the documentation. In general AWS
provides a lot of documentation, which doesn't necessarily means that it's
good.

Usually the truly technical documentation like the one for AWS SDK is really
good, which is not always the case with the Docs for other services. With AWS
Amplify it's pretty often the case that the documentation is not up-to-date and
you have to dig through the GitHub tickets discussions to find the truth or
the undocumented features (yes, `@http resolvers` - I look at you)

If you have to provide custom headers to your HTTP resolver based GraphQL
operation - you can send them as part of `API.graphql()` call as last
parameter, e.g.

```js
const headers = {
  foor: 'bar',
};

const response = await API.graphql(
  graphqlOperation(createFooBar, { body }),
  headers,
);
```

But I'm drifting away 😀

Ok, so, we decided to go with GraphQL since in the final iterations the product should have more than just a web application and, theoretically, it should be easier to fetch only the data you need due to the flexible nature of [GraphQL](https://graphql.org/).

So, if you worked with [AWS Amplify](https://aws.amazon.com/amplify/) and [GraphQL](https://graphql.org/) you know that it doesn’t support partial updates, which was a deal-breaker for us, since we have multiple flows where we have to partially push the data to the backend.

After a short research online, I found a pretty cool article from [Arnaud Bezançon](https://medium.com/@arnaud.bezancon) here [https://medium.com/workflowgen/graphql-mutations-partial-updates-implementation-bff586bda989](https://medium.com/workflowgen/graphql-mutations-partial-updates-implementation-bff586bda989)

Although I really liked his way of doing things, my lazy nature wanted to have a more generic (not necessarily a better) solution though. So, my way of thinking was: since I only send parts of the data to the backend but it expects the whole { input } object from me, I will just merge the existing data with the new one and push it to the backend.

What you have to consider as well is that you will have to remove any automatically generated/updated fields from your `json` object — in my case `createdAt/updatedAt` fields.

So, below you see a quick and dirty way of doing it.

Please, note that I’m using email as the key of our user model. In addition to that, you will have to always send the whole user object with all the fields to the update mutation — meaning when you call `getUser` it should fetch the user object with all the fields.

In a nutshell - the flow is the following:
- try to fetch the user from the backend
- if the user doesn't exist - call `createUser` with the provided data
- if the user exist - merge the existing data with the new one and call
  `updateUser`

```js
import { API, graphqlOperation } from 'aws-amplify';
import { getUser } from '@/graphql/queries';
import { createUser, updateUser } from '@/graphql/mutations';
import { exclude } from '@/utils/json';

const get = async (email) => {
  try {
    const {
      data: {
        getUser: user,
      },
    } = await API.graphql(graphqlOperation(getUser, { email }));
    return user;
  } catch (error) {
    throw new Error(error.errors);
  }
};

const createOrUpdate = async (input) => {
  const { email } = input;
  try {
    const user = await get(email);
    if (!user) {
      await API.graphql(graphqlOperation(createUser, { input }));
    } else {
      // get current user data
      // and only update the provided values
      // createdAt, updatedAt have to be excluded
      const update = { ...exclude(['createdAt', 'updatedAt'], user), ...input };
      await API.graphql(graphqlOperation(updateUser, { input: update }));
    }
  } catch (error) {
    throw new Error(error.errors);
  }
};

export {
  get,
  createOrUpdate,
};
```

Since the email is used as the key of the user model, it has to be passed to the `createOrUpdate` function as part of the `{ input }` object. Whenever I have to create or update a user, we have to add the email to the input and then just call `createOrUpdate(input);`

```js
const { email } = user;
const input = { email, …payload };

try {
  ...
  await createOrUpdate(input);
  ...
} catch (error) {
  throw new Error(error);
}
```

It’s not an efficient way of doing things since it will fetch the data from your backend before doing an update but this way you don’t have to do things manually or thing about the values you’d like to be updated.

That’s all folks.
