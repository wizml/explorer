import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Packages from '../components/Packages'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/packages',
      name: 'Packages',
      component: Packages
    }
  ]
})
