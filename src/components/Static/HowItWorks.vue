<template>
  <div>
    <div class="d-flex justify-center">
      <h2>{{ $t('common.howItWorks') }}</h2>
    </div>
    <div class="d-flex align-center mb-16 mx-16">
      <h3 class="align-self-start ml-16 color-secondary mr-8">
        {{ $t('howItWorks.forCompanies') }}
      </h3>
      <capt-1 color="primary"> {{ $t('common.learnMore') }} ></capt-1>
    </div>
    <div class="d-flex justify-center mx-16">
      <div
        class="d-flex flex-column align-center justify-center mx-4 mx-sm-8 mx-md-16"
        v-for="(item, i) in getFloChartInfo()"
        :key="i"
      >
        <v-img :src="item.src" height="200" contain />
        <bdy-1 class="text-center" color="secondary">{{ item.text }} </bdy-1>
      </div>
    </div>
  </div>
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
