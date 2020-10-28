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

import StorageHelper from 'Helpers/storage';

export default {
  name: 'CompanyDashboard',
  mounted() {
    this.getUserInfo();
    this.getCompanyInfo();
    this.getCompanyJobs();
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
      const companyId = StorageHelper.loadState('companyId');
      if (!companyId) {
        this.$toast.error(
          'Could not retrieve company info. Make sure you have a registered company',
        );
        this.$router.push({
          name: 'New Company',
        });
      }
      const companyController = new CompanyController();

      try {
        this.company = await companyController.getById(companyId);
        this.loaded.company = true;
      } catch (e) {
        this.$toast.error(
          'Could not retrieve company info. Make sure you have a registered company',
        );
      }
    },
    async getUserInfo() {
      this.user = StorageHelper.loadState('user');
      this.loaded.user = false;
      if (!this.user) {
        this.$toast('Could not retrieve user info. Please login again');
        this.$router.push({
          path: '/login',
        });
      }
    },
    async getCompanyJobs() {
      const jobController = new JobController();

      try {
        this.jobs = await jobController.getCompanyJobs(this.company.companyId);
      } catch (e) {
        this.$toast.error('An error occured when retrieving jobs from the database');
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
