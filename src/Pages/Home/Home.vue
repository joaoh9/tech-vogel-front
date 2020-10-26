<template>
  <div class="bg-color-bg ">
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
              label="I want to hire"
              to="/signup"
            />
            <g-btn
              class="ml-8"
              style="height: 56px; width: 270px;"
              type="outline"
              color="light"
              label="I want to get hired"
              to="/signup"
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
    <div class="my-16 bg-color-secondary">
      <g-bootstrap>
        <template v-slot:first-col>
          <div></div>
        </template>
        <template v-slot:second-col>
          <div class="mt-n12 mb-n12">
            <div v-for="(job, i) in jobs" :key="i">
              <JobCard :job="job" class="mb-4" v-if="$vuetify.breakpoint.mdAndUp" />
              <JobCardMobile :job="job" class="mb-4" v-else />
            </div>
          </div>
        </template>
        <template v-slot:third-col>
          <div></div>
        </template>
      </g-bootstrap>
    </div>
    <div>
      <AboutUs />
    </div>
  </div>
</template>

<script>
import JobController from 'Controllers/job';
import CompanyController from 'Controllers/company';
import JobCard from 'Components/Job/JobCard';
import JobCardMobile from 'Components/Job/JobCardMobile';
import homeBg from 'Assets/home-bg-op-20.svg';
import HowItWorks from 'Components/Static/HowItWorks';
import Report from 'Components/Static/Report';
import AboutUs from 'Components/Static/AboutUs';

export default {
  name: 'Home',
  components: {
    JobCardMobile,
    HowItWorks,
    JobCard,
    Report,
    AboutUs,
  },
  mounted() {
    this.getJobs();
  },
  data() {
    return {
      jobs: [],
      homeBg,
    };
  },
  methods: {
    async getJobs() {
      const jobController = new JobController();
      try {
        this.jobs = await jobController.getAll();
        this.jobs = this.jobs.splice(0, 6);
        await this.getCompanyInfo();
      } catch (e) {
        this.$toast.error('An error occurred when retrieving jobs from the database');
      }
    },
    async getCompanyInfo() {
      const companyController = new CompanyController();
      try {
        for (let i = 0; i < this.jobs.length; i++) {
          this.jobs[i].company = await companyController.getById(this.jobs[i].companyId);
        }
      } catch (e) {
        this.$toast.error('An error has occurred when retrieving company information on a job');
      }
    },
  },
};
</script>

<style scoped>
h6 {
  color: white;
}
</style>
