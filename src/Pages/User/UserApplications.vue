<template>
  <div class="container-fluid mx-12">
    <v-card color="bg" class="primary-card my-5" v-for="(job, index) in jobs" v-bind:key="index">
      <v-card-text>
        <v-row>
          <v-col cols="2" v-if="$vuetify.breakpoint.smAndUp">
            <v-avatar color="cinza-lighten-2" size="90">
              <v-img
                v-if="job.company.profilePhoto"
                :src="job.company.profilePhoto"
                alt="Profile photo"
              />
            </v-avatar>
          </v-col>
          <v-col cols="12" md="6" class="d-flex flex-column justify-space-between">
            <h5>{{ job.title }}</h5>
            <div class="d-flex space-between flex-fill align-center">
              <IconText icon="fa-building" :text="job.company.name" />
              <IconText
                icon="fa-briefcase"
                :text="$t('enums.contractType').find(ct => ct.value === job.contractType).text"
              />
            </div>
          </v-col>
          <v-col
            cols="12"
            md="4"
            class="d-flex flex-column justify-center align-stretch text-center"
          >
            <div>{{ $tc('user.applications.job.period', 1) }}</div>
            <div class="d-flex justify-center">
              <IconText size="10" icon="fa-circle" color="primary" text="Applied" />
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import IconText from 'Components/Interface/IconText';

export default {
  name: 'UserApplications',
  props: {
    jobs: Array,
  },
  data() {
    return {
      jobApplications: {},
    };
  },
  components: {
    IconText,
  },
  methods: {
    goToFindJobs() {
      this.$router.push('/jobs/new');
    },
    goToEditProfile() {
      this.$router.push('/resume/new');
    },
    goToManageCredits() {},
  },
};
</script>

<style>
.text-icon {
  padding-right: 0.5em;
  float: left;
}
</style>
