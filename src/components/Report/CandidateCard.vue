<template>
  <v-card class="border-primary bs-primary pa-4 px-12 mt-6" color="bg">
    <div class="d-flex justify-start flex-wrap align-center">
      <v-avatar class="align-self-center mr-15" size="90" color="cinza-lighten-3">
        <v-img v-if="profilePic" :src="profilePic.data64" />
      </v-avatar>
      <div class="d-flex flex-column flex-fill">
        <h4 class="mt-2">{{ user.name }}</h4>
        <h6 style="font-weight:normal; color:gray" class="mb-2">{{ resume.mainRole }}</h6>
        <div class="d-flex flex-wrap">
          <v-btn :disabled="resume.github" class="" text>
            <v-icon left>
              fab fa-github
            </v-icon>
            Github
          </v-btn>
          <v-btn :disabled="!resume.linkedin" class="" text>
            <v-icon left>
              fab fa-linkedin
            </v-icon>
            Linkedin
          </v-btn>
        </div>
      </div>
      <v-dialog v-model="dialog" width="800px">
        <template v-slot:activator="{ on }">
          <v-btn
            outlined
            color="secondary"
            class="my-10 align-self-center flex-fill "
            v-on="on"
          >
           {{ $t('company.report.candidates.viewCandidate')}}
            </v-btn>
        </template>
        <CandidateProfile :user="user" :resume="resume" :profilePic="profilePic"></CandidateProfile>
      </v-dialog>
    </div>
  </v-card>
</template>

<script>
import CandidateProfile from 'Components/Report/CandidateProfile';

import UserController from 'Controllers/user';
import ResumeController from 'Controllers/resume';
import ProfilePictureController from 'Controllers/profilePic';

import moment from 'moment';

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
      dialog: false,
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
  },
};
</script>

<style>
p {
  display: inline;
}
</style>
