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
      <CompactCompanyCard :company="company" :job="job" v-if="company" :key="loaded.company" />
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
        <h4 class="mb-2">{{ $tc('company.report.yourTopMatches', 3) }}</h4>
        <bdy-1>{{ $t('company.report.matchesDisclaimer') }} </bdy-1>
        <CandidateCard
          v-for="(user, index) in users"
          :userInfo="user"
          :resumeInfo="reports[index]"
          :profilePic="profilePics[index]"
          :key="index"
s        />
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
import ResumeController from 'Controllers/resume';
import ProfilePictureController from 'Controllers/profilePic';

import moment from 'moment';

export default {
  name: 'CandidateReport',
  async mounted() {
    this.jobId = this.$route.params.jobId;
    this.companyId = this.$route.params.companyId;
    await this.getLoggedUser();
    await this.getJob();
    await this.getCompanyData();
    await this.checkPerm();
    await this.getReport();
    await this.getUsers();
    await this.getUserResume();
    await this.getProfilePicture();
    await this.getApplicationCount();
  },
  components: {
    CompactCompanyCard,
    CandidateCard,
  },
  data() {
    return {
      users: [],
      reports: [],
      profilePics: [],
      totalApplicants: 0,
      company: {},
      job: {},
      userId: null,
      userIds: [],
      jobId: null,
      loaded: {
        company: false,
        user: false,
      },
      jobs: [],
    };
  },
  methods: {
    async getUsers() {
      const userController = new UserController();

      for (const userId of this.userIds) {
        try {
          this.users.push(await userController.getById(userId));
        } catch (e) {
          this.$toast.error(this.$t('toast.error.retrieveUserData', { userId: userId }));
        }
      }
    },
    async getUserResume() {
      const resumeController = new ResumeController();

      for (const userId of this.userIds) {
        try {
          this.reports.push(await resumeController.getByUserId(userId));
        } catch (e) {
          this.$toast.error(this.$t('toast.error.retrieveUserData', { userId: userId }));
        }
      }
    },
    async getProfilePicture() {
      const profilePictureController = new ProfilePictureController();

      for (const userId of this.userIds) {
        try {
          this.profilePics.push(await profilePictureController.getByUserId(userId));
        } catch (e) {
          this.$toast.error(this.$t('toast.error.retrieveUserData', { userId: userId }));
        }
      }
    },
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
    async getLoggedUser() {
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
        this.userIds = this.report.result.map(result => result.userId);
      } catch (e) {
        // this.$toast.error(this.$t('toast.error.retrieveJob'));
      }
    },
    async getApplicationCount() {
      const jobController = new JobController();

      try {
        this.totalApplicants = await jobController.getApplicationCount(this.jobId);
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
          description: this.formatDate(this.job.createdAt),
        },
        {
          title: this.$t('company.report.createdOn'),
          description: this.formatDate(this.job.createdAt),
        },
        {
          title: this.$t('company.report.totalApplicants'),
          description: this.totalApplicants.amount,
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
