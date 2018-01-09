import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        authenticationStatus: false,
        viewSnippet: {},
        snippetList: [],
        baseURL: process.env.BASE_URL || "http://localhost:2348"
    }
})