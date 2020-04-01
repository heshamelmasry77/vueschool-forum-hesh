import Vue from 'vue'
import Router from 'vue-router'
import PageHome from '../pages/PageHome'
import PageThreadShow from '../pages/PageThreadShow'
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
      path: '/thread/:id',
      name: 'PageThreadShow',
      component: PageThreadShow,
      props: true // pass params to the component as properties
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
