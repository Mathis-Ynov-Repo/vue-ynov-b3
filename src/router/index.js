import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/users',
    name: 'Users',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Users.vue'),
  },
  {
    path: '/users/:id',
    name: 'UserPage',
    component: () => import(/* webpackChunkName: "about" */ '../views/UserPage.vue'),
  },
  {
    path: '/create-user',
    name: 'CreateUser',
    component: () => import(/* webpackChunkName: "about" */ '../views/CreateUser.vue'),
  },
  {
    path: '/valorant',
    name: 'Val',
    component: () => import(/* webpackChunkName: "about" */ '../views/Valorant.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
