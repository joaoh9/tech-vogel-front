<template>
  <div class="d-flex justify-center">
    <v-tabs
      vertical
      :value="this.value"
      @change="updateStep"
      background-color="rgba(0,0,0,0)"
      class="mr-4"
    >
      <v-tab v-for="(item, key) in stepsExibition" :key="key">
        {{ item.name }}
      </v-tab>
    </v-tabs>
    <slot name="default" />
  </div>
</template>

<script>
import 'Public/css/card.css';

export default {
  name: 'Stepper',
  components: {},
  props: {
    steps: [ Number, String ],
    value: [ Number, String ],
    stepsNames: Array,
  },
  data() {
    return {
      step: 1,
      numSteps: Number(this.steps),
    };
  },
  computed: {
    stepsExibition() {
      const stepsExibition = [];
      this.stepsNames.forEach((stepName, i) => {
        stepsExibition.push({
          type: 'NAME',
          name: stepName,
          step: i,
        });
      });
      return stepsExibition;
    },
  },
  methods: {
    getTitleStyle(step) {
      return {
        color: this.value === step ? '#ff9200' : '',
      };
    },
    getStepIndicatorStyle(step) {
      return {
        'background-color': this.value === step ? '#ff9200' : 'rgba(123,23,23,0)',
        width: '2px',
        height: '25px',
      };
    },
    updateStep(step) {
      this.value = step;
      this.$emit('input', step);
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

.sidebar {
  width: 100%;
  position: -webkit-sticky;
  position: sticky;
  top: 75px;
}
</style>
