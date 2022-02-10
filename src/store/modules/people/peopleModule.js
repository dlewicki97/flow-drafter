import axios from 'axios';

export default {
  state: {
    people: [
      {
        id: 1,
        name: 'Daniel Lewicki',
        email: 'd.lewicki@adawards.pl',
        created_at: '2022-01-05 18:06:45',
        updated_at: null,
        color: '#66CDFF',
        workplace: 'Manager',
        phone: '',
      },
      {
        id: 2,
        name: 'Arkadiusz Szustak',
        email: 'a.szustak@adawards.pl',
        created_at: '2022-01-05 18:06:45',
        updated_at: null,
        color: '#E2425B',
        workplace: 'Manager',
        phone: '',
      },
      {
        id: 3,
        name: 'Krzysztof Orzechowski',
        email: 'k.orzechowski@adawards.pl',
        created_at: '2022-01-05 18:06:45',
        updated_at: null,
        color: '#FDAB3D',
        workplace: 'Manager',
        phone: '',
      },
      {
        id: 4,
        name: 'Dariusz Kolber',
        email: 'd.kolber@adawards.pl',
        created_at: '2022-01-05 18:06:45',
        updated_at: null,
        color: '#F6BD73',
        workplace: 'Manager',
        phone: '',
      },
      {
        id: 5,
        name: 'Monika Brzeska',
        email: 'm.brzeska@adawards.pl',
        created_at: '2022-01-05 18:06:45',
        updated_at: null,
        color: '#696A6C',
        workplace: 'Manager',
        phone: '',
      },
      {
        id: 6,
        name: 'Kamil Pilny',
        email: 'k.pilny@adawards.pl',
        created_at: '2022-01-05 18:06:45',
        updated_at: null,
        color: '#45D29A',
        workplace: 'Manager',
        phone: '',
      },
      {
        id: 7,
        name: 'Katarzyna Krzan',
        email: 'k.krzan@adawards.pl',
        created_at: '2022-01-05 18:06:45',
        updated_at: null,
        color: '#7F5347',
        workplace: 'Manager',
        phone: '',
      },
      {
        id: 8,
        name: 'Marcin Bielaczyc',
        email: 'm.bielaczyc@adawards.pl',
        created_at: '2022-01-05 18:06:45',
        updated_at: null,
        color: '#2B76E5',
        workplace: 'Manager',
        phone: '',
      },
      {
        id: 9,
        name: 'Maciej Saradow',
        email: 'm.saradow@adawards.pl',
        created_at: '2022-01-05 18:06:45',
        updated_at: null,
        color: '#CAB641',
        workplace: 'Manager',
        phone: '',
      },
    ],
  },
  getters: {
    people: (state) => state.people,
  },
  mutations: {
    people: (state, people) => (state.people = people),
  },
  actions: {
    async people({ commit }) {
      await axios
        .get(`people/get-all`)
        .then((res) => {
          commit('people', res.data);
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
