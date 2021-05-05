import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  //mode: 'history',
  routes: [
    {
      path: '/',
      alias: '/people',
      name: 'people',
      component: () => import('./components/PersonList'),
    },
    {
      path: '/people/:id',
      name: 'person-details',
      component: () => import('./components/Home'),
    },
    {
      path: '/add',
      name: 'add',
      component: () => import('./components/AddPerson'),
    },
  ],
});
