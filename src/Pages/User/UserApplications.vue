<template>
  <div class="container-fluid mx-12">
    <v-row>
      <v-col md="4" cols="12">
        <v-card>
          <v-card-text>
            <div class="d-flex flex-column align-stretch text-left flex-grow-0">
              <v-btn text block color="primary" class="" to="dashboard">
                <v-icon left>
                  fa-angle-left
                </v-icon>
                {{ $t('User.applications.returnToDashboard') }}</v-btn
              >
              <div v-for="key in Object.keys($t('User.applications.actions'))" v-bind:key="key">
                <v-btn v-if="!$vuetify.breakpoint.mobile" text block left color="primary">
                  {{ $t('User.applications.actions.' + key) }}</v-btn
                >
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col md="8" cols="12">
        <div>
          <div class="mt-5 mb-12">
            <h4>{{ $t('User.applications.title') }}</h4>
          </div>
          <div v-for="(application, index) in applications" v-bind:key="index">
            <v-card class="primary-card my-5">
              <v-card-text>
                <v-row>
                  <v-col cols="2" v-if="!$vuetify.breakpoint.mobile">
                    <v-avatar size="90">
                      <v-img
                        v-if="application.job.company.profilePhoto"
                        :src="application.job.company.profilePhoto"
                      />
                      <v-icon v-else>
                        fa-users
                      </v-icon>
                    </v-avatar>
                  </v-col>
                  <v-col cols="12" md="6" class="d-flex flex-column justify-space-between">
                    <h5>{{ application.job.title }}</h5>
                    <div class="d-flex space-between flex-fill align-center">
                      <div class="flex-fill">
                        <v-icon class="text-icon" color="secondary">
                          fa-building
                        </v-icon>
                        <div class="" style="font-weight: bold">
                          {{ application.job.company.name }}
                        </div>
                      </div>
                      <div class="flex-fill">
                        <v-icon class="text-icon" color="secondary">
                          fa-briefcase
                        </v-icon>
                        <div style="font-weight: bold">{{ application.job.type }}</div>
                      </div>
                    </div>
                  </v-col>
                  <v-col cols="12" md="4" class="d-flex flex-column justify-center align-stretch text-center">
                    <div>{{$tc('User.applications.job.period', 1)}}</div>
                    <div class="text-center">
                      <v-icon size="12" color="error" class="text-icon">
                        fa-circle
                      </v-icon>
                      <div style="font-weight: bold">{{ application.job.status }}</div>
                    </div>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'User Applications',
  data() {
    return {
      applications: [
        {
          job: {
            status: 'Waiting',
            title: 'Full Stack DEV',
            type: 'Job Type',
            company: {
              name: 'Company Name',
            },
          },
        },
        {
          job: {
            status: 'Waiting',
            title: 'Full Stack DEV',
            type: 'Job Type',
            company: {
              name: 'Company Name',
            },
          },
        },
      ],
    };
  },
  methods: {
    goToApplications: function() {},
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

<style>
.text-icon {
  padding-right: 0.5em;
  float: left;
}
</style>
