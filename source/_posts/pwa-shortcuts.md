---
title: Add shortcuts to your PWA
date: 2021-10-10 10:43:18
tags:
---

Although the end of PWAs has been proclaimed a while ago, the Progressive Web Apps keep getting better.

Not only the processors have been improving at a rapid rate but also the
[V8 is getting better](https://nodesource.com/blog/why-the-new-v8-is-so-damn-fast/) with every iteration.

<!-- more -->

So, if you don't have time to build your mobile app with React Native, Flutter or going full native with Swift or Kotlin - PWA can still be a good low entry barrier option.

The addition of [maskable icons](https://web.dev/maskable-icon/) let your app finally have a more appealing icon that will be placed on the screen of your mobile phone if you decide to `install` it.

If you would like to try out the maskable icons, check out the [Maskable
App](https://maskable.app/) - it allows you to easily create maskable icons for your app.

What can make your app even more appealing and can make it feel even more
`native`-like are the shortcuts.

Shortcuts are accessible through long press on phones and right-clicking on desktop. When a user does a long press, he will see a context menu with links to a certain action of your app.

Let's imagine you build a banking app and you want your users to be able to quickly access the **Transfer Money** screen that's available under `https://my-shiny-bank.io/send-money`

In order to add this shortcut to your PWA, you have to add the `shortcuts`
section to your `manifest.json` file:

```json
{
  "name": "BANG",
  "short_name": "BANG",
  "description": "Neo Bang",
  "start_url": "/",
  "display": "standalone",
  "orientation": "portrait",
  "background_color": "#1B252C",
  "theme_color": "#1B252C",
  "icons": [
    {
      "src": "/icons/bang-maskable-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "maskable any"
    },
    {
      "src": "/icons/bang-maskable-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "maskable any"
    }
  ],
  "shortcuts": [
    {
      "name": "Transfer",
      "short_name": "Dough Disposal",
      "description": "Send some dough to your peeps",
      "url": "/send-money",
      "icons": [
        {
          "src": "/img/shortcuts/black/send-money-4x.png",
          "sizes": "96x96"
        }
      ]
    },
    {
      "name": "Overview",
      "short_name": "My Dough",
      "description": "Where is my money?",
      "url": "/overview",
      "icons": [
        {
          "src": "/img/shortcuts/black/overview-4x.png",
          "sizes": "96x96"
        }
      ]
    }
  ]
}
```

Once you added the shortcuts section, the icons you would like to see in your contextual menu and redeployed your app, you should get a result similar to the following:

<div style="text-align: center;">
  <img src="screenshot.jpg" width="50%" />
</div>

If your app functionality is hidden behind the authentication don't forget to add the redirection to the shortcuts `"url": "/send-money"` after a successful authentication.

The good design should be predictable - so, if your shortcuts represent the menu points of your app, then you should use the same icons both for your shortcuts and in your menu.

If you're using material design library for your product you can download
material design icons: [here](https://github.com/material-icons/material-icons-png) or [here](https://www.materialpalette.com/icons)

If you use [Font Awesome](https://fontawesome.com/) you can use this Font [Awesome 2 PNG](https://fa2png.app/) converter.
