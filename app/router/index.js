import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Packages from '../components/Packages'
import Package from '../components/Package'
import NotFoundComponent from '../components/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/packages',
      name: 'Packages',
      component: Packages
    },
    {
      path: '/packages/:package',
      name: 'Package',
      component: Package
    },
    {
      path: '*',
      component: NotFoundComponent
    }
  ]
})
