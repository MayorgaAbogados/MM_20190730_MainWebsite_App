import Vue from 'vue';
import Vuex from 'vuex';
import AuthModule from './store-auth/_index';
import DeviceModule from './store-auth/_index';
import ModelBudgetModule from './store-models/store-budgets/_index';
import ModelConsultingModule from './store-models/store-consulting/_index';
import ModelInvoicesModule from './store-models/store-invoices/_index';
import ModelMeetingsModule from './store-models/store-meetings/_index';
import ModelMembershipsModule from './store-models/store-memberships/_index';
import ModelPaymentsModule from './store-models/store-payments/_index';
import ModelUsersModule from './store-models/store-users/_index';
import ModelWebminarsModule from './store-models/store-webminars/_index';
import ModelWebminarsUsersModule from './store-models/store-webminars-users/_index';
import UIFooterModule from './store-ui/store-footer/_index';
import UIHeaderMenuModule from './store-ui/store-header/store-header-menu/_index';
import UILoaderModule from './store-ui/store-loader/_index';
import UIModalModule from './store-ui/store-modal/_index';
import UIParallaxModule from './store-ui/store-parallax/_index';
import UIThemeModule from './store-ui/store-theme/_index';
import UIToasterModule from './store-ui/store-toaster/_index';

Vue.use(Vuex);
export default new Vuex.Store({
  modules: {

    AuthModule,
    DeviceModule,

    ModelBudgetModule,
    ModelConsultingModule,
    ModelInvoicesModule,
    ModelMeetingsModule,
    ModelMembershipsModule,
    ModelPaymentsModule,
    ModelUsersModule,
    ModelWebminarsModule,
    ModelWebminarsUsersModule,

    UIFooterModule,
    UIHeaderMenuModule,
    UILoaderModule,
    UIModalModule,
    UIParallaxModule,
    UIThemeModule,
    UIToasterModule,

  },

  strict: process.env.NODE_ENV !== 'production',

});
