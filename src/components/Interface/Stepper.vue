<template>
  <div>
    <v-row>
      <v-col cols=12 md=2 v-if="$vuetify.breakpoint.lgAndUp">
        <div class="sidebar">
          <div v-for="(item, key) in stepsExibition" :key="key">
            <div class="d-flex">
                <p
                  v-bind:style="getTitleStyle(item.step)"
                  class="mx-1 text-right flex-fill"
                >{{item.name}}</p>
                <div v-bind:style="getStepIndicatorStyle(item.step)"></div>
            </div>
          </div>
        </div>

      </v-col>
      <v-col cols=12 md=10>

    <div class="page-wrap mx-5 my-2">
      <slot name="default"/>
    </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import 'Public/css/card.css';

export default {
  name: 'Stepper',
  components: {},
  props: {
    steps: Number || String,
    currentStep: Number  || String,
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
      Array.from({length: this.steps}, (_, i) => {
        stepsExibition.push({
          type: 'NAME',
          name: this.stepsNames[i],
          step: i + 1,
        });
      });
      return stepsExibition;
    },
  },
  methods: {
    getTitleStyle(step) {
      return {
        'color': this.currentStep === step ? '#ff9200' : '',
      }
    },
    getStepIndicatorStyle(step) {
      return {
        'background-color': this.currentStep === step ? '#ff9200' : 'rgba(123,23,23,0)',
        'width': '2px',
        'height': '25px',
      }
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
  float: left;
}


</style>
