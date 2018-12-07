import { createNamespacedHelpers } from 'vuex';
import { DefineActions, DefineGetters, DefineMutations } from 'vuex-type-helper';

export interface State {
  memos: string[];
}

export interface Getters {
  memos: string[];
}

export interface Mutations {
  add: string;
  clear: {};
}

export interface Actions {
  add: string;
  clear: {};
}

export const state: State = {
  memos: [],
};

export const getters: DefineGetters<Getters, State> = {
  memos: (state) => state.memos,
};

export const mutations: DefineMutations<Mutations, State> = {
  add(state, memo: string) {
    state.memos = [...state.memos, memo];
  },
  clear(state, {}) {
    state.memos = [];
  },
};

export const actions: DefineActions<Actions, State, Mutations, Getters> = {
  add({ commit }, memo: string) {
    commit('add', memo);
  },
  clear({ commit }) {
    commit('clear', {});
  },
};

export const {
  mapState,
  mapGetters,
  mapMutations,
  mapActions,
} = createNamespacedHelpers<State, Getters, Mutations, Actions>('memo');

export const memo = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
