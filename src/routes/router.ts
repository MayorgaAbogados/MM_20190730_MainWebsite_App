import Vue from 'vue';
import Router from 'vue-router';
import { HOME_ROUTES } from './home.routes/index.routes';

Vue.use(Router);


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...HOME_ROUTES,
  ],
});
