<template>
  <g-bootstrap :firtsCol="getFistColInfo()" :secondCol="getSecondColInfo()">
    <template template v-slot:first-col>
      <UserCard
        :user="user"
        v-if="loaded.user"
        :key="loaded.user"
        @click="goToUserProfile()"
        :picture="profilePic"
      />
      <div class="d-flex flex-column align-center">
        <UserTokens class="mt-8" tokens="15" />
        <capt-1 class="mt-4">{{ $t('user.dashboard.tokenExplanation') }}</capt-1>
        <g-btn
          block
          @click="getResumeRoute()"
          class="mt-8"
          type="primary"
          :label="resume ? $t('user.dashboard.editCV') : $t('user.dashboard.registerCV')"
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
        <UserApplications v-else :jobs="appliedJobs" />
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
import UserApplications from './UserApplications';

import ResumeController from 'Controllers/resume';
import ProfilePictureController from 'Controllers/profilePic';
import JobController from 'Controllers/job';

export default {
  name: 'ProfessionalDashboard',
  components: {
    NoJobsApplied,
    UserCard,
    UserTokens,
    UserApplications,
  },
  async mounted() {
    const company = StorageHelper.loadState('companyId');
    if (company) {
      this.$router.push('/company/dashboard');
    }
    await this.loadUserInfo();
    await this.getAppliedJobs();
    await this.getProfilePicture();
  },
  data() {
    return {
      user: {},
      resume: null,
      appliedJobs: [],
      profilePic: null,
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
      return this.resume
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
    async getAppliedJobs() {
      const jobController = new JobController();

      try {
        this.appliedJobs = await jobController.getAppliedJobs(this.user.username);
      } catch (e) {
        this.$toast.error('Something went wrong when retrieving applied jobs');
      }
    },
    async getProfilePicture() {
      const profilePictureController = new ProfilePictureController();

      try {
        this.profilePic = await profilePictureController.getByUsername(this.user.username);
      } catch (e) {
        if (e.response.status === 404) {
          this.profilePic = null;
        }
        this.$toast.info('Error when retrieving profile picture');
      }
    },
    goToUserProfile() {
      this.$router.push({
        path: `/user/id/${this.user.username}`,
      });
    },
  },
};
</script>

<style></style>
