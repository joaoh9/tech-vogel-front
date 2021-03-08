<template>
  <v-row class="container">
    <v-col cols="4">
      <UserCard
        :user="user"
        v-if="loaded.user"
        :key="loaded.user"
        @click="user.side > 10 && goToUserProfile()"
        :picture="user.profilePicture"
      />
      <div class="d-flex flex-column align-center">
        <UserTokens class="mt-8" :tokens="user.tokens" />
        <capt-1 class="mt-4">{{ $t('user.dashboard.tokenExplanation') }}</capt-1>
        <g-btn
          block
          @click="getResumeRoute()"
          class="mt-8"
          type="primary"
          :label="user.side === 11 ? $t('user.dashboard.editCV') : $t('user.dashboard.registerCV')"
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
    </v-col>
    <v-col cols="8">
      <div class="d-flex align-center flex-column">
        <h4 class="h4-bold text-center mb-3">{{ $t('user.applications.title') }}</h4>
        <NoJobsApplied v-if="!appliedJobs.length && loaded.jobs" />
        <div v-for="(job, i) in appliedJobs" :key="i">
          <JobCard
            :applyButton="false"
            :job="job"
            class="mb-4"
            v-if="loaded.jobs"
            :minWidth="600"
          />
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import NoJobsApplied from 'Components/Dashboard/NoJobsApplied';
import UserCard from 'Components/Dashboard/UserCard';
import UserTokens from 'Components/Dashboard/UserTokens';
import JobCard from 'Components/Job/JobCard';

import JobController from 'Controllers/job';
import UserController from 'Controllers/user';

export default {
  name: 'ProfessionalDashboard',
  components: {
    NoJobsApplied,
    UserCard,
    UserTokens,
    JobCard,
  },
  mounted() {
    this.loadUserInfo();
    this.getAppliedJobs();
  },
  data() {
    return {
      user: {},
      appliedJobs: [],
      loaded: {
        user: false,
        jobs: false,
      },
    };
  },
  methods: {
    async loadUserInfo() {
      const userController = new UserController();
      this.user = await userController.getDashboardInfo();

      this.loaded.user = true;
    },
    goToUserProfile() {
      this.$router.push({
        name: 'User Profile',
        params: {
          reportPayedFor: true,
          pagarmeLink: '',
        },
      });
    },
    goToApplications() {
      this.$router.push('/applications');
    },
    goToFindJobs() {
      this.$router.push('/jobs');
    },
    goToEditProfile() {
      this.$router.push('/resume/new');
    },
    getResumeRoute() {
      return this.user.side === 11
        ? this.$router.push({ name: 'Resume Form', params: { editMode: true } })
        : this.$router.push('/resume/new');
    },
    async getAppliedJobs() {
      const jobController = new JobController();

      try {
        this.appliedJobs = await jobController.getCurrentUserAppliedJobsCardInfo();
        this.loaded.jobs = true;
      } catch (e) {
        this.$toast.error(this.$t('toast.error.retrieveAppliedJobs'));
      }
    },
  },
};
</script>

<style></style>
