import { fs } from 'fs'
import { createFeed } from '../docs/podcastTemplate.mjs'
const mixcloudAPI = 'https://api.mixcloud.com/saltybreezeradio/feed/'

export const podcast = {
  website: '',
  image: {
    url: '',
    title: 'Salty Breeze Radio'
  },
  keywords: 'music, chill-out, lounge, bossa nova, mpb, jazz, house',
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
  }
}

fs.writeFile('feed.xml', createFeed(podcast), function (err) {
  if (err) throw err;
  console.log('Created feed.xml');
});

//export function feed() {
//  fetch(mixcloudAPI)
//    .then(response => response.json())
//    .then(data => {
//      // display in alert box
//      alert(JSON.stringify(data));
//
//      console.log(data)
//      document.getElementById("feed").innerHTML = JSON.stringify(data)
//      return data;
//    });
//}
