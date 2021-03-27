import * as fs from 'fs'
import fetch from 'node-fetch'
import { createFeed } from '../docs/podcastTemplate.mjs'
const mixcloudAPI = 'https://api.mixcloud.com/saltybreezeradio'

const podcast = {
  title: 'Salty Breeze Radio',
  description: 'Weekly podcast inspired by the sun and the ocean',
  subtitle: 'The sun and ocean for your ears',
  author: 'Salty Breeze Radio',
  website: '',
  image: {
    url: '',
    title: 'Salty Breeze Radio'
  },
  feedUrl: '',
  keywords: 'music, chill-out, lounge, bossa nova, mpb, jazz, house',
  category: 'Music',
  subCategory: 'Music Commentary',
  explicit: 'no',
  owner: {
    email: 'saltybreezeradio@gmail.com',
    name: 'Igor Kosta'
  },
  webmaster: {
    email: 'saltybreezeradio@gmail.com',
    name: 'Igor Kosta'
  },
  editor: {
    email: 'saltybreezeradio@gmail.com',
    name: 'Igor Kosta'
  },
  episodes: [
    {
      title: 'Episode 1',
      description: `Let's get to know each other`,
      subtitle: '',
      category: '',
      url: '',
      duration: '',
      pubDate: ''
    },
    {
      title: 'Episode 2',
      description: `Laid back`,
      subtitle: '',
      category: '',
      url: '',
      duration: '',
      pubDate: ''
    }
  ]
}

let p = {}
fetch(mixcloudAPI)
  .then(response => response.json())
  .then(data => {
    // display in alert box
    p.title = data.name
    p.description = data.biog
    p.website = data.url
    p.image = {
      url: data.pictures.large,
      title: data.name
    }

    console.log(JSON.stringify(p))

    // document.getElementById("feed").innerHTML = JSON.stringify(data)
    // return data;
  });

fs.writeFile('feed.xml', createFeed(podcast), function (err) {
  if (err) throw err;
  console.log('Created feed.xml');
});
