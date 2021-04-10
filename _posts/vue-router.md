---
title: "Organize your routes with Vue Router"
---

Everyone has its own view on how to organize the routes in a Single-Page Application-we’re not different.

Since we’re using [Vue.js](https://vuejs.org/) in our current project, we’re also using the [Vue Router](https://router.vuejs.org/).

Here we would like to describe the approach we took to organize our router and its routes. We will probably change/improve the current state later on but for now I will describe the [status quo](https://en.wikipedia.org/wiki/Status_quo).

### Folder structure

We made a couple of iterations on how we want to organize our routes and we will definitely run through a couple of more iterations until we’re fully satisfied.

![](https://cdn-images-1.medium.com/max/2704/1*Pj1ezbBzQnG4NHlD0seaWg.png)

Current folder structure we use is pretty straightforward:

* `index.js`- defines the `beforeEach` logic for the routes

* `/routes/public.js` — holds all the public routes (e.g. /, /login, /registration etc.)

* `/routes/private.js` — has all the routes for the authenticated user

* `/routes/index.js` - just concatenates all the public and private routes and exports them

Let’s walk quickly through every file — you’ll see it will all make sense very quickly.

### src/router/index.js

`index.js` only holds one root route (you can also go without it). In our case it’s the dashboard route, the user is redirected to once authenticated.

Ok, so the most important part of the `index.js` is the `beforeEach` check.

In our application we have two types of routes:

* the strictly public ones — you have to be logged out to visit them

* the private ones - you have to be authenticated to visit them

```js
import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index.js'
import routes from '@/router/routes/index.js'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/dashboard'
    }
  ].concat(routes)
})

router.beforeEach((to, from, next) => {
  const authenticated = store.state.user.authenticated
  const onlyLoggedOut = to.matched.some(record => record.meta.onlyLoggedOut)
  const isPublic = to.matched.some(record => record.meta.public)
  if (!isPublic && !authenticated) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    return next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  }
  if (authenticated && onlyLoggedOut) {
    return next('/')
  }
  next()
})

export default router
```

As you can see from the code snippet above, we read the authentication state from the local [Vuex](https://vuex.vuejs.org/) store. Other information that we need to decide whether a route can be visited or not is stored in the [meta field](https://router.vuejs.org/guide/advanced/meta.html) of the routes:

* `onlyLoggedOut` — a route can only be visited by a non authenticated user

* `isPublic` - it’s a public route and can be visited without authentication (`/login`, `/registration` etc.)

There are only two cases (we’d like to keep it simple in the beginning):

* `!isPublic && !authenticated` — the user is not authenticated but is trying to access the private route — he/she’ll be redirected to the `/login` page and will be redirected to the page he was trying to access upon successful authentication

* `authenticated && onlyLoggedOut` -the user is authenticated but is trying to access the public page — he’ll be redirected back to the dashboard

### src/router/routes/public.js

We were thinking about breaking down the routes and put every one of them into its own file, but, mmm-maybe later :).

Ok, so all the public routes are in one file and all of them rock the same meta field:

```js
meta: {
  public: true,
  onlyLoggedOut: true
}
```

```js
import Login from '@/views/Login.vue'
import Registration from '@/views/Registration.vue'
import ForgotPassword from '@/views/ForgotPassword.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/registration',
    name: 'registration',
    component: Registration
  },
  {
    path: '/forgot-password',
    name: 'forgotPassword',
    component: ForgotPassword
  }
]

export default routes.map(route => {
  const meta = {
    public: true,
    onlyLoggedOut: true
  }
  return { ...route, meta }
})
```

In order to not pollute every route, we’re adding the meta field to all the routes in the file in the export section. This way we don’t have to think about adding the meta field to every new added route.

### src/router/routes/private.js

You know the drill by now. All the private routes reside in one file and the meta field is added to each and one of them in the export section.

<iframe src="https://medium.com/media/03d8fc8d44d160c4d6fb20f3a69e6532" frameborder=0></iframe>

### src/router/routes/index.js

What’s inside of the routes/index.js you may ask. It’s just the utility file that imports the routes from both public.js and private.js and exports them as one.

<iframe src="https://medium.com/media/bb8064cf497b284138fcc7f79b7ddf23" frameborder=0></iframe>

This file is not necessary, you could just import public and private routes directly into the src/router/index.js

### What’s next

We will probably change and hopefully improve our router setup in the next months and I’ll try to share how we changed our setup and why. For now this simple example can help you to get started.
