<template>
  <g-bootstrap>
    <template template v-slot:first-col>
      <g-btn
        @click="$router.back()"
        class="mt-4 d-flex justify-start"
        type="primary"
        block
        tile
        text
        xl
        :label="$t('common.return')"
      />
      <CompactCompanyCard :company="company" v-if="company" :key="loaded.company" />
    </template>
    <template template v-slot:second-col>
      <div class="color-secondary mx-16">
        <h2 class="mb-4">{{ job.title }}</h2>
        <h5>{{ $t('company.report.title') }}</h5>
        <v-divider class="my-7" color="#1a193c" />
        <div class="d-flex flex-wrap">
          <div
            class="d-flex flex-column flex-wrap mr-16 my-2"
            v-for="(item, index) in getReportInfo()"
            :key="index"
          >
            <p class="overline">{{ item.title }}</p>
            <sub-1 color="secondary" class="sub-text">{{ item.description }}</sub-1>
          </div>
        </div>
        <v-divider class="mt-7 mb-9" color="#1a193c" />
        <h4 class="mb-2">{{ $tc('company.report.yourTopMatches', report_.totalMatches) }}</h4>
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
      return moment(date).format('MMMM Do, YYYY');
    },
    getReportInfo() {
      return [
        {
          title: this.$t('company.report.postedOn'),
          description: this.formatDate(this.job.creationDate || new Date()),
        },
        {
          title: this.$t('company.report.createdOn'),
          description: this.formatDate(this.job.creationDate || new Date()),
        },
        {
          title: this.$t('company.report.totalApplicants'),
          description: this.report_.totalApplicants,
        },
      ];
    },
  },
  watch: {
    job() {
      this.job_ = this.job;
    },
  },
};
</script>

<style scoped>
p {
  display: inline;
}
</style>
