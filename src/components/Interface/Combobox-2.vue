<template>
  <v-combobox
    v-model="model"
    :items="items"
    :search-input.sync="search"
    hide-selected
    :hint="hint"
    :label="label"
    multiple
    persistent-hint
    chips
    @input="value => this.emit('input', value)"
  >
    <template v-slot:no-data>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            No results matching "
            <strong>{{ search }}</strong>". Press
            <kbd>enter</kbd> to create a new one
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </template>
  </v-combobox>
</template>

<script>
export default {
  name: 'Combobox2',
  props: {
    label: String,
    items: String,
    hint: {
      type: String,
      default: 'Maximum of 5 tags',
    },
  },
  data() {
    return {
      model: [],
    };
  },
  watch: {
    model(value) {
      this.$emit('input', value);
    },
  },
};
</script>

<style>
</style>
