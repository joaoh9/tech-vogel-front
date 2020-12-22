<template>
  <div class="bg-color-bg">
    <div class="container-fluid d-flex flex-column flex-wrap">
      <v-img class="bg-color-secondary pb-16" max-height="800">
        <div
          :style="
            `${
              !$vuetify.breakpoint.smAndUp
                ? 'margin-left: 32px; margin-top: 8px;'
                : 'margin-left: 100px; margin-top: 32px; '
            }`
          "
        >
          <div v-if="$vuetify.breakpoint.smAndUp">
            <h1 class="h1-bold-alternative color-light">{{ $t('home.title1') }}</h1>
            <h1 class="h1-bold-alternative color-primary">{{ $t('home.title2') }}</h1>
            <h1 class="h1-bold-alternative color-light">{{ $t('home.title3') }}</h1>
          </div>
          <div v-else>
            <h1 class="h3-bold-alternative color-light">{{ $t('home.title1') }}</h1>
            <h1 class="h3-bold-alternative color-primary">{{ $t('home.title2') }}</h1>
            <h1 class="h3-bold-alternative color-light">{{ $t('home.title3') }}</h1>
          </div>
          <h5 class="h5 mt-6 mt-sm-12 color-bg line-break">{{ $t('home.subtitle') }}</h5>
          <div class="d-flex mt-5 mt-sm-10 flex-wrap">
            <g-btn
              class="font-details mr-4 my-2"
              style="height: 56px; width: 270px;"
              type="primary"
              :label="$t('common.startHiring')"
              to="/signup"
              data-cy="home-signup"
            />
            <g-btn
              class="my-2 font-details"
              style="height: 56px; width: 270px;"
              type="outline"
              color="light"
              :label="$t('common.applyJobs')"
              to="/signup"
              data-cy="home-signup"
            />
          </div>
        </div>
      </v-img>
    </div>
    <div class="mx-sm-16 md-4">
      <ReportTip />
      <div class="mt-16 d-flex justify-center">
        <h2 class="h2-bold-alternative text-center color-secondary">
          {{ $t('common.howItWorks') }}
        </h2>
      </div>
      <HowItWorks />
      <div class="mx-sm-n16 md-n4 mb-12">
        <v-card
          class="px-16 pt-4 pb-4"
          flat
          style="background: linear-gradient(231.9deg, #264981 0%, #29245D 71.67%); border-radius: 0px !important;"
        >
          <div class="d-flex justify-center">
            <h2
              :class="
                !$vuetify.breakpoint.smAndUp
                  ? 'h3-bold-alternative color-light text-center my-12'
                  : 'h2-bold-alternative color-light text-center my-12'
              "
              style="max-width: 950px;"
            >
              {{ $t('home.timeWasted') }}
            </h2>
          </div>
        </v-card>
      </div>
      <div class="d-flex align-center flex-column">
        <ForDevs />
      </div>
      <div class="d-flex align-center flex-column">
        <Pricing />
      </div>
      <div
        class="mx-sm-n16"
        style="background: linear-gradient(231.9deg, #264981 0%, #29245D 71.67%); margin-top: -268px"
      >
        <div class="d-flex align-center flex-column" style="padding-top: 268px">
          <h2 class="h2-bold text-center color-light mx-2 mx-sm-16">
            {{ $t('common.areYouLookingForAJob') }}
          </h2>
          <h5 class="h5 text-center mt-4 mb-2 color-light mx-16">
            {{ $t('common.freedomWork') }}
          </h5>
          <MainJobs />
        </div>
      </div>
      <div class="mt-10">
        <AboutUs />
      </div>
      <div class="mt-10">
        <TypesOfProgrammers />
      </div>
      <div class="mt-10">
        <h4 class="d-flex text-center justify-center mb-6 mt-16">{{ $t('questions.title') }}</h4>
        <Questions />
      </div>
    </div>
  </div>
</template>

<script>
import MainJobs from 'Components/Job/MainJobs';
import homeBg from 'Assets/home-bg-op-20c.svg';
import HowItWorks from 'Components/Static/HowItWorks';
import ForDevs from 'Components/Static/ForDevs';
import Pricing from 'Pages/Static/Pricing'
import AboutUs from 'Components/Static/AboutUs';
import Questions from 'Components/Static/Questions.vue';
import ReportTip from 'Components/Static/ReportTip';
import TypesOfProgrammers from 'Components/Static/TypesOfProgrammers.vue';

export default {
  name: 'Home',
  components: {
    MainJobs,
    Pricing,
    ForDevs,
    HowItWorks,
    AboutUs,
    Questions,
    TypesOfProgrammers,
    ReportTip,
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

.line-break {
  max-width: 600px;
}
</style>
