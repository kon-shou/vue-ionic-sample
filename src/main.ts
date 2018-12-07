import Vue from 'vue';
import { Ionic, IonicAPI } from '@modus/ionic-vue'

import router from './router';
import store from './stores/store';

Vue.config.productionTip = false;

Ionic.init();
Vue.use(IonicAPI);

new Vue({
  router,
  store,
}).$mount('#app');
