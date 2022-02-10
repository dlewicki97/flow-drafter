import axios from 'axios';

export default {
  state: {
    boards: [],
  },
  getters: {
    boards: (state) => state.boards,
  },
  mutations: {
    boards: (state, boards) => (state.boards = boards),
  },
  actions: {
    async boards({ commit }) {
      await axios
        .get(`boards/get-all`)
        .then((res) => {
          commit('boards', res.data);
        })
        .catch((err) => {
          console.log(err);
          commit(
            'setSnackbar',
            'Przepraszamy, nie udało się załadować danych...'
          );
        });
    },
  },
};
