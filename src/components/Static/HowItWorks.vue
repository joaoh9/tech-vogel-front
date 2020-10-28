<template>
  <v-container>
    <v-row justify="center">
      <h2 class="color-secondary mb-12">{{ $t('common.howItWorks') }}</h2>
    </v-row>
    <v-row
      align="center"
      :class="$vuetify.breakpoint.mobile ? 'd-flex justify-center mb-12 mt-4' : 'my-4 mt-md-0'"
    >
      <h3 class="align-self-start ml-16 color-secondary mr-8">
        {{ $t('howItWorks.forCompanies') }}
      </h3>
      <h5 class="color-primary">{{ $t('common.learnMore') }} ></h5>
    </v-row>
    <v-row justify="center">
      <v-col
        v-for="(item, i) in getFloChartInfo()"
        cols="12"
        sm="6"
        md="3"
        :key="i"
        class="d-flex justify-center mt-4"
      >
        <div class="d-flex flex-column align-center justify-center mx-8 mx-md-12">
          <v-img :class="i === 0 ? '' : 'mt-6'" :src="item.src" height="150" contain />
          <bdy-1 color="secondary" class="text-center h6 mt-6">{{ item.text }} </bdy-1>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import HowItWorks1 from 'Assets/how-it-works-1.svg';
import HowItWorks2 from 'Assets/how-it-works-2.svg';
import HowItWorks3 from 'Assets/how-it-works-3.svg';
import HowItWorks4 from 'Assets/how-it-works-4.svg';

export default {
  name: 'HowItWorks',
  data() {
    return {
      HowItWorks1,
      HowItWorks2,
      HowItWorks3,
      HowItWorks4,
    };
  },
  methods: {
    getFloChartInfo() {
      return [
        { src: this.HowItWorks1, text: this.$t('howItWorks.step.1') },
        { src: this.HowItWorks2, text: this.$t('howItWorks.step.2') },
        { src: this.HowItWorks3, text: this.$t('howItWorks.step.3') },
        { src: this.HowItWorks4, text: this.$t('howItWorks.step.4') },
      ];
    },
  },
};

</script>

<style></style>
