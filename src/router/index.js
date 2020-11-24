import Vue from "vue";
import Router from "vue-router";
import header from "../views/header/header";
//懒加载
const Header = () =>
  import ("../views/header/header");
const Cart = () =>
  import ('../views/cart/Cart');
const Sort = () =>
  import ('../views/sort/Sort');
const Im = () =>
  import ('../views/Im/Im');


const details = () =>
  import("../views/details/Details")


Vue.use(Router);


const routes = [{
  path: '',
  redirect: '/home'
  },{
    path: '/home',
    component: Header
  },
  {
    path: '/sort',
    component: Sort
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/im',
    component: Im
  },
  {
    // path: '/detail/:iid',
    path: "/detail",
    component:details
  }

]
const router = new Router({
  routes:routes,
  mode:"history"
})

export default router;
