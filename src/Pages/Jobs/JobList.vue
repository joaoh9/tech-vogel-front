<template>
  <div class="mx-6">
    <div class="d-flex justify-center justify-md-space-between align-center flex-wrap">
      <h1 class="h1-bold ml-6 mr-4 text-center">
        {{ $t('Common.jobs') }}
      </h1>
      <v-text-field class="maxw-600 minw-300 align-self-center mt-13" outlined placeholder="Search Jobs">
      </v-text-field>
    </div>
    <v-row class="container">
      <v-col cols="12" lg="4" xl="3">
        <job-filters />
      </v-col>
      <v-col cols="12" lg="8" xl="9">
        <v-row v-for="(job, i) in jobs" :key="i">
          <JobCard :job="job" />
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import JobController from 'Controllers/job';
import JobCard from 'Components/Job/JobCard';
import JobFilters from 'Components/Job/JobFilters';

export default {
  name: 'JobDescription',
  mounted() {
    this.getJobs();
  },
  props: {
    job: Object,
    company: Object,
    confirm: Boolean,
  },
  components: {
    JobCard,
    JobFilters,
  },
  data() {
    return {
      switch1: false,
      slider: 1,
      editYourFilters: false,
      skills: [],
      rules: {
        required: t => t.length > 3 || 'Please write something',
      },
      experienceLevel: '',
      jobInfo: '',
    };
  },
  methods: {
    editFilters() {
      this.editYourFilters = !this.editYourFilters;
    },
    async getJobs() {
      const jobController = new JobController();
      try {
        this.jobInfo = await jobController.getAll();
      } catch (e) {
        // TODO: G-alert
        // exemplo em src/Pages/User/ConfirmRegistration.vue
      }
    },
  },
};
</script>

<style scoped>
h2 {
  color: #424242 !important;
  margin-top: 1.4rem;
}
p {
  color: #757575 !important;
  margin-top: 0.8rem;
}
</style>
