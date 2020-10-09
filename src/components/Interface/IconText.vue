<template>
  <div class="d-flex ml-2">
    <v-icon class="mr-2">{{ icon }}</v-icon>
    <span class="body-2"> {{ text }}</span>
  </div>
</template>

<script>
export default {
  name: 'IconText',
  props: {
    icon: String,
    text: String,
  },
};
</script>

<style></style>
