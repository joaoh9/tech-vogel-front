<template>
  <div>
    <v-row class="container" justify="center" align="center">
      <h1 class="h1-bold">
        {{ $t('common.jobs') }}
      </h1>
      <v-col cols="0" md="2" />
      <v-col cols="12" md="8" justify="center" align="center">
        <div v-if="loadingJobs">
          <v-skeleton-loader
            v-for="i in [1, 2, 3, 4, 5]"
            :key="i"
            class="mb-4"
            type="article, actions"
          />
        </div>
        <div v-else v-for="(job, i) of jobs" :key="i">
          <JobCard :job="job" class="mb-4" />
        </div>
        <v-pagination
          circle
          prev-icon="mdi-menu-left"
          next-icon="mdi-menu-right"
          v-model="page"
          :length="3"
        />
      </v-col>
      <v-col cols="0" md="0" />
    </v-row>
  </div>
</template>

<script>
import JobController from 'Controllers/job';

import JobCard from 'Components/Job/JobCard';

export default {
  name: 'JobDescription',
  mounted() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
    this.getJobs();
  },
  props: {
    job: Object,
    company: Object,
    confirm: Boolean,
  },
  components: {
    JobCard,
  },
  data() {
    return {
      skills: [],
      jobs: [],
      loadingJobs: false,
      page: 1,
    };
  },
  methods: {
    async getJobs() {
      const jobController = new JobController();
      this.loadingJobs = true;
      console.log('🚀 ~ file: JobList.vue ~ line 57 ~ getJobs ~ loadingJobs');

      try {
        this.jobs = await jobController.getCardJobs();
        console.log('🚀 ~ file: JobList.vue ~ line 57 ~ getJobs ~ loadingJob2');
      } catch (e) {
        this.$toast.error(this.$t('toast.error.jobList'));
      } finally {
        this.loadingJobs = false;
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
