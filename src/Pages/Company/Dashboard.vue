<template>
  <g-bootstrap :firtsCol="getFistColInfo()" :secondCol="getSecondColInfo()">
    <template template v-slot:first-col>
      <UserCard :user="user" />
      <g-btn to="/jobs/new" class="mt-4" type="primary" block xl :label="$t('common.postAJob')" />
      <g-btn
        class="mt-4"
        type="outlined"
        color="secondary"
        block
        xl
        :label="$t('user.dashboard.manageAccount')"
      />
    </template>
    <template template v-slot:second-col>
      <div>
        <CompanyCard :company="company" />
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
    </template>
  </g-bootstrap>
</template>

<script>
import UserCard from 'Components/Dashboard/UserCard';
import CompanyCard from 'Components/Dashboard/CompanyCard';
import ActionCard from 'Components/Dashboard/ActionCard';
import CompanyController from 'Controllers/company';
import StorageHelper from 'Helpers/storage';

export default {
  name: 'CompanyDashboard',
  mounted() {
    this.getUserInfo();
    this.getCompanyInfo();
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
    async getCompanyInfo() {
      const companyId = StorageHelper.loadState('companyId');
      if (!companyId) {
        this.$toast.error(
          'Could not retrieve company info. Make sure you have a registered company',
        );
        this.$router.push({
          name: 'New Company',
        });
      }
      const companyController = new CompanyController();

      try {
        this.company = await companyController.getById(companyId);
      } catch (e) {
        this.$toast.error(
          'Could not retrieve company info. Make sure you have a registered company',
        );
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
