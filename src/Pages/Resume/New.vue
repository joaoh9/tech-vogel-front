<template>
  <v-row class="mt-12">
    <v-col cols="2"></v-col>
    <v-col cols="8">
      <v-card class="primary-card" elevation="6" color="bg">
        <Stepper
          ref="stepper"
          steps=5
        >
        <template v-slot:default=" { step } ">
          <v-btn
           v-on:click="nextStep">{{step}}</v-btn>

        </template>
        </Stepper>
      </v-card>
    </v-col>
    <v-col cols="2"></v-col>
  </v-row>
</template>

<script>
import 'Public/css/card.css';
import Stepper from 'Components/Interface/Stepper';

export default {
  name: 'NewJob',
  components: {
    Stepper,
  },
  data() {
    return {
    };
  },
  methods: {
    nextStep() {
      this.$refs.stepper.step += 1;
    },
  },
};
</script>

<style>
.v-text-field {
  width: 100%;
}

.ql-container {
  font-family: Open Sans !important;
}
</style>
