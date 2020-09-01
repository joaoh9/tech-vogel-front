<template>
  <div>
    <v-system-bar
      class="d-flex justify-space-around"
      :style="`${getSystemBarColor()}; `"
    >
      <div
        class="d-flex justify-center mb-9"
        style="flex-direction: column; "
        v-for="(_, i) in Array(Number(steps))"
        :key="i"
      >
        <p>Title</p>
        <v-icon
          :key="i"
          size="28px"
          :color="step > i ? 'primary' : 'cinza-lighten-3'"
        >mdi-checkbox-blank-circle</v-icon>
      </div>
    </v-system-bar>
    <v-row class="mt-12 mb-9">
      <v-col cols="1"></v-col>
      <v-col cols="10">
        <slot name='default' v-bind:step="step"/>
      </v-col>
      <v-col cols="1"></v-col>
    </v-row>
  </div>
</template>

<script>
import 'Public/css/card.css';

export default {
  name: 'NewJob',
  components: {
  },
  props: {
    steps: Number,
  },
  data() {
    return {
      step: 1,
      numSteps: Number(this.steps),
    };
  },
  methods: {
    getTitleColor(page) {
      switch (page) {
        case 1:
          if (this.step === 1) return 'color: #FF9200';
          return 'color: #A1A1AC';

        case 2:
          if (this.step === 2) return 'color: #FF9200';
          return 'color: #A1A1AC';

        case 3:
          if (this.step === 3) return 'color: #FF9200';
          return 'color: #A1A1AC';

        case 4:
          if (this.step === 4) return 'color: #FF9200';
          return 'color: #A1A1AC';
      }
    },
    getPageTitle(page) {
      return this.$t('Job.new.page' + page.toString() + '.title');
    },
    getSystemBarColor() {
      const DECIMAL_PLACES = 2;
      const previousPercentage = ((this.step - 1 || 0) * 100 / (Number(this.steps) + 1)).toFixed(DECIMAL_PLACES);
      const percentage = ((this.step || 1) * 100 / (Number(this.steps) + 1)).toFixed(DECIMAL_PLACES);
      const remainingPercentage = (100 - percentage).toFixed(DECIMAL_PLACES);
      console.log('border-radius: 6px; margin: -1px; background: linear-gradient(to right, #FCFCFF ' + percentage + '%, #FCFCFF ' + remainingPercentage + '%)')
      return 'border-radius: 6px; margin: -1px; background: linear-gradient(to right, #F1D6B2 ' + previousPercentage + '%, #FCFCFF ' + percentage + '%)';
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
