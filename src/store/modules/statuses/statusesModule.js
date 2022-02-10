import axios from 'axios';

export default {
  state: {
    statuses: [
      {
        id: 1,
        board_id: 1,
        title: 'Nie przydzielono',
        color: '#c4c4c4',
        created_at: '2022-01-05 18:06:45',
        updated_at: null,
      },
      {
        id: 2,
        board_id: 1,
        title: 'W przyszłości',
        color: '#cab641',
        created_at: '2022-01-05 18:06:45',
        updated_at: null,
      },
      {
        id: 3,
        board_id: 1,
        title: 'Wysłano zamówienie/umowę',
        color: '#9cd326',
        created_at: '2022-01-05 18:06:45',
        updated_at: null,
      },
      {
        id: 4,
        board_id: 1,
        title: 'Sporządzić ofertę',
        color: '#a25ddc',
        created_at: '2022-01-05 18:06:45',
        updated_at: null,
      },
      {
        id: 5,
        board_id: 1,
        title: 'Odmowa',
        color: '#e2445c',
        created_at: '2022-01-05 18:06:45',
        updated_at: null,
      },
      {
        id: 6,
        board_id: 1,
        title: 'Umówiona rozmowa CC',
        color: '#7f5347',
        created_at: '2022-01-05 18:06:45',
        updated_at: null,
      },
      {
        id: 7,
        board_id: 1,
        title: 'Złożono ofertę',
        color: '#fdab3d',
        created_at: '2022-01-05 18:06:45',
        updated_at: null,
      },
      {
        id: 8,
        board_id: 1,
        title: 'Umówić się',
        color: '#ff158a',
        created_at: '2022-01-05 18:06:45',
        updated_at: null,
      },
      {
        id: 9,
        board_id: 1,
        title: 'SPINAĆ',
        color: '#7e3b8a',
        created_at: '2022-01-05 18:06:45',
        updated_at: null,
      },
      {
        id: 10,
        board_id: 1,
        title: 'Brak 1 kontaktu',
        color: '#579bfc',
        created_at: '2022-01-05 18:06:45',
        updated_at: null,
      },
      {
        id: 11,
        board_id: 1,
        title: 'Czekamy na informacje od klienta',
        color: '#037f4c',
        created_at: '2022-01-05 18:06:45',
        updated_at: null,
      },
      {
        id: 12,
        board_id: 1,
        title: 'Spotkanie',
        color: '#ff5ac4',
        created_at: '2022-01-05 18:06:45',
        updated_at: null,
      },
      {
        id: 13,
        board_id: 1,
        title: 'Kontrakt',
        color: '#00c875',
        created_at: '2022-01-05 18:06:45',
        updated_at: null,
      },
      {
        id: 14,
        board_id: 1,
        title: 'Nie odbiera',
        color: '#0086c0',
        created_at: '2022-01-05 18:06:45',
        updated_at: null,
      },
      {
        id: 15,
        board_id: 1,
        title: 'Ustalić potrzeby',
        color: '#2b76e5',
        created_at: '2022-01-05 18:06:45',
        updated_at: null,
      },
      {
        id: 16,
        board_id: 1,
        title: 'W trakcie umawiania rozmowy/spotkania',
        color: '#66ccff',
        created_at: '2022-01-05 18:06:45',
        updated_at: null,
      },
      {
        id: 17,
        board_id: 1,
        title: 'Umówione MOJE',
        color: '#333',
        created_at: '2022-01-05 18:06:45',
        updated_at: null,
      },
      {
        id: 18,
        board_id: 1,
        title: 'Klient aktywny',
        color: '#175a63',
        created_at: '2022-01-05 18:06:45',
        updated_at: null,
      },
    ],
  },
  getters: {
    statuses: (state) => state.statuses,
  },
  mutations: {
    statuses: (state, statuses) => (state.statuses = statuses),
  },
  actions: {
    async statuses({ commit }) {
      await axios
        .get(`statuses/get-all`)
        .then((res) => {
          commit('statuses', res.data);
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
