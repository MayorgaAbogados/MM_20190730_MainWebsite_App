import { TABS_TYPE } from '../../../../shared/headers/basic-header/models/tabs.enum';

export default {

    namespaced: true,

    state: {
       isOpen : false,
       currentTab: TABS_TYPE.ABOUT as TABS_TYPE,
    },

    actions: {

        OPEN({ commit }: any) {
            commit('setMenuState', true);
        },

        CLOSE({ commit }: any) {
            commit('setMenuState', false);
        },

        SET_CURRENT_TAB({commit}: any, payload: TABS_TYPE) {
            commit('setCurrentTab', payload);
        },

    },

    mutations: {

        setMenuState(state: any, status: any) {
            state.isOpen = status;
        },

        setCurrentTab(state: any, tab: TABS_TYPE) {
            state.currentTab = tab;
        },

    },

    getters: {
        getIsOpen(state: any): boolean {
            return state.isOpen;
        },

        getTab(state: any): TABS_TYPE {
            return state.currentTab;
        },
    },

};
