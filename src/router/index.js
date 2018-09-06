import Vue from 'vue';
import Router from 'vue-router';
// 1st level components
import overview from '@/components/overview';
import movieInfo from '@/components/movieInfo';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/index'
    },
    {
      name: 'index',
      path: '/index',
      component: overview
    },
    {
      name: 'movieInfo',
      path: '/movieInfo',
      component: movieInfo
    }
  ]
});
