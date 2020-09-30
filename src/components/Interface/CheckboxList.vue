<template>
  <v-list flat>
    <v-list-item-group multiple color="secondary">
      <template v-for="(item, i) in items">
        <v-list-item
          :key="`item-${i}`"
          :value="item"
          active-class="secondary--text text--accent-4"
          class="ml-n7 mt-n2"
        >
          <template v-slot:default="{ active }">
            <v-list-item-action>
              <v-checkbox :input-value="active" color="secondary accent-4"></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item"></v-list-item-title>
            </v-list-item-content>
          </template>
        </v-list-item>
      </template>
      <v-card-subtitle style="color: #A1A1AC" class="ml-n7 mt-n3">
        {{ subtitle }}
      </v-card-subtitle>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
  name: 'CheckboxList',
  props: {
    items: Array,
    subtitle: String,
  },
};
</script>

<style></style>
