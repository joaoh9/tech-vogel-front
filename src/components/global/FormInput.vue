<template>
  <div>
    <v-tooltip left v-if="position === 'left'">
      <template v-slot:activator="{ on, attrs }">
        <p v-on="on" v-bind="attrs" class="body-1 d-flex">
          {{ title }}
        </p>
      </template>
      <span>{{ tooltip }}</span>
    </v-tooltip>
    <v-tooltip right v-if="position === 'right'">
      <template v-slot:activator="{ on, attrs }">
        <p v-on="on" v-bind="attrs" class="body-1 d-flex">
          {{ title }}
        </p>
      </template>
      <span>{{ tooltip }}</span>
    </v-tooltip>
    <v-tooltip top v-if="position === 'top'">
      <template v-slot:activator="{ on, attrs }">
        <p v-on="on" v-bind="attrs" class="body-1 d-flex">
          {{ title }}
        </p>
      </template>
      <span>{{ tooltip }}</span>
    </v-tooltip>
    <v-tooltip bottom v-if="position === 'bottom'">
      <template v-slot:activator="{ on, attrs }">
        <p v-on="on" v-bind="attrs" class="body-1 d-flex">
          {{ title }}
        </p>
      </template>
      <span>{{ tooltip }}</span>
    </v-tooltip>
    <p v-else class="body-1 d-flex">
      {{ title }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'form-input',
  props: {
    position: String,
    title: String,
    tooltip: String,
  },
};
</script>

<style></style>
