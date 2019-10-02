// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ant from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import 'babel-polyfill';
import  store from './store'
import './assets/modify.css'
Vue.config.productionTip = false;
Vue.use(ant);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});