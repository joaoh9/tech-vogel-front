<template>
  <v-container class="d-flex align-center flex-column">
    <h2 class="h2-bold color-secondary">{{ $t('common.howItWorks') }}</h2>
    <h4>{{ $t('howItWorks.forCompanies') }}</h4>
    <v-row align="center" class="mt-4" justify="center">
      <v-col cols="12" md="6">
        <div class="d-flex justify-center">
          <v-img :src="HowItWorks" :max-width="$vuetify.breakpoint.mdAndUp ? 600 : 340" />
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <div v-for="(item, i) in getSteps()" :key="i">
          <v-row align="center" justify="center">
            <v-col cols="2">
              <v-btn class="mx-2 rounded-circle" outlined fab color="secondary">
                {{ i }}
              </v-btn>
            </v-col>
            <v-col>
              <h5 class="h5-bold">{{ item.title }}</h5>
              <bdy-1>{{ item.description }}</bdy-1>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import HowItWorks from 'Assets/how-it-works.svg';

export default {
  name: 'HowItWorks',
  data() {
    return {
      HowItWorks,
    };
  },
  methods: {
    getSteps() {
      return this.$t('howItWorks.step');
    },
    getMinWidth() {
      console.log(window.innerWidth);
      return window.innerWidth;
    },
  },
};
</script>

<style></style>
