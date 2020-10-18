<template>
  <div>
    <div class="d-flex justify-center justify-md-space-center align-center flex-wrap">
      <h1 class="h1-bold ml-6 mr-4 text-center">
        {{ $t('common.jobs') }}
      </h1>
    </div>
    <g-bootstrap>
      <template v-slot:first-col>
        <job-filters />
      </template>
      <template v-slot:second-col>
        <v-row v-for="(job, i) in jobs" :key="i">
          <JobCard :job="job" :company="job.company" class="mb-4" />
        </v-row>
        <g-alert
          :errorMessage="$t('Job.list.error')"
          v-on:error="s => (requestError = s)"
          :errorVar="requestError"
        />
      </template>
    </g-bootstrap>
  </div>
</template>

<script>
// import JobController from 'Controllers/job';
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
      this.finishedRequests = true;
      this.jobs = [
        {
          title: 'job',
          contractType: 'FULL_TIME',
          company: { name: 'A' },
        },
      ];
      // const jobController = new JobController();
      // try {
      //   this.jobs = await jobController.getAll();
      //   await this.getCompanyInfo();
      //   this.finishedRequests = true;
      // } catch (e) {
      //   this.$toast.error(this.$t('Job.list.error'));
      // }
    },
    async getCompanyInfo() {
      const companyController = new CompanyController();
      try {
        for (let i = 0; i < this.jobs.length; i++) {
          this.jobs[i].company = await companyController.getById(this.jobs[i].companyId);
        }
      } catch (e) {
        this.$toast.error('Something when wrong when getting company info for a job');
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
