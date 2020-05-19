<template>
  <v-layout row wrap>
    <v-menu
      v-model="dateMenu"
      :close-on-content-click="false"
      lazy
      transition="scale-transition"
      offset-y
      full-width
      max-width="290px"
      min-width="290px"
    >
      <template v-slot:activator="{ on }">
        <v-text-field
          :label="name"
          :value="dateVal"
          :color="'primary' || color"
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker
        :color="'primary' || color"
        no-title
        v-model="dateVal"
        @input="dateMenu = false"
      >
      </v-date-picker>

    </v-menu>
  </v-layout>
</template>

<script>
export default {
  name: 'DatePicker',
  props: {
    name: String,
    icon: String,
    color: String,
  },
  data() {
    return {
      dateVal: null,
      dateMenu: false,
    };
  },
};
</script>
