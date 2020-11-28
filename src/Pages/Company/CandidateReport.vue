<template>
  <g-bootstrap>
    <template template v-slot:first-col>
      <g-btn
        @click="$router.back()"
        class="mt-4"
        type="primary"
        block
        tile
        text
        xl
        :label="$t('common.back')"
      />
      <CompactCompanyCard :company="company" v-if="company" :key="loaded.company" />
    </template>
    <template template v-slot:second-col>
      <div>
        <h2 class="mb-5">Candidate Report</h2>
        <h4>{{ job.title }}</h4>
        <v-divider class="my-10"></v-divider>
        <div class="d-flex flex-wrap justify-space-between">
          <div class="d-flex flex-column flex-wrap mx-2 my-3">
            <div style="font-weight:bold">{{ $t('company.report.postedOn') }}</div>
            <div>{{ formatDate(job.creationDate || new Date()) }}</div>
          </div>
          <div class="d-flex flex-column flex-wrap mx-2 my-3">
            <div style="font-weight:bold">{{ $t('company.report.createdOn') }}</div>
            <div>{{ formatDate(job.creationDate || new Date()) }}</div>
          </div>
          <div class="d-flex flex-column flex-wrap mx-2 my-3">
            <div style="font-weight:bold">{{ $t('company.report.totalApplicants') }}</div>
            <div>{{ report_.totalApplicants }}</div>
          </div>
        </div>
        <v-divider class="my-10"></v-divider>
        <h4 class="my-5">{{ $tc('company.report.yourTopMatches', report_.totalMatches) }}</h4>
        <bdy-1>{{ $t('company.report.matchesDisclaimer') }} </bdy-1>
        <CandidateCard
          v-for="(candidate, index) in report_.candidates"
          v-bind:key="index"
          :candidate="candidate"
        />
      </div>
    </template>
  </g-bootstrap>
</template>

<script>
import CompactCompanyCard from 'Components/Dashboard/CompactCompanyCard';
import CandidateCard from 'Components/Report/CandidateCard';

import CompanyController from 'Controllers/company';
import UserController from 'Controllers/user';
import JobController from 'Controllers/job';

import moment from 'moment';

export default {
  name: 'CandidateReport',
  async mounted() {
    await this.getUserInfo();
    this.jobId = this.$route.params.jobId;
    await this.getJob();
    this.companyId = this.$route.params.companyId;
    await this.getCompanyData();
    await this.checkPerm();
    await this.getReport();
  },
  components: {
    CompactCompanyCard,
    CandidateCard,
  },
  data() {
    return {
      user: {},
      company: {},
      job: {},
      report: [],
      report_: {
        totalApplicants: 13,
        totalMatches: 3,
        candidates: [
          {
            userId: '5fc075ddc153290396c87a38',
          },
        ],
      },
      userId: null,
      jobId: null,
      loaded: {
        company: false,
        user: false,
      },
      jobs: [],
    };
  },
  methods: {
    async getCompanyData() {
      const companyController = new CompanyController();

      try {
        this.company = await companyController.getById(this.companyId);
      } catch (e) {
        this.$toast.error(this.$t('toast.error.companyData', { companyId: this.companyId }));
      }
    },
    async getJob() {
      const jobController = new JobController();
      try {
        this.job = await jobController.getById(this.jobId);
      } catch (e) {
        this.$toast.error(this.$t('toast.error.retrieveJob'));
      }
    },
    async getUserInfo() {
      const userController = new UserController();
      this.user = userController.decodeUserToken();

      this.loaded.user = false;
      if (!this.user) {
        this.$toast(this.$t('toast.error.retrieveUser'));
        this.$router.push({
          path: '/login',
        });
      }
    },
    async getReport() {
      const jobController = new JobController();
      try {
        this.report = await jobController.getReport(this.jobId);
      } catch (e) {
        // this.$toast.error(this.$t('toast.error.retrieveJob'));
      }
    },
    async checkPerm() {
      if (this.company.userId !== this.user.id) {
        this.$toast.error(this.$t('toast.error.notAllowed'));
        this.$router.push({
          path: '/',
        });
      }
    },
    formatDate(date) {
      return moment(date).format('ll');
    },
  },
  watch: {
    job() {
      this.job_ = this.job;
    },
  },
};
</script>

<style>
p {
  display: inline;
}
</style>
