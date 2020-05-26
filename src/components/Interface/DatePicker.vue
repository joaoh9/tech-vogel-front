<template>
  <v-layout mx-0 row wrap>
    <v-menu
      v-model="menu"
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
          :label="label"
          v-model="formattedDate"
          :color="'primary' || color"
          tile
          outlined
          @change="date = parse(formattedDate)"
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker
        ref="picker"
        :color="'primary' || color"
        no-title
        v-model="date"
        @input="menu = false"
      >
      </v-date-picker>

    </v-menu>
  </v-layout>
</template>

<script>
const moment = require('moment');

export default {
  name: 'DatePicker',
  props: {
    label: String,
    icon: String,
    color: String,
  },
  data() {
    return {
      date: null,
      formattedDate: null,
      menu: false,
    };
  },
  methods: {
    format(date) {
      return moment(date).format(this.$t('format.date')) || null;
    },
    parse(str) {
      const date = moment(str, this.$t('format.date'));
      return date.isValid() ? date.format('YYYY-MM-DD') : null;
    },
  },
  watch: {
    date() {
      this.formattedDate = this.date ? this.format(this.date) : undefined;
    },
  },
};
</script>
