<template>
  <section v-if="board || true" class="board">
    <div class="board-content">
      <h1 class="title">{{ 'Nazwa tablicy' }}</h1>
    </div>

    <Table v-for="table in 100" :table="table" :key="table" />
  </section>
</template>

<script>
import '@/assets/min-css/board.min.css';
export default {
  data() {
    return {
      array: [],
    };
  },
  components: {
    Table: () => import('@/components/pages/board/Table.vue'),
  },
  computed: {
    board() {
      return this.$store.getters.boards.find(
        (board) => board.id == this.$route.params.boardId
      );
    },
  },
  created() {
    // this.$store.dispatch('statuses');
  },
};
</script>
