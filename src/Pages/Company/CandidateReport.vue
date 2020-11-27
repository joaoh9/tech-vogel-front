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
            <div>{{ 13 }}</div>
          </div>
        </div>
        <v-divider class="my-10"></v-divider>
        <h4 class="my-5">{{ $tc('company.report.yourTopMatches', totalMatches) }}</h4>
        <bdy-1>{{ $t('company.report.matchesDisclaimer') }} </bdy-1>
        <v-card
          class="border-primary bs-primary pa-4 px-12 mt-6"
          color="bg"
          v-for="(candidate, i) in report_"
          v-bind:key="i"
        >
          <div class="d-flex justify-start flex-wrap align-center">
            <v-avatar class="align-self-center mr-15" size="90" color="cinza-lighten-3">
              <v-img v-if="candidate.profilePhoto" :src="candidate.profilePhoto" />
            </v-avatar>
            <div class="d-flex flex-column flex-fill">
              <h4 class="mt-2">{{ candidate.user.name }}</h4>
              <h6 style="font-weight:normal; color:gray" class="mb-2">{{ candidate.mainRole }}</h6>
              <div class="d-flex flex-wrap">
                <v-btn :disabled="candidate.github" class="" text>
                  <v-icon left>
                    fab fa-github
                  </v-icon>
                  Github
                </v-btn>
                <v-btn :disabled="!candidate.linkedin" class="" text>
                  <v-icon left>
                    fab fa-linkedin
                  </v-icon>
                  Linkedin
                </v-btn>
              </div>
            </div>
            <v-spacer></v-spacer>
            <g-btn
              type="outlined"
              color="secondary"
              :to="'/user/id/' + userId"
              class="my-10 align-self-center flex-fill "
              :label="$t('company.report.candidates.viewCandidate')"
            />
          </div>
        </v-card>
      </div>
    </template>
  </g-bootstrap>
</template>

<script>
import CompactCompanyCard from 'Components/Dashboard/CompactCompanyCard';

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
  },
  data() {
    return {
      user: {},
      company: {},
      job: {},
      report: [],
      report_: [
        {
          user: {
            name: 'Paulo Freitas',
          },
          mainRole: 'Fullstack Developer',
        },
        {
          user: {
            name: 'Bernardo Silva',
          },
          mainRole: 'Fullstack Developer',
        },
      ],
      userId: null,
      jobId: null,
      loaded: {
        company: false,
        user: false,
      },
      totalMatches: 3,
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
      console.log(this.company);
    },
    async getJob() {
      const jobController = new JobController();
      try {
        this.job = await jobController.getById(this.jobId);
      } catch (e) {
        this.$toast.error(this.$t('toast.error.retrieveJob'));
      }
      console.log(this.job);
    },
    async getUserInfo() {
      const userController = new UserController();
      this.user = userController.decodeUserToken();
      console.log(this.user);

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
