<template>
  <div>
    <PrimaryHeader
      v-if="editMode"
      :title="$t('resume.revise')"
      :subtitle="$t('resume.edit')"
      :cols="true"
    >
      <div :class="$vuetify.breakpoint.smAndUp && 'd-flex align-center justify-center mt-8'">
        <g-btn
          :class="!$vuetify.breakpoint.smAndUp ? 'mr-6 mb-4' : 'mr-6'"
          type="outline"
          color="light"
          label="Go back & edit"
        />
        <g-btn type="filled" color="light" textColor="primary" :label="$t('resume.post')" />
      </div>
    </PrimaryHeader>
    <v-container>
      <v-row>
        <v-col cols="12" md="4" v-if="user" :key="loaded">
          <UserCard
            :user="user"
            :picture="user.profilePicture"
            :role="resume.mainRole"
            :location="resume.location"
          />
          <FindMe :links="resume.links" class="mt-6" />
        </v-col>
        <v-col cols="1" md="1"></v-col>
        <v-col cols="11" md="7">
          <h5 class="h5-bold color-primary mb-4">{{ $t('resume.aboutMe') }}</h5>
          <p class="bdy-1 color-dark" style="display: block" v-html="resume.personalBio"></p>

          <v-divider class="my-8" />
          <h5 class="h5-bold color-secondary">{{ $t('resume.workExperience') }}</h5>
          <UserInformation
            v-for="(work, i) in resume.workHistory"
            :key="i"
            :data="work"
            type="work"
          />
          <v-divider class="my-8" />
          <h5 class="h5-bold color-secondary">{{ $t('resume.education') }}</h5>
          <UserInformation
            v-for="(edu, i) in resume.education"
            :key="i + 'edu'"
            :data="edu"
            type="edu"
          />
          <v-divider class="my-8" />

          <!-- <GithubStats /> -->

          <!-- <v-divider class="my-8" /> -->

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
// import GithubStats from 'Components/User/GithubStats';

import UserController from 'Controllers/user';
import ResumeController from 'Controllers/resume';

export default {
  name: 'UserProfile',
  components: {
    PrimaryHeader,
    UserCard,
    FindMe,
    UserInformation,
    Skills,
    // GithubStats,
  },
  props: {
    user_: Object,
    editMode: Boolean,
  },
  async mounted() {
    this.userId = this.$route.params.userId;
    if (this.user_) {
      this.user = this.user_;
    } else {
      await this.getUser();
      await this.getUserResume();
      this.loaded = true;
    }
  },
  data() {
    return {
      userId: '',
      user: {
        profilePicture: '',
      },
      resume: {},
      loaded: false,
    };
  },
  methods: {
    async getUser() {
      const userController = new UserController();
      try {
        this.user = await userController.getById(this.userId);
      } catch (e) {
        this.$toast.error(this.$t('toast.error.retrieveUserData'));
      }
    },
    async getUserResume() {
      const resumeController = new ResumeController();
      try {
        this.resume = await resumeController.getByUserId(this.userId);
      } catch (e) {
        this.$toast.error(this.$t('toast.error.retrieveUserResume'));
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
