<template>
  <v-row>
    <v-col cols="1" md="2"> </v-col>
    <v-col cols="10" md="8">
      <v-row>
        <v-col cols="12" md="4">
          <g-card minWidth="0" maxWidth="100vw">
            <template v-slot:card-content>
              <div class="d-flex justify-space-between">
                <div>
                  <h6>{{ $t('user.dashboard.greeting') }}</h6>
                  <h4>{{ user.name }}</h4>
                </div>
                <v-avatar size="90">
                  <v-img v-if="user.profilePhoto" :src="user.profilePhoto" />
                  <v-icon v-else>
                    fa-user
                  </v-icon>
                </v-avatar>
              </div>
            </template>
          </g-card>
          <div class="mt-6">
            <h6>Your profile isn't complete yet</h6>
            <p class="sub-1">
              Having a complete profile lets us show you better job positions!
            </p>
            <v-progress-linear style="max-width: 300px" value="50" color="primary" />
          </div>
        </v-col>
        <v-col cols="12" md="8">
          <div>
            <div class="mt-5 mb-12">
              <h4>{{ $t('user.dashboard.actions.title') }}</h4>
            </div>
            <div class="my-5">
              <g-btn block type="primary" :label="$t('user.dashboard.registerCV')" />
            </div>
            <v-row>
              <v-col cols="6" v-for="(action, index) in actions" v-bind:key="index">
                <v-card color="bg" elevation="3" class="primary-card" @click="action.method">
                  <v-card-title>
                    <v-row
                      align="center"
                      style="word-break:normal;"
                      justify="center"
                      class="text-center"
                    >
                      <v-col cols="12" md="4">
                        <v-icon size="48">
                          {{ action.icon }}
                        </v-icon>
                      </v-col>
                      <v-col cols="12" md="8">
                        <h5>{{ $t('user.dashboard.actions.' + action.name) }}</h5>
                      </v-col>
                    </v-row>
                  </v-card-title>
                </v-card>
              </v-col>
            </v-row>
            <div class="my-5">
              <g-btn
                outlined
                block
                type="secondary"
                :label="$t('user.dashboard.manageAccountInfo')"
              />
            </div>
          </div>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="1" md="2"></v-col>
  </v-row>
</template>

<script>
import StorageHelper from 'Helpers/storage';

export default {
  name: 'ProfessionalDashboard',
  mounted() {
    this.user = StorageHelper.loadState('user');
    if (!this.user) {
      this.$toast.error('Could not retrieve user info. Please login again');
      this.$router.push({
        path: '/login',
      });
    }
  },
  data() {
    return {
      user: {},
      actions: [
        {
          name: 'applications',
          method: this.goToApplications,
          icon: 'fa-check',
        },
        {
          name: 'findJobs',
          method: this.goToFindJobs,
          icon: 'fa-search',
        },
        {
          name: 'editProfile',
          method: this.goToEditProfile,
          icon: 'fa-edit',
        },
        {
          name: 'manageCredits',
          method: this.goToManageCredits,
          icon: 'fa-file-invoice-dollar',
        },
      ],
    };
  },
  methods: {
    goToApplications: function() {
      this.$router.push('/applications');
    },
    goToFindJobs: function() {
      this.$router.push('/jobs');
    },
    goToEditProfile: function() {
      this.$router.push('/resume/new');
    },
    goToManageCredits: function() {},
  },
};
</script>

<style></style>
