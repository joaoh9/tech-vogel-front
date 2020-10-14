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
        :key="updatedTab"
      >
        <v-tab
          v-for="(item, i) in stepsExibition"
          :key="i"
          :aria-selected="true"
          :class="`color-cinza-lighten-2 text-capitalize ${i === value_ ? 'sub-2' : 'bdy-2'}`"
        >
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
export default {
  name: 'Stepper',
  components: {},
  props: {
    steps: [ Number, String ],
    value: [ Number, String ],
    stepsNames: Array,
  },
  mounted() {
    this.value_ = this.value;
  },
  data() {
    return {
      updatedTab: false,
      step: 1,
      numSteps: Number(this.steps),
      value_: 0,
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
      return this.value_ + 1;
    },
  },
  methods: {
    getTitleStyle(step) {
      return {
        color: this.value_ === step ? '#ff9200' : '',
      };
    },
    getStepIndicatorStyle(step) {
      return {
        'background-color': this.value_ === step ? '#ff9200' : 'rgba(123,23,23,0)',
        width: '2px',
        height: '25px',
      };
    },
    updateStep(step) {
      this.value_ = step;
      this.$emit('input', this.value_);
    },
    updateStepBottomNav(step) {
      this.value_ = step - 1;
      this.$emit('input', this.value_);
    },
  },
};
</script>

<style>
/* Passar styles para pasta Public/css */
.v-text-field {
  width: 100%;
}

.ql-container {
  font-family: Open Sans !important;
}


.v-tab {
  justify-content: flex-end;
}

/*
TODO: trocar barrinha laranja da sidebar prol lado direito
.sidebar {
  width: 100%;
  position: -webkit-sticky;
  position: sticky;
  top: 75px;
}

.v-tabs-slider-wrapper,
.v-tabs-slider-wrapper > element.style {
  align-self: center;
  height: 30px !important;
  right: 0px !important;
  top: 0px !important;
  width: 2px !important;
}

v-tabs-slider {
  align-self: center;
}
*/
</style>


