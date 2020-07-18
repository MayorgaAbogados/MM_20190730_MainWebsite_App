import Vue from 'vue';
import VueRouter from 'vue-router';

import HomeRoutes from '../pages/HomePages/home.routes';
import PageRoutes from '../pages/TeamPages/team.routes';
import ServicesRoutes from '../pages/ServicesPages/services.routes';

Vue.use(VueRouter);

const routes = [
  ...HomeRoutes,
  ...PageRoutes,
  ...ServicesRoutes,
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
