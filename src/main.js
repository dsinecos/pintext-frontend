import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import { routes } from './routes.js';
import { store } from './store/store';

require('file-loader?name=[name].[ext]!../index.html');

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
});

router.beforeEach(function (to, from, next) {
  // console.log("Inside beforeEach setup");

  if (document.cookie) {
    // console.log("Cookie found");
    // console.log(document.cookie);
    store.state.authenticationStatus = true;
  } else {
    // console.log("No cookie Found")
    // console.log(document.cookie);
    store.state.authenticationStatus = false;
  }

  next();
})

new Vue({
  el: '#pintext-frontend',
  router,
  store: store,
  render: h => h(App)
})
