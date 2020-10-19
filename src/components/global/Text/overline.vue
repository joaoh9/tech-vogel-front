<template>
  <p :class="`${color} overline`"><slot name="default"></slot></p>
</template>

<script>
export default {
  name: 'overline',
  props: {
    color: {
      type: String,
      default: 'color-cinza-lighten-1',
    },
  },
};
</script>

<style></style>
