<template>
  <div class="rating">
    <div
      v-for="star in +value"
      :key="`star-${star}`"
      class="star"
      @click="changeValue(star)"
    >
      <mdicon name="star" />
    </div>
    <div
      v-for="outlineStar in 5 - +value"
      :key="`outline-star-${outlineStar}`"
      class="star"
      @click="changeValue(+value + outlineStar)"
    >
      <mdicon name="star-outline" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['value'],
  methods: {
    changeValue(value) {
      console.log(value);
    },
  },
};
</script>

<style scoped>
.rating {
  display: flex;
  justify-content: center;
}
:is(.mdi-star, .mdi-star-outline) path {
  fill: #ffcb00;
}
:is(.mdi-star, .mdi-star-outline):hover path {
  opacity: 0.6;
}
:is(.mdi-star, .mdi-star-outline) svg {
  height: 18px;
  width: 18px;
}
</style>
