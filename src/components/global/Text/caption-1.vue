<template>
  <p :class="`color-${color} caption-1`"><slot name="default"></slot></p>
</template>

<script>
export default {
  name: 'capt-1',
  props: {
    color: {
      type: String,
      default: 'cinza-lighten-1',
    },
  },
};
</script>

<style></style>
