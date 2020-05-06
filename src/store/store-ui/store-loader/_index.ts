
export default {

    namespaced: true,

    state: {
       isOpen : false,
    },

    actions: {

        OPEN({ commit }: any) {
            commit('setLoaderState', true);
        },

        CLOSE({ commit }: any) {
            commit('setLoaderState', false);
        },

        

    },

    mutations: {

        setLoaderState(state: any, status: any) {
            state.isOpen = status;
        },


    },

    getters: {
        getIsOpen(state: any): boolean {
            return state.isOpen;
        },
    },

};
