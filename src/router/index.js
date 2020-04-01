import Vue from 'vue'
import Router from 'vue-router'
import PageHome from '../pages/PageHome'
import PageThreadShow from '../pages/PageThreadShow'

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
    }
  ],
  mode: 'history' // to remove the #
})
