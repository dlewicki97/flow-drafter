export default {
  state: {
    columnTypes: {
      Rating: () => import('@/components/pages/board/column/types/Rating.vue'),
      Status: () => import('@/components/pages/board/column/types/Status.vue'),
      People: () => import('@/components/pages/board/column/types/People.vue'),
    },
  },
  getters: {
    columnTypes: (state) => state.columnTypes,
  },
};
