<template>
  <div>
    <div class="sidebar">
      <v-row class="nowrap">
        <v-col v-for="(item, key) in stepsExibition" :key="key" :cols="item.type === 'NAME' ? 10 : 1">
            <p
              v-if="item.type === 'NAME'"
              v-bind:style="getTitleStyle(item.step)"
              class="mx-1 text-right"
            >{{item.name}}</p>
          <div v-if="item.type === 'SPACER'" class="text-left">
            <v-icon  v-if="item.active" size=12 class="text-left" color="primary"
            >fa-circle</v-icon>
          </div>
        </v-col>
      </v-row>
    </div>
    <div class="page-wrap">
      <slot name="default"/>
    </div>
  </div>
</template>

<script>
import 'Public/css/card.css';

export default {
  name: 'NewJob',
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
        stepsExibition.push({
          type: 'SPACER',
          active: this.currentStep == (i + 1),
          step: -1,
        });
      });
      return stepsExibition;
    },
  },
  methods: {
    getTitleStyle(step) {
      return {
        'flex-basis': '100%',
        'color': this.currentStep === step ? '#ff9200' : '',
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

.page-wrap {
  margin-left: 200px;
}

.sidebar {
  width: 200px;
  position: -webkit-sticky;
  position: sticky;
  top: 75px;
  float: left;
}
</style>
