<template>
  <div class="bg-color-bg">
    <div class="container-fluid d-flex flex-column">
      <v-img :src="homeBg" style="height: 95vh" class="bg-color-secondary-lighten-1">
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
          <h5 class="h5 mt-12 color-bg subtitle">{{ $t('home.subtitle') }}</h5>
          <div class="d-flex mt-14">
            <g-btn
              class="font-details"
              style="height: 56px; width: 270px;"
              type="primary"
              :label="$t('common.startHiring')"
              to="/signup"
              data-cy="home-signup"
            />
            <g-btn
              class="ml-8 font-details"
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
    <div class="mx-md-16 md-4 mt-16">
      <ReportTip />
      <div class="mt-16">
        <HowItWorks />
      </div>
      <div class="mx-md-n16 md-n4 my-16">
        <v-card
          class="px-16 pt-4 pb-4"
          flat
          style="background: linear-gradient(231.9deg, #264981 0%, #29245D 71.67%); border-radius: 0px !important;"
        >
          <div class="d-flex justify-center">
            <h2 class="h2-bold-alternative color-light text-center my-12" style="max-width: 950px;">
              {{ $t('home.timeWasted') }}
            </h2>
          </div>
        </v-card>
      </div>
        <ForDevs />
      <div class="d-flex align-center flex-column flex-wrap">
        <h2 class="h2-bold color-secondary">{{ $t('common.ourPricing') }}</h2>
        <h5 class="h5 mt-4 color-cinza-lighten-1">
          {{ $t('common.startPostingJobsForFreeToday') }}
        </h5>
        <div class="d-flex mt-14 justify-center flex-wrap mb-10">
          <CompanyPlan class="mx-3 my-3" />
          <DevsPlan class="mx-3 my-3" />
        </div>
      </div>
      <div
        class="mx-md-n16"
        style="background: linear-gradient(231.9deg, #264981 0%, #29245D 71.67%); margin-top: -268px"
      >
        <div class="d-flex align-center flex-column flex-wrap" style="padding-top: 268px">
          <h2 class="h2-bold mt-4 color-light">{{ $t('common.areYouLookingForAJob') }}</h2>
          <h5 class="h5 mt-4 color-light">
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
import CompanyPlan from 'Components/Dashboard/CompanyPlan';
import DevsPlan from 'Components/Dashboard/DevsPlan';
import AboutUs from 'Components/Static/AboutUs';
import Questions from 'Components/Static/Questions.vue';
import ReportTip from 'Components/Static/ReportTip';
import TypesOfProgrammers from 'Components/Static/TypesOfProgrammers.vue';

export default {
  name: 'Home',
  components: {
    MainJobs,
    CompanyPlan,
    DevsPlan,
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

.font-details {
  font-size: 1em;
  font-weight: 400;
}

.subtitle {
  max-width: 600px;
}
</style>
