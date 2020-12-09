<template>
  <g-bootstrap :firtsCol="getFistColInfo()" :secondCol="getSecondColInfo()">
    <template template v-slot:first-col>
      <UserCard :user="user" v-if="user" :key="loaded.user" :picture="logo" />
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
    </template>
    <template template v-slot:second-col>
      <div>
        <CompanyCard
          :company="company"
          v-if="company"
          :key="loaded.company"
          :jobsPosted="jobsPosted"
          :picture="logo"
        />
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
import ProfilePictureController from 'Controllers/profilePic';

export default {
  name: 'CompanyDashboard',
  async mounted() {
    await this.getUserInfo();
    await this.getCompanyInfo();
    await this.getJobsPostedCount();
    await this.getCompanyJobs();
    await this.getLogo();
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
      logo: null,
      loaded: {
        company: false,
        user: false,
      },
      jobs: [],
      jobsPosted: -1,
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
    async getJobsPostedCount() {
      const jobController = new JobController();

      try {
        this.jobsPosted = await jobController.getJobsPostedCount(this.company.id);
        console.log(
          '🚀 ~ file: Dashboard.vue ~ line 105 ~ getJobsPostedCount ~ this.jobsPosted',
          this.jobsPosted,
        );
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
          name: 'User Login',
        });
      }

      if (this.user.side < 20) {
        if (this.user.side >= 10) {
          this.$router.push({
            name: 'User Dashboard',
          });
        }
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
    async getLogo() {
      const profilePictureController = new ProfilePictureController();

      try {
        this.logo = await profilePictureController.getByUserId(this.user.id);
      } catch (e) {
        if (e.response.status === 404) {
          this.logo = null;
          return;
        }
        this.$toast.info(this.$t('toast.info.retrieveProfilePicture'));
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
