import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';



// --------------------------------------------------- //
// -- Bootstrap Resources ---------------------------- //
// --------------------------------------------------- //
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'vue-search-select/dist/VueSearchSelect.css';
import BootstrapVue from 'bootstrap-vue';
Vue.use(BootstrapVue);
// --------------------------------------------------- //


// --------------------------------------------------- //
// -- V-Calendar Resources ---------------------------- //
// --------------------------------------------------- //
//import VueScheduler from './vendors/v-calendar-scheduler-2/components/VueScheduler.vue';
//import './vendors/v-calendar-scheduler-2/lib/main.css';
//Vue.use(VueScheduler);
// --------------------------------------------------- //



// --------------------------------------------------- //
// -- Directives ------------------------------------- //
// --------------------------------------------------- //
import './directives/v-visibility';
import './directives/v-scroll-show';
// --------------------------------------------------- //

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');













(document as any).getScroll = function() {
  if (window.pageYOffset != undefined) {
      return [pageXOffset, pageYOffset];
  } else {
      let sx, sy, d = document,
          r = d.documentElement,
          b = d.body;
      sx = r.scrollLeft || b.scrollLeft || 0;
      sy = r.scrollTop || b.scrollTop || 0;
      return [sx, sy];
  }
};



