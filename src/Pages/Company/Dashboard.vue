<template>
  <v-row class="container">
    <v-col cols="12" md="4">
      <UserCard :user="user" v-if="user && company" :key="loaded.user" :loading="loaded.user" :picture="company.logo" />
      <g-btn
        to="/jobs/new"
        class="mt-4"
        type="primary"
        block
        xl
        :label="$t('common.postAJob')"
        :icon="'mdi-plus-circle-outline'"
      />
      <g-btn
        class="mt-4"
        type="outlined"
        color="primary"
        block
        xl
        to="/settings"
        :label="$t('user.dashboard.manageAccount')"
      />
      <PlanCard
        :border="'border-color: #1a193c !important'"
        :texts="$t('howItWorks.pricing')"
        :label="$t('company.dashboard.buyReport')"
        @click="goToPagarme()"
        priceTitle
        class="mt-4"
      />
    </v-col>
    <v-col cols="12" md="8">
      <div>
        <v-skeleton-loader v-if="loadingJobs" type="article, actions" />
        <CompanyCard
          :company="company"
          v-if="company"
          :key="loaded.company"
          :jobsPosted="jobsPosted"
        />
        <v-skeleton-loader v-if="loadingJobs" type="article, actions" />
        <div v-else v-for="(job, i) in jobs" :key="i">
          <JobManagerCard :job="job" :company="company" />
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import PlanCard from 'Components/Dashboard/PlanCard';
import JobManagerCard from 'Components/Dashboard/JobManagerCard';
import UserCard from 'Components/Dashboard/UserCard';
import CompanyCard from 'Components/Dashboard/CompanyCard';

import CompanyController from 'Controllers/company';
import JobController from 'Controllers/job';

export default {
  name: 'CompanyDashboard',
  async mounted() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
    this.loaded.user = false;
    await this.getDashboardInfo();
    await this.getCurrentCompanyJobs();
    this.loaded.user = true;
  },
  components: {
    CompanyCard,
    UserCard,
    JobManagerCard,
    PlanCard,
  },
  data() {
    return {
      user: {},
      company: null,
      loadingJobs: true,
      loaded: {
        company: false,
        user: false,
      },
      jobs: [],
      jobsPosted: -1,
    };
  },
  methods: {
    async getDashboardInfo() {
      const companyController = new CompanyController();

      try {
        const { company, user, jobsPosted } = await companyController.getDashboardInfo();
        this.company = company;
        this.user = user;
        this.jobsPosted = jobsPosted;
      } catch (e) {
        this.$toast.error(this.$t('toast.error.companyInfo'));
      }
    },
    async getCurrentCompanyJobs() {
      const jobController = new JobController();
      this.loadingJobs = true;
      try {
        this.jobs = await jobController.getCurrentCompanyJobs(this.company.id);
      } catch (e) {
        this.$toast.error(this.$t('toast.error.retrieveJob'));
      } finally {
        this.loadingJobs = false;
      }
    },
    goToPagarme() {
      window.open(this.company.pagarmeLink, '_blank');
    },
  },
  watch: {
    job() {
      this.job_ = this.job;
    },
  },
};
</script>

<style>
p {
  display: inline;
}
</style>
