import { TABS_TYPE } from '../../../shared/headers/basic-header/models/tabs.enum';

export default {

    namespaced: true,

    state: {
       scrollPosition : 0,
    },

    actions: {


        setCurrentScroll({commit}: any, payload: number) {
            commit('SET_CURRENT_SCROLL_POSITION', payload);
        },

    },

    mutations: {

        SET_CURRENT_SCROLL_POSITION(state: any, status: any) {
            state.scrollPosition = status;
        },

    },

    getters: {
        getPosition(state: any): number {
            return state.scrollPosition;
        },
    },

};
