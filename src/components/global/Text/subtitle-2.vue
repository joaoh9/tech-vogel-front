<template>
  <p :class="`color-${color} sub-2`"><slot name="default"></slot></p>
</template>

<script>

export default {
  name: 'sub-2',
  props: {
    color: {
      type: String,
      default: 'cinza-lighten-1',
    },
  },
};

</script>

<style></style>
