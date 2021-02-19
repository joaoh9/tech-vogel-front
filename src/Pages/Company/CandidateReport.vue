<template>
  <div class="mx-6 mt-2">
    <v-row justify="center">
      <v-col cols="12" lg="4" xl="3">
        <g-btn
          @click="$router.go(-1)"
          class="mt-4 d-flex justify-start"
          type="primary"
          block
          tile
          text
          xl
          :label="$t('common.return')"
        />
        <CompanyCard :company="company" :job="job" v-if="company" :key="loaded.company" />
      </v-col>
      <v-col cols="12" lg="8" xl="9" style="max-width: 1000px">
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
          <h4 class="mb-2">{{ $tc('company.report.yourTopMatches', 3) }}</h4>
          <bdy-1>{{ $t('company.report.matchesDisclaimer') }} </bdy-1>
          <CandidateCard
            v-for="(user, index) in top"
            :userInfo="user"
            :resumeInfo="user"
            :key="index"
          />
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import CompanyCard from 'Components/Dashboard/CompanyCard';
import CandidateCard from 'Components/Report/CandidateCard';

import UserController from 'Controllers/user';
import JobController from 'Controllers/job';

import moment from 'moment';

export default {
  name: 'CandidateReport',
  async mounted() {
    this.jobId = this.$route.params.jobId;
    await this.getLoggedUser();
    await this.getReport();
  },
  components: {
    CompanyCard,
    CandidateCard,
  },
  data() {
    return {
      report: {},
      company: {},
      job: {},
      loaded: {
        company: false,
        user: false,
      },
      top: [],
    };
  },
  methods: {
    async getLoggedUser() {
      const userController = new UserController();
      this.user = userController.decodeUserToken();

      this.loaded.user = false;
    },
    async getReport() {
      const jobController = new JobController();

      try {
        const { job, company, report, top } = await jobController.getReport(this.jobId);

        this.job = job;
        this.company = company;
        this.report = report;
        this.top = top;
      } catch (e) {
        console.log('🚀 ~ file: CandidateReport.vue ~ line 105 ~ getReport ~ e', e);
      }
    },
    formatDate(date) {
      return moment(date).format('DD/MMM/YYYY');
    },
    getReportInfo() {
      return [
        {
          title: this.$t('company.report.postedOn'),
          description: this.formatDate(this.job.createdAt),
        },
        {
          title: this.$t('company.report.createdOn'),
          description: this.formatDate(this.job.createdAt),
        },
        {
          title: this.$t('company.report.totalApplicants'),
          description: this.job.applications,
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
