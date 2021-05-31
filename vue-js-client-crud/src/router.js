import Vue from "vue";
import Router from "vue-router";
//import Home from './components/Home.vue'
//import RestaurantDetail from './components/RestaurantDetail.vue'

Vue.use(Router);

export default new Router({
  //mode: 'history',
  routes: [
    {
      path: "/search",
      component: () => import("./components/ObjectList")
    },
    {
      path: "/add",
      component: () => import("./components/AddObject")
    },

    {
      path: "/home",
      name: "book-details",
      component: () => import("./components/Home")
    }
  ]
});
