<template>
  <v-row>
    <v-col cols="1" md="2"> </v-col>
    <v-col cols="10" md="8">
      <div class="d-flex justify-center justify-md-space-center align-center flex-wrap">
        <h1 class="h1-bold ml-6 mr-4 text-center">
          {{ $t('common.jobs') }}
        </h1>
        <v-text-field
          class="maxw-600 minw-300 align-self-center mt-13"
          outlined
          label="Search Jobs"
          v-if="false"
        />
        <!-- TODO: query geral para liberar esse campo de pesquisa -->
      </div>
      <v-row justify="center" class="container">
        <v-col cols="12" lg="4" xl="3" class="text-center">
          <job-filters />
        </v-col>
        <v-col cols="12" lg="8" xl="9" v-if="finishedRequests">
          <v-row v-for="(job, i) in jobs" :key="i" >
            <JobCard :job="job" :company="job.company" class="mb-4" />
          </v-row>
          <g-alert
            :errorMessage="$t('Job.list.error')"
            v-on:error="s => (requestError = s)"
            :errorVar="requestError"
          />
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="1" md="2"> </v-col>
  </v-row>
</template>

<script>
import JobController from 'Controllers/job';
import CompanyController from 'Controllers/company';
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
      requestError: false,
      finishedRequests: false,
      skills: [],
      jobs: [],
    };
  },
  methods: {
    async getJobs() {
      const jobController = new JobController();
      try {
        this.jobs = await jobController.getAll();
        await this.getCompanyInfo();
        this.finishedRequests = true;
      } catch (e) {
        this.requestError = true;
      }
    },
    async getCompanyInfo() {
      const companyController = new CompanyController();
      try {
        for (let i = 0; i < this.jobs.length; i++) {
          this.jobs[i].company = await companyController.getById(this.jobs[i].companyId);
          console.log(this.jobs[i].company);
        }
      } catch (e) {
        console.log(e);
        this.requestError = true;
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
