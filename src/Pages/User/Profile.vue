<template>
  <div>
    <PrimaryHeader
      v-if="editMode"
      title="Revise your CV!"
      subtitle="You will be able to edit it at any time"
      :cols="true"
    >
      <div :class="!$vuetify.breakpoint.mobile && 'd-flex align-center justify-center mt-8'">
        <g-btn
          :class="$vuetify.breakpoint.mobile ? 'mr-6 mb-4' : 'mr-6'"
          type="outline"
          color="light"
          label="Go back & edit"
        />
        <g-btn type="filled" color="light" textColor="primary" label="Post CV" />
      </div>
    </PrimaryHeader>
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <UserCard
            v-if="user"
            :user="user"
            :key="loading.user"
            :picture="profilePic"
            :role="resume.mainRole"
            :location="resume.location"
          />
          <FindMe class="mt-6" />
        </v-col>
        <v-col cols="1" md="1"></v-col>
        <v-col cols="11" md="7">
          <h5 class="h5-bold color-primary mb-4">About me</h5>
          <div class="bdy-1 color-dark" v-html="resume.personalBio"></div>

          <v-divider class="my-8" />
          <!-- TODO: internacionlização de textos work experience -->
          <h5 class="h5-bold color-secondary">Work experience</h5>
          <UserInformation
            v-for="(work, i) in resume.workHistory"
            :key="i"
            :data="work"
            type="work"
          />
          <v-divider class="my-8" />

          <h5 class="h5-bold color-dark mb-4">Github Stats</h5>
          <h6 class="mt-3 font-weight-regular">Public Repositories</h6>
          <sub-1>26</sub-1>

          <h6 class="mt-3 font-weight-regular">Contributions in the last year</h6>
          <sub-1>2,003</sub-1>

          <h6 class="mt-3 font-weight-regular">Forked Repositories</h6>
          <sub-1>3</sub-1>

          <h6 class="mt-3 font-weight-regular">Stars count</h6>
          <sub-1>15</sub-1>

          <v-divider class="my-8" />

          <div v-if="resume && resume.skills">
            <Skills
              v-for="(skillType, i) in Object.keys(resume.skills)"
              :key="i + 'skill'"
              :skillTitle="$t(`enums.skills.${skillType}`)"
              :skills="resume.skills[skillType]"
              :skillType="skillType"
              :githubLanguages="resume.gitHubProgrammingLanguages"
              class="mb-6"
            />
          </div>

          <v-divider class="my-10 orange-color" />
          <!-- TODO: internacionlização de textos education -->

          <h5 class="h5-bold color-secondary">Education</h5>
          <UserInformation
            v-for="(edu, i) in resume.education"
            :key="i + 'edu'"
            :data="edu"
            type="edu"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import PrimaryHeader from 'Components/Interface/PrimaryHeader';
import UserCard from 'Components/User/DashboardCard';
import FindMe from 'Components/User/FindMe';
import UserInformation from 'Components/User/UserInformation';
import Skills from 'Components/User/Skills';

import UserController from 'Controllers/user';
import ProfilePictureController from 'Controllers/profilePic';
import ResumeController from 'Controllers/resume';

export default {
  name: 'UserProfile',
  components: {
    PrimaryHeader,
    UserCard,
    FindMe,
    UserInformation,
    Skills,
  },
  props: {
    user_: Object,
    editMode: Boolean,
  },
  mounted() {
    this.userId = this.$route.params.userId;
    if (this.user_) {
      this.user = this.user_;
    } else {
      this.getUser();
      this.getUserResume();
    }
    this.getProfilePicture();
  },
  data() {
    return {
      userId: '',
      user: {},
      resume: {},
      loading: { user: false },
      profilePic: null,
    };
  },
  methods: {
    async getUser() {
      const userController = new UserController();
      this.loading.user = true;
      try {
        this.user = await userController.getByUsername(this.userId);
      } catch (e) {
        this.$toast.error(`Something went wrong when retrieving user ${this.userId} data`);
      }
    },
    async getUserResume() {
      const resumeController = new ResumeController();
      try {
        this.resume = await resumeController.getByUsername(this.userId);
      } catch (e) {
        this.$toast.error(`Something went wrong when retrieving user resume ${this.userId} data`);
      }
    },
    async getProfilePicture() {
      const profilePictureController = new ProfilePictureController();

      try {
        this.profilePic = await profilePictureController.getByUsername(this.userId);
      } catch (e) {
        if (e.response.status === 404) {
          this.profilePic = null;
        }
        this.$toast.info('Error when retrieving profile picture');
      }
    },
  },
};
</script>

<style scoped>
.v-divider {
  border: 0.9px solid #ff9200 !important;
}
</style>
