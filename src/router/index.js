import Vue from 'vue'
import Router from 'vue-router'
import PageHome from '../pages/PageHome'
import PageThreadShow from '../pages/PageThreadShow'
import PageForum from '../pages/PageForum'
import PageCategory from '../pages/PageCategory'
import Profile from '@/pages/PageProfile'
import NotFound from '../pages/NotFound'

Vue.use(Router) // tell vue to use the router plugin

export default new Router({ // route options
  routes: [
    {
      path: '/',
      name: 'PageHome',
      component: PageHome
    },
    {
      path: '/category/:id',
      name: 'PageCategory',
      component: PageCategory,
      props: true
    },
    {
      path: '/forum/:id',
      name: 'PageForum',
      component: PageForum,
      props: true
    },
    {
      path: '/thread/:id',
      name: 'PageThreadShow',
      component: PageThreadShow,
      props: true // pass params to the component as properties
    },
    {
      path: '/me',
      name: 'Profile',
      component: Profile,
      props: true
    },
    {
      path: '*',
      name: 'NotFound',
      // redirect: {name: 'PageHome'} // named route we can also do redirect : PageHome
      component: NotFound
    }
  ],
  mode: 'history' // to remove the #
})
