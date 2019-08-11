import Vue from 'vue';
import Vuex from 'vuex';

import chatModule from './Chat/_index';
import settingsModule from './Settings/_index';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        chat: chatModule,
        settings: settingsModule,
    },
    strict: process.env.NODE_ENV !== 'production',
});
