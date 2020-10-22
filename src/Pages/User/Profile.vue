<template>
  <div>
    <PrimaryHeader
      title="Revise your CV!"
      description="You will be able to edit it at any time"
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
      <v-row class="mt-12">
        <v-col cols="12" md="6">
          <UserCard />
          <div class="mt-4">
            <FindMe />
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <h5 class="h5-bold color-primary mb-4">About me</h5>
          <bdy-1>{{ $t('user.aboutMe') }}</bdy-1>

          <v-divider class="my-10 orange-color" />
          <!-- <UserInformation title="Work experience" job /> -->

          <v-divider class="my-10 orange-color" />
          <!-- <Skills title="Skills" /> -->

          <v-divider class="my-10 orange-color" />
          <!-- <UserInformation title="Education" company /> -->
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import PrimaryHeader from 'Components/Interface/PrimaryHeader';
import UserCard from 'Components/Dashboard/UserCard';
import FindMe from 'Components/User/FindMe';
// // import UserInformation from 'Components/User/UserInformation';
// // import Skills from 'Components/User/Skills';
import UserResume from 'Controllers/resume';

export default {
  name: 'UserProfile',
  components: {
    PrimaryHeader,
    UserCard,
    FindMe,
    // UserInformation,
    // Skills,
  },
  props: {
    user_: Object,
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
      const userController = new userController();
      try {
        this.user = await userController.getById(this.userId);
      } catch (e) {
        this.$toast.error(`Something went wrong when retrieving user ${this.userId} data`);
      }
    },
    async getUserResume() {
      const resumeController = new UserResume();
      try {
        this.resume = await resumeController.getResumeByUsername(this.userId);
      } catch (e) {
        this.$toast.error(`Something went wrong when retrieving user resume ${this.userId} data`);
      }
    },
  },
};
</script>

<style></style>
