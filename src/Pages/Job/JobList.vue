<template>
  <div>
    <div class="d-flex justify-center justify-md-space-center align-center flex-wrap">
      <h1 class="h1-bold ml-6 mr-4 text-center">
        {{ $t('common.jobs') }}
      </h1>
    </div>
    <g-bootstrap class="mt-12">
      <template v-slot:first-col>
        <div></div>
      </template>
      <template v-slot:second-col>
        <div v-for="(job, i) in jobs" :key="i">
          <JobCard :job="job" class="mb-4" v-if="$vuetify.breakpoint.mdAndUp" />
          <JobCardMobile :job="job" class="mb-4" v-else />
        </div>
      </template>
      <template v-slot:third-col>
        <div></div>
      </template>
    </g-bootstrap>
  </div>
</template>

<script>
import JobController from 'Controllers/job';
import CompanyController from 'Controllers/company';

import JobCard from 'Components/Job/JobCard';
import JobCardMobile from 'Components/Job/JobCardMobile';

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
    JobCardMobile,
  },
  data() {
    return {
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
        this.$toast.error(this.$t('job.list.error'));
      }
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
