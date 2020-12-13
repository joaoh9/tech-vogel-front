<template>
  <div>
    <PrimaryHeader
      v-if="editMode"
      :title="$t('user.resume.revise')"
      :description="$t('user.resume.edit')"
      :cols="true"
    >
      <div :class="$vuetify.breakpoint.smAndUp && 'd-flex align-center justify-center mt-8'">
        <g-btn
          :class="!$vuetify.breakpoint.smAndUp ? 'mr-6 mb-4' : 'mr-6'"
          type="outline"
          color="light"
          :label="$t('common.backEdit')"
        />
        <g-btn type="filled" color="light" textColor="primary" label="Post CV" />
      </div>
    </PrimaryHeader>
    <v-container>
      <v-row class="mt-12">
        <v-col cols="12" md="6">
          <UserCard />
          <div class="mt-4">
            <FindMe />
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <h5 class="h5-bold color-primary mb-4">{{ $t('user.aboutMe') }}</h5>
          <bdy-1>{{ $t('user.aboutMe') }}</bdy-1>
          <v-divider class="my-10 orange-color"></v-divider>
          <UserInformation :title="$t('user.workExperience')" job />
          <v-divider class="my-10 orange-color"></v-divider>

          <h5 class="h5-bold color-secondary">{{ $t('user.skills') }}</h5>
          <Skills :skillTitle="$t('user.techSkills')" skill="JavaScript" skillLevel="5+" />
          <Skills :skillTitle="$t('user.softSkills')" />
          <Skills :skillTitle="$t('user.langSkills')" />

          <v-divider class="my-10 orange-color"></v-divider>
          <UserInformation :title="$t('user.education')" company />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import PrimaryHeader from 'Components/Interface/PrimaryHeader';
import UserCard from 'Components/Dashboard/UserCard';
import FindMe from 'Components/User/FindMe';
import UserInformation from 'Components/User/UserInformation';
import Skills from 'Components/User/Skills';

import ResumeController from 'Controllers/resume';

import StorageHelper from 'Helpers/storage';

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
  },
  data() {
    return {
      userId: '',
      user: {},
      resume: {},
    };
  },
  methods: {
    async getUser() {
      try {
        this.user = StorageHelper.loadState('user');
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
  },
};

</script>

<style></style>
