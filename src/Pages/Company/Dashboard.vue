<template>
  <g-bootstrap :firtsCol="getFistColInfo()" :secondCol="getSecondColInfo()">
    <template template v-slot:first-col>
      <UserCard :user="user" v-if="user" :key="loaded.user" />
      <g-btn to="/jobs/new" class="mt-4" type="primary" block xl :label="$t('common.postAJob')" />
      <g-btn
        class="mt-4"
        type="outlined"
        color="secondary"
        block
        xl
        :label="$t('user.dashboard.manageAccount')"
      />
    </template>
    <template template v-slot:second-col>
      <div>
        <CompanyCard :company="company" v-if="company" :key="loaded.company" />
        <div v-for="(job, i) in jobs" :key="i">
          <JobManagerCard :job="job" :company="company" />
        </div>
      </div>
    </template>
  </g-bootstrap>
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
    await this.getCompanyJobs();
  },
  components: {
    CompanyCard,
    UserCard,
    JobManagerCard,
  },
  data() {
    return {
      user: null,
      company: null,
      loaded: {
        company: false,
        user: false,
      },
      jobs: [],
    };
  },
  methods: {
    async getCompanyInfo() {
      const companyController = new CompanyController();

      try {
        this.company = await companyController.getByUserId('current');
        this.loaded.company = true;
      } catch (e) {
        this.$toast.error(this.$t('toast.error.companyInfo'));
      }
    },
    async getUserInfo() {
      const userController = new UserController();
      this.user = userController.decodeUserToken();

      this.loaded.user = false;
      if (!this.user) {
        this.$toast(this.$t('toast.error.retrieveUser'));
        this.$router.push({
          path: '/login',
        });
      }
    },
    async getCompanyJobs() {
      const jobController = new JobController();
      try {
        this.jobs = await jobController.getCompanyJobs(this.company.id);
      } catch (e) {
        this.$toast.error(this.$t('toast.error.retrieveJob'));
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
