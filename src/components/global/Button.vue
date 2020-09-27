<template>
  <v-btn
    v-if="type === 'primary'"
    @click="$emit('click')"
    color="primary"
    dark
    class="px-4"
    large
    elevation="0"
    :to="to"
  >
    {{ label }}
  </v-btn>
  <v-btn
    v-else-if="type === 'secondary'"
    @click="$emit('click')"
    color="secondary"
    outlined
    dark
    class="px-4"
    large
    elevation="0"
    :to="to"
  >
    {{ label }}
  </v-btn>
</template>

<script>
export default {
  name: 'g-btn',
  props: {
    label: String,
    to: String,
    buttonClass: String,
    type: String,
  },
};
</script>

<style></style>
