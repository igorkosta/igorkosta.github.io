export default {
  title: 'Costinha',
  description: 'my personal page',
  about: `
    <p>
      I'm a Product and Tech Lead living in Munich.
    </p>
    <p>
      I have more than a decade of professional experience building and launching products for web, mobile and desktop.
    </p>
    <p>
      I was responsible for launching the first version of the most used banking software on the German market: <a href="https://apps.apple.com/de/app/starmoney-financemanagement/id1237596145" target="_blank">StarMoney</a> for the Mac OS platform.
    </p>
    <p>
      I led the development of worldwide first Open Banking API at <a href="https://www.fidor.com/solutions/developer" target="_blank">Fidor Bank</a>. I managed two teams responsible for the Banking API and the Banking App Store.
    </p>
    <p>
      I currently lead the product and software development of the Cloud Banking Platform at <a href="https://mbanq.com/cloud" target="_blank">Mbanq</a>. We build and easy to customize Digital Banking Platform that can be rolled out in hours. We use serverless 90% of our time.
    </p>
    <p>
      I'm running <a href="https://shows.acast.com/salty-breeze-radio/episodes" target="_blank">Salty Breeze Radio</a> - a weekly music podcast and writing <a href="https://ryan-raiz.github.io/avanti/" target="_blank">Avanti</a> - a fictional book about real life.
    </p>
  `,
  openSource: {
    links: [
      {
        name: 'NPM',
        image: 'https://cdn.worldvectorlogo.com/logos/npm-2.svg',
        url: 'https://www.npmjs.com/~igorkosta'
      },
      {
        name: 'GitHub',
        image: 'https://cdn.worldvectorlogo.com/logos/github-icon.svg',
        url: 'https://github.com/igorkosta'
      }
    ],
    intro: `<p>
        Most of the stuff you build nowadays is only possible because of the people from the open source community. I try to give back as well.
      </p>
      <p>
        Some of my personal projects include:
      </p>`,
    projects: [
      {
        name: 'Shawerma',
        url: 'https://www.npmjs.com/package/shawerma',
        description: 'a collection of helpers for working with serverless on AWS'
      },
      {
        name: 'Funda',
        url: 'https://www.npmjs.com/package/funda',
        description: 'an opinionated tool to create a Node.js serverless project'
      },
      {
        name: 'Monod',
        url: 'https://www.npmjs.com/package/monod',
        description: 'a CLI deployment helper for monorepo serverless project'
      },
      {
        name: 'Log Dawg',
        url: 'https://www.npmjs.com/package/log-dawg',
        description: 'push logs from your js frontend to AWS Cloudwatch'
      }
    ],
  },
  menu: [
    {
      title: 'About',
      link: '/',
    },
    {
      title: 'Blog',
      link: '/blog',
    }
  ],
  social: [
    {
      name: 'GitHub',
      url: 'https://github.com/igorkosta'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/igorkostyuchenok/'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/aplusplayer/'
    }
  ]
}
