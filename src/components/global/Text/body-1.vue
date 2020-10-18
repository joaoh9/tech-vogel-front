<template>
  <p :class="`${color} bdy-1`"><slot name="default"></slot></p>
</template>

<script>
export default {
  name: 'bdy-1',
  props: {
    color: {
      type: String,
      default: 'color-cinza-lighten-1',
    },
  },
};
</script>

<style></style>
