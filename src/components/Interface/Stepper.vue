<template>
  <div>
    <div class="d-flex justify-center">
      <v-tabs
        v-if="!$vuetify.breakpoint.smAndDown"
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
    <v-divider v-if="$vuetify.breakpoint.smAndDown" class="mb-4" />
    <div class="d-flex justify-center my-2" v-if="$vuetify.breakpoint.smAndDown">
      <v-rating
        :value="this.stepBottomNav"
        :length="stepsNames.length"
        small
        empty-icon="mdi-circle"
        full-icon="mdi-circle"
        color="primary"
        background-color="tertiary"
        @input="updateStepBottomNav"
      ></v-rating>
    </div>
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
  mounted() {
    this._value = this.value
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
    stepBottomNav() {
      return this._value + 1;
    },
  },
  methods: {
    getTitleStyle(step) {
      return {
        color: this._value === step ? '#ff9200' : '',
      };
    },
    getStepIndicatorStyle(step) {
      return {
        'background-color': this._value === step ? '#ff9200' : 'rgba(123,23,23,0)',
        width: '2px',
        height: '25px',
      };
    },
    updateStep(step) {
      this._value = step;
      this.$emit('input', this._value);
    },
    updateStepBottomNav(step) {
      this._value = step - 1;
      this.$emit('input', this._value);
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


