<template>
  <p :class="`color-${color} overline`"><slot name="default"></slot></p>
</template>

<script>

export default {
  name: 'overline',
  props: {
    color: {
      type: String,
      default: 'cinza-lighten-1',
    },
  },
};

</script>

<style></style>
