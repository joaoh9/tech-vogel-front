<template>
  <div>
    <div
      style="min-height:100vh;"
      class="container-fluid d-flex flex-column align-center justify-center"
    >
      <h1 class="mb-3">Tech Vogel</h1>
      <h4 class="mx-5 mb-5 color-white">
        We connect I.T. professionals from around the globe to companies looking for remote
        employees.
      </h4>
      <div>
        <v-row>
          <v-col cols="12" md="6">
            <g-btn type="primary" label="I want to hire" to="/signup" />
          </v-col>
          <v-col cols="12" md="6">
            <g-btn type="primary" label="I'm looking for a job" to="/signup" />
          </v-col>
        </v-row>
      </div>
    </div>
    <div class="d-flex flex-wrap bg-color-secondary">
      <div v-for="(jobj, index) in [1, 2, 3, 4, 5, 6]" :key="index">
        <JobCardMobile :job="job" class="mx-6 my-6" />
      </div>
    </div>
  </div>
</template>

<script>
import JobController from 'Controllers/job';
import CompanyController from 'Controllers/company';
import JobCardMobile from 'Components/Job/JobCardMobile';

export default {
  name: 'Home',
  components: {
    JobCardMobile,
  },
  mounted() {
    this.getJobs();
  },
  data() {
    return {
      job: {
        title: 'Full Stack Developer',
        contractType: 'FULL_TIME',
        salary: {
          currency: 'BRL',
          timeFrame: 'MONTHS',
          min: 100,
          max: 0,
        },
        companyName: 'Alura',
        companyId: 'Tech-Vogel',
      },
    };
  },
  methods: {
    async getJobs() {
      const jobController = new JobController();
      try {
        this.jobs = await jobController.getAll();
        this.jobs = this.jobs.splice(0, 6);
        await this.getCompanyInfo();
      } catch (e) {
        this.$toast.error('An error occurred when retrieving jobs from the database');
      }
    },
    async getCompanyInfo() {
      const companyController = new CompanyController();
      try {
        for (let i = 0; i < this.jobs.length; i++) {
          this.jobs[i].company = await companyController.getById(this.jobs[i].companyId);
        }
      } catch (e) {
        this.$toast.error('An error has occurred when retrieving company information on a job');
      }
    },
  },
};
</script>

<style scoped>
h1 {
  color: white !important;
  font-weight: bold;
}
h6 {
  color: white;
}
</style>
