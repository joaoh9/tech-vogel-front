<template>
  <v-card class="border-primary bs-primary pa-4 px-12 mt-10" color="bg">
    <div class="d-flex justify-start flex-wrap align-center">
      <v-avatar class="align-self-center mr-15" size="90" color="cinza-lighten-3">
        <v-img v-if="profilePic" :src="profilePic.data64" />
      </v-avatar>
      <div class="d-flex flex-column flex-fill">
        <!-- TODO: Fix candidate report data -->
        <h5 class="h5-bold color-secondary text-capitalize">Daniel Toledo</h5>
        <sub-1 class="mb-2 text-capitalize">senior fullstack developer</sub-1>
        <div class="d-flex flex-wrap align-start justify-start">
          <v-btn
            class="pa-0 text-capitalize"
            color="secondary"
            text
            v-for="(item, index) in getIcons()"
            :key="index"
          >
            <v-icon size="16" class="mr-2">
              {{ item.icon }}
            </v-icon>
            <div class="mr-4">
              {{ item.text }}
            </div>
          </v-btn>
        </div>
      </div>
      <g-btn
        to="/jobs/new"
        color="secondary"
        text
        class="text-none"
        :label="$t('company.report.candidates.viewCandidate')"
      >
        <!-- :icon="'fas fa-angle-down'" -->
      </g-btn>
      <CandidateProfile :user="user" :resume="resume" :profilePic="profilePic" />
    </div>
  </v-card>
</template>

<script>
import moment from 'moment';
import UserController from 'Controllers/user';
import ResumeController from 'Controllers/resume';
import ProfilePictureController from 'Controllers/profilePic';
import CandidateProfile from 'Components/Report/CandidateProfile';

export default {
  name: 'CandidateReport',
  props: {
    candidate: [Object],
  },
  async mounted() {
    this.userId = this.candidate.userId;
    await this.getUser();
    await this.getUserResume();
    await this.getProfilePicture();
  },
  components: {
    CandidateProfile,
  },
  data() {
    return {
      userId: '',
      user: {},
      resume: {},
      profilePic: {},
    };
  },
  methods: {
    async getUser() {
      const userController = new UserController();
      try {
        this.user = await userController.getByUserId(this.userId);
      } catch (e) {
        this.$toast.error(this.$t('toast.error.retrieveUserData', { userId: this.userId }));
      }
    },
    async getUserResume() {
      const resumeController = new ResumeController();
      try {
        this.resume = await resumeController.getByUserId(this.userId);
      } catch (e) {
        this.$toast.error(this.$t('toast.error.retrieveUserResume', { userId: this.userId }));
      }
    },
    async getProfilePicture() {
      const profilePictureController = new ProfilePictureController();

      try {
        this.profilePic = await profilePictureController.getByUserId(this.userId);
      } catch (e) {
        if (e.response.status === 404) {
          this.profilePic = null;
          return;
        }
        this.$toast.info(this.$t('toast.info.retrieveProfilePicture'));
      }
    },
    formatDate(date) {
      return moment(date).format('ll');
    },
    getIcons() {
      return [
        {
          text: this.$t('common.links.github.title'),
          icon: 'fas fa-external-link-alt',
        },
        {
          text: this.$t('common.links.linkedin.title'),
          icon: 'fas fa-external-link-alt',
        },
      ];
    },
  },
};
</script>

<style scoped>
p {
  display: inline;
}
</style>
