<template>
  <span class="sub-1"><slot name="default"></slot></span>
</template>

<script>
export default {
  name: 'sub-1',
  props: {
    flex: Boolean,
  },
};
</script>

<style></style>
