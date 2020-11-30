<template>
  <div>
    <div class="d-flex justify-center justify-md-space-center align-center flex-wrap">
      <h1 class="h1-bold ml-6 mr-4 text-center">
        {{ $t('common.jobs') }}
      </h1>
    </div>
    <div class="mx-12 my-10 d-flex justify-center flex-wrap">
      <div v-for="(job, i) in jobs" :key="i">
        <JobCard :job="job" class="mb-4" v-if="$vuetify.breakpoint.mdAndUp" />
        <JobCardMobile :job="job" class="mb-4" v-else />
      </div>
    </div>
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
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
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
        this.$toast.error(this.$t('toast.error.jobList'));
      }
    },
    async getCompanyInfo() {
      const companyController = new CompanyController();
      try {
        for (let i = 0; i < this.jobs.length; i++) {
          this.jobs[i].company = await companyController.getById(this.jobs[i].companyId);
        }
      } catch (e) {
        this.$toast.error(this.$t('toast.error.getCompany'));
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
