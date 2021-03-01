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
        <CompanyCard
          :company="company"
          :job="job"
          v-if="company"
          :jobsPosted="company.jobsPosted"
          :key="loaded.company"
        />
        <v-dialog v-model="buy" v-if="!job.reportPayedFor">
          <template v-slot:activator="{ on, attrs }">
            <g-btn
              v-on="on"
              v-bind="attrs"
              class="mt-4"
              block
              :type="company.wallet > 0 ? 'primary' : 'disabled'"
              :label="$t('company.dashboard.unlockReport')"
              @click="buyReport"
            />
          </template>
          <div>
            <DefaultDialog
              v-if="buy"
              :key="buy"
              :title="$t('company.report.unlock')"
              :btnText="$t('company.report.paymentProceed')"
              :btnType="$t('job.apply.btnType')"
              :secBtnText="$t('common.close')"
              @close="buy = false"
              v-on:primary-button-click="buyReport"
              v-on:secondary-button-click="buy = false"
            />
          </div>
        </v-dialog>
        <PlanCard
          v-if="!job.reportPayedFor"
          :border="'border-color: #1a193c !important'"
          :texts="$t('howItWorks.pricing')"
          :label="$t('company.report.buy')"
          @click="goToPagarme()"
          priceTitle
          class="mt-4"
        />
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
            :reportPayedFor="job.reportPayedFor"
            v-for="(user, index) in top"
            :userInfo="user"
            :resumeInfo="user"
            :company="company"
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

import DefaultDialog from 'Components/Dialogs/Default';

import PlanCard from 'Components/Dashboard/PlanCard';

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
    PlanCard,
    CandidateCard,
    DefaultDialog,
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
      buy: false,
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
    goToPagarme() {
      window.open(this.company.pagarmeLink, '_blank');
    },
    async buyReport() {
      const jobController = new JobController();

      await jobController.buyReport(this.jobId);
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
