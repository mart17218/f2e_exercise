import Vue from 'vue';
import Router from 'vue-router';
// 1st level components
import overview from '@/components/overview';
import movieList from '@/components/movieList';
import movieInfo from '@/components/movieInfo';
import aboutUs from '@/components/aboutUs';

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
      component: overview,
      meta: {
        title: '電影'
      }
    },
    {
      name: 'movieList',
      path: '/movieList',
      component: movieList,
      meta: {
        title: '電影'
      }
    },
    {
      name: 'seriesList',
      path: '/seriesList',
      component: overview,
      meta: {
        title: '電視影集'
      }
    },
    {
      name: 'performer',
      path: '/performer',
      component: overview,
      meta: {
        title: '演員'
      }
    },
    {
      name: 'movieInfo',
      path: '/movieInfo',
      component: movieInfo,
      meta: {
        title: '介紹頁'
      }
    },
    {
      name: 'aboutUs',
      path: '/aboutUs',
      component: aboutUs,
      meta: {
        title: '關於我們'
      }
    }
  ]
});
