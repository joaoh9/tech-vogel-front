<template>
  <v-row class="container">
    <v-col cols="4">
      <UserCard :user="user" v-if="user && company" :key="loaded.user" :picture="company.logo" />
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
        type="disabled"
        color="secondary"
        block
        xl
        :label="$t('user.dashboard.manageAccount')"
      />
    </v-col>
    <v-col cols="8">
      <div>
        <CompanyCard
          :company="company"
          v-if="company"
          :key="loaded.company"
          :jobsPosted="jobsPosted"
        />
        <v-skeleton-loader v-if="loadingJobs" v-bind="attrs" type="article, actions" />
        <div v-else v-for="(job, i) in jobs" :key="i">
          <JobManagerCard :job="job" :company="company" />
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import JobManagerCard from 'Components/Dashboard/JobManagerCard';
import UserCard from 'Components/Dashboard/UserCard';
import CompanyCard from 'Components/Dashboard/CompanyCard';

import CompanyController from 'Controllers/company';
import JobController from 'Controllers/job';
import UserController from 'Controllers/user';

export default {
  name: 'CompanyDashboard',
  async mounted() {
    await this.getUserInfo();
    await this.getCompanyInfo();
    await this.getJobsPostedCount();
    await this.getCompanyJobs();
  },
  components: {
    CompanyCard,
    UserCard,
    JobManagerCard,
  },
  data() {
    return {
      user: {},
      company: null,
      loaded: {
        company: false,
        user: false,
      },
      jobs: [],
      jobsPosted: -1,
      loadingJobs: false,
    };
  },
  methods: {
    async getCompanyInfo() {
      const companyController = new CompanyController();

      try {
        this.company = await companyController.getByCurrentUser();
        this.loaded.company = true;
      } catch (e) {
        this.$toast.error(this.$t('toast.error.companyInfo'));
      }
    },
    async getJobsPostedCount() {
      const jobController = new JobController();

      try {
        this.jobsPosted = await jobController.getJobsPostedCount(this.company.id);
      } catch (e) {
        this.$toast.error(this.$t('toast.error.companyInfo'));
      }
    },
    async getUserInfo() {
      const userController = new UserController();
      this.user = userController.decodeUserToken();
    },
    async getCompanyJobs() {
      const jobController = new JobController();
      this.loadingJobs = true;
      try {
        this.jobs = await jobController.getCompanyJobs(this.company.id);
      } catch (e) {
        this.$toast.error(this.$t('toast.error.retrieveJob'));
      } finally {
        this.loadingJobs = false;
      }
    },
    getFistColInfo() {
      return {
        md: 4,
        cols: 12,
        condition: true,
      };
    },
    getSecondColInfo() {
      return {
        md: 8,
        cols: 12,
        condition: true,
      };
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
