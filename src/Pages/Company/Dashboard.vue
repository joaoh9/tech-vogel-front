<template>
  <div class="container-fluid mx-12">
    <v-row>
      <v-col md="4" cols="12">
        <UserCard :user="user" v-if="user" :key="loading.user" />
        <div class="mt-6">
          <h6>Your profile isn't complete yet</h6>
          <p class="subtitle-1">Having a complete profile lets us show you better job positions!</p>
          <v-progress-linear style="max-width: 300px" value="50" color="primary" />
        </div>
      </v-col>
      <v-col md="8" cols="12" v-if="company">
        <div>
          <CompanyCard :company="company" v-if="company" />
          <div class="mt-8 mb-12">
            <h4>{{ $t('Company.dashboard.actions.title') }}</h4>
          </div>
          <v-row>
            <v-col cols="6" v-for="(action, index) in getCardActions()" v-bind:key="index">
              <ActionCard :action="action" />
            </v-col>
          </v-row>
          <div class="my-5">
            <g-btn
              outlined
              block
              type="secondary"
              :label="$t('Company.dashboard.manageAccountInfo')"
            />
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import JwtHelper from 'Helpers/jwt';
import CompanyController from 'Controllers/company';
import UserCard from 'Components/Dashboard/UserCard';
import CompanyCard from 'Components/Dashboard/CompanyCard';
import ActionCard from 'Components/Dashboard/ActionCard';

export default {
  name: 'CompanyDashboard',
  mounted() {
    this.getUserInfo();
  },
  components: {
    CompanyCard,
    UserCard,
    ActionCard,
  },
  data() {
    return {
      user: null,
      company: null,
      loading: {
        company: false,
        user: false,
      },
    };
  },
  methods: {
    async getCompanyInfo(companyId) {
      const companyController = new CompanyController();

      try {
        this.company = await companyController.getById(companyId);
        this.loading.company = false;
      } catch (e) {
        this.loading.company = false;
      }
    },
    async getUserInfo() {
      const jwtHelper = new JwtHelper();
      this.loading.user = true;
      this.loading.company = true;
      try {
        this.user = jwtHelper.getData('user');
        this.loading.user = false;
      } catch (e) {
        alert(e);
      }
      try {
        const { companyId } = jwtHelper.getData('company');
        await this.getCompanyInfo(companyId);
      } catch (e) {
        alert(e);
      }
    },
    getCardActions() {
      return [
        {
          name: 'manageListings',
          route: { path: '/company/jobs' },
          icon: 'fa-stream',
        },
        {
          name: 'postJob',
          route: { path: '/jobs/new' },
          icon: 'fa-bullhorn',
        },
        {
          name: 'editProfile',
          route: { path: '' },
          icon: 'fa-edit',
        },
        {
          name: 'managePayment',
          route: { path: '' },
          icon: 'fa-dollar-sign',
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

<style>
p {
  display: inline;
}
</style>
