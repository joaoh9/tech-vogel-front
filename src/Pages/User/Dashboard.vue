<template>
  <g-bootstrap :firtsCol="getFistColInfo()" :secondCol="getSecondColInfo()">
    <template template v-slot:first-col>
      <UserCard :user="user" v-if="loaded.user" :key="loaded.user" />
      <div class="d-flex flex-column align-center">
        <UserTokens class="mt-8" tokens="15" />
        <capt-1 class="mt-4">{{ $t('user.dashboard.tokenExplanation') }}</capt-1>
        <g-btn
          block
          @click="getResumeRoute()"
          class="mt-8"
          type="primary"
          :label="$t('user.dashboard.registerCV')"
        />
        <g-btn
          block
          to="/user/settings"
          class="mt-4"
          type="disabled"
          color="secondary"
          :label="$t('user.dashboard.manageAccount')"
        />
      </div>
    </template>
    <template template v-slot:second-col>
      <div class="d-flex align-center flex-column">
        <h4 class="h4-bold text-center">{{ $t('user.applications.title') }}</h4>
        <NoJobsApplied v-if="!appliedJobs.length" />
        <!-- <UserApplications :jobs="appliedJobs" /> -->
      </div>
    </template>
  </g-bootstrap>
</template>

<script>
import StorageHelper from 'Helpers/storage';
import InactivityHelper from 'Helpers/inactivity';

import NoJobsApplied from 'Components/Dashboard/NoJobsApplied';
import UserCard from 'Components/Dashboard/UserCard';
import UserTokens from 'Components/Dashboard/UserTokens';
// // import UserApplications from 'Components/Dashboard/UserApplications';

import ResumeController from 'Controllers/resume';
import JobController from 'Controllers/job';

export default {
  name: 'ProfessionalDashboard',
  components: {
    NoJobsApplied,
    UserCard,
    UserTokens,
    // UserApplications,
  },
  mounted() {
    const company = StorageHelper.loadState('companyId');
    if (company) {
      this.$router.push('/company/dashboard');
    }
    this.loadUserInfo();
    this.getResumeInfo();
    this.getAppliedJobs();
  },
  data() {
    return {
      user: {},
      hasSavedResume: false,
      appliedJobs: [],
      loaded: {
        user: false,
      },
    };
  },
  methods: {
    loadUserInfo() {
      this.user = StorageHelper.loadState('user');
      if (!this.user) {
        this.$toast.error('Could not retrieve user info. Please login again');
        this.$router.push({
          path: '/login',
        });
      }
      this.loaded.user = true;
    },
    goToApplications: function() {
      this.$router.push('/applications');
    },
    goToFindJobs: function() {
      this.$router.push('/jobs');
    },
    goToEditProfile: function() {
      this.$router.push('/resume/new');
    },
    getResumeRoute() {
      return this.hasSavedResume
        ? this.$router.push({ name: 'Resume Form', params: { editMode: true } })
        : this.$router.push('/resume/new');
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
    async getResumeInfo() {
      const inactivityHelper = new InactivityHelper(this);
      const resumeController = new ResumeController();
      try {
        this.hasSavedResume = await resumeController.hasSavedResume(this.user.username);
      } catch (e) {
        if (e.response.status === 404) {
          this.hasSavedResume = false;
          return;
        }
        return inactivityHelper.userLogin(e, '', false);
      }
    },
    async getAppliedJobs() {
      const jobController = new JobController();
      // const inactivityHelper = new InactivityHelper(this);

      try {
        this.appliedJobs = await jobController.getAll();
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style></style>
