import Vue from 'vue';
import Router from 'vue-router';
//import Home from './components/Home.vue'
//import RestaurantDetail from './components/RestaurantDetail.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      alias: '/objects',
      name: 'objects',
      component: () =>
        import('./components/ObjectList'),
    },

    {
      path: '/add',
      component: () =>
        import('./components/AddObject'),
    },

    {
      path: '/objects/:id',
      name: 'object-details',
      component: () =>
        import('./components/Object'),
    },

    /* {
      path: '/duplicatesCleanup',
      name: 'duplicatesCleanup',
      props: true,
      component: () =>
        import('./components/DuplicatesCleanup'),
    }, */
    {
      path: '/duplicatesCleanup',
      name: 'duplicatesCleanup',
      props: true,
      component: () =>
        import('./components/DuplicatesCleanup'),
    },
  ],
});
