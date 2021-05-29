import Vue from 'vue';
import Router from 'vue-router';
//import Home from './components/Home.vue'
//import RestaurantDetail from './components/RestaurantDetail.vue'

Vue.use(Router);

export default new Router({
  //mode: 'history',
  routes: [
     {
      path: '/',
      alias: '/books',
      name: 'books',
      component: () => import('./components/BookList'),
    },
    {
        path: '/',
        component: () => import('./components/Home'),
    },

    /* {
      path: '/books/:id',
      name: 'book-details',
      component: () => import('./components/Home'),
    }, */
/*     {
      path: '/add',
      name: 'add',
      component: () => import('./components/AddBook'),
    }, */
  ],
});
