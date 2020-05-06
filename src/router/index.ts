import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import Legal from '../views/Legal.vue';
import Services from '../views/Services.vue';

import ConsultingServicePage from '../pages/ServicesPages/Consulting.service.vue';

import SignIn from '../views/SignIn.vue';
import SignUp from '../views/SignUp.vue';
import Profile from '../views/Profile.vue';

Vue.use(VueRouter);

const routes = [

  


  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/home',
    name: 'home/home',
    component: Home
  },
  {
    path: '/home/about',
    name: 'home/about',
    component: Home
  },
  {
    path: '/home/map',
    name: 'home/map',
    component: Home
  },



 
  {
    path: '/auth/signin',
    name: 'auth/signin',
    component: SignIn
  },
  {
    path: '/auth/signup',
    name: 'auth/signup',
    component: SignUp
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/legal',
    name: 'legal',
    component: Legal
  },
  {
    path: '/legal/director',
    name: 'legal/director',
    component: Legal
  },
  {
    path: '/legal/experience',
    name: 'legal/experience',
    component: Legal
  },
  {
    path: '/legal/team',
    name: 'legal/team',
    component: Legal
  },
  {
    path: '/services',
    name: 'services',
    component: ConsultingServicePage
  },
  {
    path: '/services/consulting',
    name: 'services/consulting',
    component: ConsultingServicePage
  },
  {
    path: '/services/budget/payment/confirm',
    name: 'services/budget/payment/confirm',
    component: ConsultingServicePage
  },

  {
    path: '/page/services/consulting',
    name: 'page/services/consulting',
    component: ConsultingServicePage ,
  },


];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
