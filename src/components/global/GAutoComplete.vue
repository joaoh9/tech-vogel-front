<template>
  <v-autocomplete
    :title="title"
    :label="label"
    :hint="hint"
    :rules="rules"
    :multiple="multiple"
    :items="items"
    v-model="data"
    outlined
    small-chips
    deletable-chips
    item-text="text"
    item-value="value"
    hide-selected
    hide-details
  />
</template>

<script>
export default {
  name: 'g-autocomplete',
  props: {
    title: String,
    label: String,
    hint: String,
    rules: Array,
    multiple: {
      type: Boolean,
      default: true,
    },
    items: Array,
  },
  data() {
    return {
      data: '',
    };
  },
  watch: {
    data() {
      this.$emit('input', this.data);
    },
  },
};
</script>

<style></style>
