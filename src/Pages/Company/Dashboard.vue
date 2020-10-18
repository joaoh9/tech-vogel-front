<template>
  <div class="container-fluid mx-12">
    <v-row>
      <v-col md="4" cols="12">
        <!-- TODO: internacionalização -->
        <UserCard :user="user" v-if="user" :key="loading.user" />
        <div class="mt-6">
          <h6>Your profile isn't complete yet</h6>
          <p class="sub-1">Having a complete profile lets us show you better job positions!</p>
          <v-progress-linear style="max-width: 300px" value="50" color="primary" />
        </div>
      </v-col>
      <v-col md="8" cols="12" v-if="company">
        <div>
          <CompanyCard :company="company" v-if="company" />
          <div class="mt-8 mb-12">
            <h4>{{ $t('company.dashboard.actions.title') }}</h4>
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
              :label="$t('company.dashboard.manageAccountInfo')"
            />
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import CompanyController from 'Controllers/company';
import UserCard from 'Components/Dashboard/UserCard';
import CompanyCard from 'Components/Dashboard/CompanyCard';
import ActionCard from 'Components/Dashboard/ActionCard';
import StorageHelper from 'Helpers/storage';

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
      this.loading.user = true;
      this.loading.company = true;
      this.user = StorageHelper.loadState('user');
      this.loading.user = false;
      if (!this.user) {
        this.$toast('Could not retrieve user info. Please login again');
        this.$router.push({
          path: '/login',
        });
      }

      const companyId = StorageHelper.loadState('companyId');
      if (!companyId) {
        this.$toast.error(
          'Could not retrieve company info. Make sure you have a registered company',
        );
      }
      await this.getCompanyInfo(companyId);
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
