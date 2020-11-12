<template>
  <div>
    <div v-for="(job, i) in jobs" :key="i">
      <JobManagerCard :job="job" :company="company" />
    </div>
  </div>
</template>

<script>
import JobManagerCard from 'Components/Dashboard/JobManagerCard';
import StorageHelper from 'Helpers/storage';
import CompanyController from 'Controllers/company';
import JobController from 'Controllers/job';

export default {
  name: 'ManageJobs',
  components: {
    JobManagerCard,
  },
  mounted() {
    this.getUserInfo();
    this.getCompanyJobs();
  },
  data() {
    return {
      user: null,
      company: null,
      loading: {
        company: false,
        user: false,
      },
      jobs: [],
    };
  },
  methods: {
    async getCompanyInfo(companyId) {
      const companyController = new CompanyController();

      try {
        this.company = await companyController.getById(companyId);
        this.loading.company = false;
      } catch (e) {
        this.$toast.error(this.$t('toast.error.retrieveCompany'));
      }
    },
    async getUserInfo() {
      this.loading.user = true;
      this.loading.company = true;
      this.user = StorageHelper.loadState('user');
      this.loading.user = false;
      if (!this.user) {
        this.$toast.error(this.$t('toast.error.retrieveUser'));
        this.$router.push({
          path: '/login',
        });
      }

      const companyId = StorageHelper.loadState('companyId');
      if (!companyId) {
        this.$toast.error(this.$t('toast.error.companyInfoLogged'));
      }
      try {
        await this.getCompanyInfo(companyId);
      } catch (e) {
        this.$toast.error(this.$t('toast.error.retrieveCompany'));
      }
    },
    async getCompanyJobs() {
      const jobController = new JobController();

      try {
        this.jobs = await jobController.getAll();
      } catch (e) {
        this.$toast.error(this.$t('toast.error.retrieveJob'));
      }
    },
  },
};

</script>

<style></style>
