import Vue from 'vue';
import Vuex from 'vuex';
import { IRoot } from '@/shared/interfaces';
import { root } from './modules/root';

Vue.use(Vuex);

export default new Vuex.Store<IRoot>(root);
