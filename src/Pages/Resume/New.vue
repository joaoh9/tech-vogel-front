<template>
  <v-row class="mt-12">
    <v-col cols="2"></v-col>
    <v-col cols="8">
      <v-card class="primary-card" elevation="6" color="bg">
        <Stepper
          ref="stepper"
          steps=3
          :stepsNames="stepsNames"
          v-bind:currentStep="currentStep"
        >
        <template v-slot:default=" { } ">
          <div v-if="currentStep == 1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis vitae neque quod sequi cum. Nulla quas, eveniet minus provident, praesentium adipisci fugiat corporis, velit atque dolore maiores aliquid. Asperiores, sequi.
          </div>
          <div v-if="currentStep == 2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis vitae neque quod sequi cum. Nulla quas, eveniet minus provident, praesentium adipisci fugiat corporis, velit atque dolore maiores aliquid. Asperiores, sequi.
          </div>
          <div v-if="currentStep == 3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis vitae neque quod sequi cum. Nulla quas, eveniet minus provident, praesentium adipisci fugiat corporis, velit atque dolore maiores aliquid. Asperiores, sequi.
          </div>
            <v-btn
            v-on:click="nextStep">{{currentStep}}</v-btn>

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
      currentStep: 1,
      stepsNames: [
        'Lorem ipsum',
        'Lorem ipsum',
        'Lorem ipsum',
        'Lorem ipsum',
        'Lorem ipsum',
      ],
    };
  },
  methods: {
    nextStep() {
      this.currentStep += 1;
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
