import Vue from 'vue';
import Vuex from 'vuex';
import { memo } from '@/stores/memo';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    memo,
  },
  strict: false
});
