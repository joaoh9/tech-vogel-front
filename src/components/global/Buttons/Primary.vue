<template>
  <v-btn @click="$emit('click')" color="primary" dark class="px-4" large elevation="0" :to="to">
    {{ label }}
  </v-btn>
</template>

<script>
export default {
  name: 'g-btn-primary',
  props: {
    label: String,
    to: String,
  },
};
</script>

<style></style>
