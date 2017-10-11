import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import { routes } from './routes.js';
import { store } from './store/store';

require('file-loader?name=[name].[ext]!../index.html');

Vue.use(VueRouter);

const router = new VueRouter( {
  routes
});

new Vue({
  el: '#pintext-frontend',
  router,
  store: store,
  render: h => h(App)
})
