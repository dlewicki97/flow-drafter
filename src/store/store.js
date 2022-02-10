import Vue from 'vue';
import Vuex from 'vuex';
import Boards from '@/store/modules/boards/boardsModule.js';
import ColumnTypes from '@/store/modules/columnTypes/columnTypesModule.js';
import Statuses from '@/store/modules/statuses/statusesModule.js';
import People from '@/store/modules/people/peopleModule.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Boards,
    ColumnTypes,
    Statuses,
    People,
  },
});
