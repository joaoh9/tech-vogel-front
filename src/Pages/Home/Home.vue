<template>
  <div class="bg-color-bg">
    <div class="container-fluid d-flex flex-column">
      <v-img :src="homeBg" style="min-height:100vh" class="bg-color-secondary mt-n16">
        <div
          :style="
            `margin-top: 156px; ${
              $vuetify.breakpoint.mobile ? 'margin-left: 50px' : 'margin-left: 150px'
            }`
          "
        >
          <h1 class="h1-bold-alternative color-light">{{ $t('home.title1') }}</h1>
          <h1 class="h1-bold-alternative color-primary">{{ $t('home.title2') }}</h1>
          <h1 class="h1-bold-alternative color-light">{{ $t('home.title3') }}</h1>
          <h5 class="h5 mt-12 color-bg">{{ $t('home.subtitle1') }}</h5>
          <h5 class="h5 color-bg">{{ $t('home.subtitle2') }}</h5>
          <div class="d-flex mt-14">
            <g-btn
              style="height: 56px; width: 270px;"
              type="primary"
              :label="$t('common.hireCTA')"
              to="/signup"
              data-cy="home-signup"
            />
            <g-btn
              class="ml-8"
              style="height: 56px; width: 270px;"
              type="outline"
              color="light"
              :label="$t('common.applyCTA')"
              to="/signup"
              data-cy="home-signup"
            />
          </div>
        </div>
      </v-img>
    </div>
    <div class="my-6">
      <HowItWorks />
    </div>
    <div class="pb-16">
      <Report />
    </div>
    <div class="d-flex justify-center mb-10">
      <PlanCard />
    </div>
    <div class="bg-color-secondary">
      <MainJobs />
    </div>
    <div>
      <AboutUs />
    </div>
  </div>
</template>

<script>

import MainJobs from 'Components/Job/MainJobs';
import homeBg from 'Assets/home-bg-op-20c.svg';
import HowItWorks from 'Components/Static/HowItWorks';
import PlanCard from 'Components/Dashboard/PlanCard';
import Report from 'Components/Static/Report';
import AboutUs from 'Components/Static/AboutUs';

export default {
  name: 'Home',
  components: {
    MainJobs,
    PlanCard,
    HowItWorks,
    Report,
    AboutUs,
  },
  data() {
    return {
      homeBg,
    };
  },

};
</script>

<style scoped>
h6 {
  color: white;
}
</style>
