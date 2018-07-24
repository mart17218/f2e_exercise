import Vue from 'vue';
import Router from 'vue-router';
// 1st level components
import overview from '@/components/overview';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/index'
    },
    {
      path: '/index',
      component: overview
    }
  ]
});
