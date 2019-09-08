import Vue from 'vue';
import App from './App.vue';
import router from './routes/router';
import store from './store/index.store';

import axios from 'axios';
import VueAxios from 'vue-axios';



Vue.use(VueAxios, axios);

import './config/sw/registerServiceWorker';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
