<template>
  <div>
    <div>
      <div
        class="d-flex justify-space-around align-start text-center flex-grow-0"
      >
        <p v-for="(_, i) in Array(Number(steps))" :key="i" style="flex-basis:100%;" class="mx-1">
          {{Array(i+2).map(x => "Title")}}
        </p>
      </div>
      <div
        class="d-flex justify-space-around align-center"
        :style="`${getSystemBarColor()}; `"
      >
        <div
          class="d-flex justify-end  align-center"
          style="flex-direction: column; flex-basis:100%"
          v-for="(_, i) in Array(Number(steps))"
          :key="i"
        >
          <v-icon
            :key="i"
            size="28px"
            :color="step > i ? 'primary' : 'cinza-lighten-3'"
          >mdi-checkbox-blank-circle</v-icon>
        </div>
      </div>
    </div>
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
      const currentStep = this.step || 1;
      const stepStart = ((1 / 3 + currentStep - 1) * 100 / ((Number(this.steps)))).toFixed(DECIMAL_PLACES);
      const stepEnd = ((2 / 3 + currentStep - 1) * 100 / ((Number(this.steps)))).toFixed(DECIMAL_PLACES);
      console.log('border-radius: 6px; margin: -1px; background: linear-gradient(to right, #FCFCFF ' + stepStart + '%, #FCFCFF ' + stepEnd + '%)')
      return 'border-radius: 6px; margin: -1px; background: linear-gradient(to right, #F1D6B2 ' + stepStart + '%, #FCFCFF ' + stepEnd + '%)';
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
