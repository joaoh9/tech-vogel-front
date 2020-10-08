<template>
  <v-combobox :rules="rules" :items="items" outlined @input="$emit('input', experienceLevel)" />
</template>

<script>
export default {
  name: 'g-combobox',
  props: {
    rules: Array,
    items: Array,
    outlined: Boolean,
  },
};
</script>

<style></style>
