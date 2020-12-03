<template>
  <v-container class="d-flex align-center flex-column">
    <h2 class="h2-bold-alternative color-secondary mt-6">{{ $t('common.howItWorks') }}</h2>
    <h4 class="color-secondary my-16">{{ $t('howItWorks.forCompanies') }}</h4>
    <v-row align="center" class="mt-4" justify="center">
      <v-col cols="12" md="6">
        <div class="d-flex align-center flex-column">
          <v-img :src="HowItWorks" :max-width="$vuetify.breakpoint.mdAndUp ? 600 : 340" />
          <v-img
            class="mt-4"
            :src="whatIsReport"
            :max-width="$vuetify.breakpoint.mdAndUp ? 600 : 400"
          />
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <div v-for="(item, i) in getSteps()" :key="i">
          <v-row>
            <v-col cols="2">
              <span class="circle">
                {{ i + 1 }}
              </span>
            </v-col>
            <v-col>
              <h5 class="h5-bold color-secondary">{{ item.title }}</h5>
              <bdy-1 color="color-dark my-4">{{ item.description }}</bdy-1>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import HowItWorks from 'Assets/how-it-works.svg';
import whatIsReport from 'Assets/what-is-report.svg';

export default {
  name: 'HowItWorks',
  data() {
    return {
      HowItWorks,
      whatIsReport,
    };
  },
  methods: {
    getSteps() {
      return this.$t('howItWorks.steps');
    },
    getMinWidth() {
      return window.innerWidth;
    },
  },
};
</script>

<style scoped>
.circle {
  border: 1px solid #1a193c;
  color: #1a193c;
}
</style>
