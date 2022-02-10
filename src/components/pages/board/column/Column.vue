<template>
  <div class="column">
    <component :value="value" :is="columnType"></component>
  </div>
</template>

<script>
export default {
  props: ['type', 'value'],

  computed: {
    columnType() {
      let type = this.type[0].toUpperCase() + this.type.slice(1);
      return this.$store.getters.columnTypes[type];
    },
  },

  created() {
    if (!this.type)
      console.error('Column component error: "Set type, please!"');
  },
};
</script>

<style scoped>
.column {
  width: 100%;
  height: 100%;
}
</style>
