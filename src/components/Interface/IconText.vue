<template>
  <div class="d-flex ml-2">
    <v-icon class="mr-2" color="secondary">{{ icon }}</v-icon>
    <span :class="type"> {{ text }}</span>
  </div>
</template>

<script>
export default {
  name: 'IconText',
  props: {
    icon: String,
    text: String,
    type: {
      type: String,
      default: 'bdy-1',
    },
  },
}
</script>

<style></style>
