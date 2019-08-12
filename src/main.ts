import Vue from 'vue';
import App from './App.vue';
import router from './routes/router';
import store from './store/index.store';
import * as VueGoogleMaps from 'vue2-google-maps';

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCa6jkfTueHqa5lEPGqKhyDgzOvnROfVGk'
  }
});

import './config/sw/registerServiceWorker';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
