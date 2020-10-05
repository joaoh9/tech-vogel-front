<template>
  <div class="container-fluid mx-12">
    <v-row>
      <v-col md="4" cols="12">
        <g-card minWidth="0" maxWidth="100vw">
          <template v-slot:card-content>
            <div class="d-flex justify-space-between">
              <div>
                <h6>{{ $t('User.dashboard.greeting') }}</h6>
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
          <p class="subtitle-1">Having a complete profile lets us show you better job positions!</p>
          <v-progress-linear style="max-width: 300px" value="50" color="primary" />
        </div>
      </v-col>
      <v-col md="8" cols="12">
        <div>
          <div class="mt-5 mb-12">
            <h4>{{ $t('User.dashboard.actions.title') }}</h4>
          </div>
          <div class="my-5">
            <g-btn block type="primary" :label="$t('User.dashboard.registerCV')" />
          </div>
          <v-row>
            <v-col cols="6" v-for="(action, index) in actions" v-bind:key="index">
              <v-card class="primary-card" @click="action.method">
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
                      <h5>{{ $t('User.dashboard.actions.' + action.name) }}</h5>
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
              :label="$t('User.dashboard.manageAccountInfo')"
            />
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'Professional Dashboard',
  data() {
    return {
      user: {
        name: 'Paulo',
        profilePhoto:
          'https://images.unsplash.com/photo-1601676509804-5dc60b6e86fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=332&q=80',
      },
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
      this.$router.push('/job/new');
    },
    goToEditProfile: function() {
      this.$router.push('/resume/new');
    },
    goToManageCredits: function() {},
  },
};
</script>

<style></style>
