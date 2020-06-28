<template>
  <v-combobox
    v-model="model"
    :items="items"
    hide-selected
    :hint="hint"
    :label="label"
    item-text="name"
    item-value="name"
    multiple
    persistent-hint
    outlined
    rounded
    small-chips
    @input="value => this.$emit('input', value)"
  >
    <template v-slot:selection="{ attrs, item, parent, selected }">
      <v-chip
        v-if="item === Object(item)"
        v-bind="attrs"
        :color="color || `blue lighten-5`"
        :input-value="selected"
      >
        <span class="pr-2">
          {{ item.name }}
        </span>
        <v-icon small @click="parent.selectItem(item)">mdi-close</v-icon>
      </v-chip>
    </template>
  </v-combobox>
</template>

<script>
export default {
  name: 'Combobox2',
  props: {
    label: String,
    items: Array,
    color: String,
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

<style></style>
