import Vue from 'vue'
import Router from 'vue-router'
import Popper from 'popper.js'
import Login from '@/Login'
// 1st level components
import mainNav from '@/components/mainNav'
// 2nd level components
import myFavorite from '@/components/myFavorite'
import popularNow from '@/components/popularNow'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: mainNav,
      redirect: '/index/favorite',
      children: [
        {
          path: 'favorite',
          name: 'myFavorite',
          component: myFavorite
        },
        {
          path: 'popular',
          name: 'popular',
          component: popularNow
        }
      ]
    }
  ]
})
