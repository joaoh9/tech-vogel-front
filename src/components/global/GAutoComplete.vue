<template>
  <v-autocomplete
    :title="title"
    :label="label"
    :hint="hint"
    :rules="rules"
    :multiple="multiple"
    :items="items"
    :autofocus="autofocus"
    v-model="data"
    class="mb-8"
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
    autofocus: {
      type: Boolean,
      default: false,
    },
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
