import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  //mode: 'history',
  routes: [
    {
      path: '/',
      alias: '/persons',
      name: 'persons',
      component: () => import('./components/PersonList'),
    },
    {
      path: '/persons/:id',
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
