<template>
  <g-bootstrap :firstCol="getFistColInfo()" :secondCol="getSecondColInfo()">
    <template v-slot:first-col>
      <UserCard :user="user" v-if="user" />
    </template>
    <template v-slot:second-col>
      <CompanyCard :company="company" v-if="company" />
      <div v-for="(job, i) in jobs" :key="i">
        <JobManagerCard :job="job" :company="company" />
      </div>
    </template>
  </g-bootstrap>
</template>

<script>
import CompanyCard from 'Components/Dashboard/CompanyCard';
import JobManagerCard from 'Components/Dashboard/JobManagerCard';
import UserCard from 'Components/Dashboard/UserCard';
import StorageHelper from 'Helpers/storage';
import CompanyController from 'Controllers/company';
import JobController from 'Controllers/job';

export default {
  name: 'ManageJobs',
  components: {
    CompanyCard,
    UserCard,
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
        console.log(this.company);
        this.loading.company = false;
      } catch (e) {
        alert(e);
      }
    },
    async getUserInfo() {
      this.loading.user = true;
      this.loading.company = true;
      try {
        this.user = StorageHelper.loadState('user');
        this.loading.user = false;
      } catch (e) {
        alert(e);
      }
      try {
        const companyId = StorageHelper.loadState('companyId');
        await this.getCompanyInfo(companyId);
      } catch (e) {
        alert(e);
      }
    },
    async getCompanyJobs() {
      const jobController = new JobController();

      try {
        this.jobs = await jobController.getAll();
      } catch (e) {
        // TODO: gerenciar melhor erro
        alert(e);
      }
    },
    getFistColInfo() {
      return {
        md: 4,
        cols: 12,
        condition: true,
      };
    },
    getSecondColInfo() {
      return {
        md: 8,
        cols: 12,
        condition: true,
      };
    },
  },
};
</script>

<style></style>
