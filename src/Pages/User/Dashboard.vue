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
        <UserTokens class="mt-8" :tokens="user.tokens" />
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
        <NoJobsApplied v-if="!appliedJobs.length && loaded.jobs" />
        <div v-for="(job, i) in appliedJobs" :key="i">
          <JobCard :job="job" class="mb-4" v-if="loaded.jobs && $vuetify.breakpoint.mdAndUp" />
          <JobCardMobile :job="job" class="mb-4" v-else-if="loaded.jobs" />
        </div>
      </div>
    </template>
  </g-bootstrap>
</template>

<script>
import NoJobsApplied from 'Components/Dashboard/NoJobsApplied';
import UserCard from 'Components/Dashboard/UserCard';
import UserTokens from 'Components/Dashboard/UserTokens';
import JobCard from 'Components/Job/JobCard';
import JobCardMobile from 'Components/Job/JobCardMobile';

import ProfilePictureController from 'Controllers/profilePic';
import JobController from 'Controllers/job';
import UserController from 'Controllers/user';
import CompanyController from 'Controllers/company';
import ResumeController from 'Controllers/resume';

export default {
  name: 'ProfessionalDashboard',
  components: {
    NoJobsApplied,
    UserCard,
    UserTokens,
    JobCard,
    JobCardMobile,
  },
  mounted() {
    const userController = new UserController();
    const userInfo = userController.decodeUserToken();

    if (userInfo.side >= 20) {
      this.$router.push('/company/dashboard');
    }
    this.loadUserInfo();
    this.loadResume();
    this.getAppliedJobs();
    this.getProfilePicture();
  },
  data() {
    return {
      user: {},
      resume: null,
      appliedJobs: [],
      profilePic: null,
      loaded: {
        user: false,
        jobs: false,
      },
    };
  },
  methods: {
    loadUserInfo() {
      const userController = new UserController();
      this.user = userController.decodeUserToken();

      if (!this.user) {
        this.$toast.error(this.$t('toast.error.retrieveUser'));
        this.$router.push({
          name: 'User Login',
        });
      }
      this.loaded.user = true;

      if (this.user.side >= 20) {
        this.$router.push({
          name: 'Company Dashboard',
        });
      }
    },

    async loadResume() {
      const resumeController = new ResumeController();
      this.resume = await resumeController.getByUserId(this.user.id);
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
      const companyController = new CompanyController();

      try {
        this.appliedJobs = await jobController.getAppliedJobs(this.user.id);
        for (let i = 0; i < this.appliedJobs.length; i++) {
          this.appliedJobs[i].company = await companyController.getById(
            this.appliedJobs[i].companyId,
          );
          this.appliedJobs[i].createdAt = this.appliedJobs[i].appliedAt;
        }
        this.loaded.jobs = true;
      } catch (e) {
        this.$toast.error(this.$t('toast.error.retrieveAppliedJob'));
      }
    },
    async getProfilePicture() {
      const profilePictureController = new ProfilePictureController();

      try {
        this.profilePic = await profilePictureController.getByUserId(this.user.id);
      } catch (e) {
        if (e.response.status === 404) {
          this.profilePic = null;
          return;
        }
        this.$toast.info(this.$t('toast.info.retrieveProfilePicture'));
      }
    },
    goToUserProfile() {
      this.$router.push({
        path: `/user/id/${this.user.id}`,
      });
    },
  },
};
</script>

<style></style>
