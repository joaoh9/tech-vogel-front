<template>
  <div>
    <div class="d-flex justify-center">
      <v-tabs
        v-if="!$vuetify.breakpoint.mobile"
        vertical
        :value="this.value"
        @change="updateStep"
        background-color="rgba(0,0,0,0)"
        class="mr-4 cursor-default"
        :key="updatedTab"
      >
        <v-tab
          v-for="(item, i) in stepsExibition"
          :key="i"
          :aria-selected="true"
          style="cursor: default"
          @click="() => true"
          :class="`color-cinza-lighten-2 text-capitalize ${i === value_ ? 'sub-2' : 'bdy-2'}`"
        >
          {{ item.name }}
        </v-tab>
      </v-tabs>
      <div class="mb-6">
        <slot name="default" />
      </div>
    </div>
    <v-divider v-if="$vuetify.breakpoint.mobile" class="mb-4" />
    <div class="d-flex justify-center my-2" v-if="$vuetify.breakpoint.mobile">
      <v-rating
        :value="stepBottomNav"
        :length="stepsNames.length"
        small
        empty-icon="mdi-circle"
        full-icon="mdi-circle"
        color="primary"
        background-color="tertiary"
        @input="updateStepBottomNav"
      />
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
    this.updateSliderWrapper();
    console.log('this.value', this.value);
    this.value_ = parseInt(this.value);
    this.updateSliderWrapper();
  },
  data() {
    return {
      updatedTab: false,
      step: 0,
      numSteps: parseInt(this.steps),
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
      this.updateSliderWrapper();
      return this.value_ + 1;
    },
  },
  methods: {
    updateSliderWrapper() {
      const wrapper = document.querySelector('.v-tabs-slider-wrapper');
      if (!wrapper) return;
      wrapper.removeAttribute('style');
      wrapper.setAttribute('style', 'height: 48px; right: 0px; top: 48px; width: 2px;');
    },
    updateStep(step) {
      this.value_ = step;
      this.$emit('input', this.value_);
      this.updateSliderWrapper();
    },
    updateStepBottomNav(step) {
      this.value_ = step - 1;
      this.$emit('input', this.value_);
      this.updateSliderWrapper();
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

.v-tabs-slider-wrapper {
  height: 47px;
  right: 0px;
  top: 0px;
  width: 2px;
}
</style>
