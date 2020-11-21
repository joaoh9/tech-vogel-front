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
            <div style="font-weight:bold">{{$t('company.report.postedOn')}}</div>
            <div>{{ formatDate(job.creationDate || new Date()) }}</div>
          </div>
          <div class="d-flex flex-column flex-wrap mx-2 my-3">
            <div style="font-weight:bold">{{$t('company.report.createdOn')}}</div>
            <div>{{ formatDate(job.creationDate || new Date()) }}</div>
          </div>
          <div class="d-flex flex-column flex-wrap mx-2 my-3">
            <div style="font-weight:bold">{{$t('company.report.totalApplicants')}}</div>
            <div>{{ 13 }}</div>
          </div>
        </div>
        <v-divider class="my-10"></v-divider>
        <h4 class="my-5">{{$tc('company.report.yourTopMatches', totalMatches)}}</h4>
        <bdy-1
          >{{$t('company.report.matchesDisclaimer')}}
        </bdy-1>
        <v-card class="border-primary bs-primary pa-4 px-12 mt-6" color="bg" v-for="(candidate, i) in candidates" v-bind:key="i">
          <div class="d-flex justify-start">
            <v-avatar class="align-self-center" size="90" color="cinza-lighten-3">
              <v-img v-if="candidate.profilePhoto" :src="candidate.profilePhoto" />
            </v-avatar>
            <div class="d-flex flex-column">
              <h4 class="my-3">{{candidate.name}}</h4>
              <h6 class="my-2">{{candidate.mainRole}}</h6>
            </div>
            <g-4-benefits
              type="outlined"
              color="secondaru"
              :to="'/user/id/' + userId"
              class="mx-4"
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
  name: 'CompanyDashboard',
  mounted() {
    this.companyId = this.$route.params.companyId;
    this.jobId = this.$route.params.jobId;
    this.getUserInfo();
    this.getCompanyInfo();
    this.getJob();
  },
  components: {
    CompactCompanyCard,
  },
  data() {
    return {
      user: null,
      company: null,
      job: null,
      loaded: {
        company: false,
        user: false,
      },
      totalMatches: 3,
      jobs: [],
      candidates: [
        {
          name: 'Paulo',
          mainRole: 'Fullstack developer',
        },
      ],
    };
  },
  methods: {
    async getCompanyInfo() {
      const userController = new UserController();
      const userInfo = userController.decodeUserToken();

      if (userInfo !== 2) {
        this.$toast.error(this.$t('toast.error.companyInfo'));
        this.$router.push({
          name: 'New Company',
        });
      }
      const companyController = new CompanyController();

      try {
        this.company = await companyController.getByUserId('current');
        this.loaded.company = true;
      } catch (e) {
        this.$toast.error(this.$t('toast.error.companyInfo'));
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
