<template>
  <p :class="`color-${color} bdy-2`"><slot name="default"></slot></p>
</template>

<script>
export default {
  name: 'bdy-2',
  props: {
    color: {
      type: String,
      default: 'cinza-lighten-1',
    },
  },
};
</script>

<style></style>
