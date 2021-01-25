<template>
  <div class="d-flex align-center flex-column mt-4 mt-sm-12 flex-wrap">
    <div class="d-flex flex-column align-start">
      <g-card-header
        class="color-secondary mb-12"
        :title="$t('common.settings')"
        :description="$t('user.settings.subtitle')"
        style="max-width: 15rem;"
      />
      <Stepper
        class="mt-4"
        :stepsNames="$t('user.settings.buttons').map(el => el)"
        v-model="currentStep"
      >
        <g-card>
          <template v-slot:card-content>
            <div v-bind:style="{ display: currentStep == 0 ? 'block' : 'none' }">
              <Account v-on:updates="e => (user = e)" />
            </div>
            <div v-bind:style="{ display: currentStep == 1 ? 'block' : 'none' }">
              <Password />
            </div>
            <div v-bind:style="{ display: currentStep == 2 ? 'block' : 'none' }">
              <Personal
                v-on:company-logo="e => (company.logo = e)"
                v-on:updates="e => (company = e)"
              />
            </div>
          </template>

          <template v-slot:buttons>
            <div style="z-index: -1">
              <g-btn
                class="mb-12"
                :label="$t('user.deleteAccount')"
                type="error"
                style="width: 100%;"
              />
            </div>

            <div class="d-flex justify-space-between">
              <g-btn
                :label="$t('common.backDashboard')"
                type="secondary"
                @click="$router.push({ name: 'Company Dashboard' })"
              />

              <g-btn :label="$t('common.update')" type="primary" @click="update" />
            </div>
          </template>
        </g-card>
      </Stepper>
    </div>
  </div>
</template>

<script>
import CompanyController from 'Controllers/company';
import UserController from 'Controllers/user';
import Stepper from 'Components/Interface/Stepper';
import Account from './Account';
import Password from './Password';
import Personal from './Personal';

export default {
  name: 'SettingsOverview',
  components: {
    Stepper,
    Account,
    Password,
    Personal,
  },
  data() {
    return {
      currentStep: 0,
      user: {
        name: '',
      },
      company: {
        logo: {},
        name: '',
        description: '',
        links: {
          website: '',
          linkedin: '',
          instagram: '',
          twitter: '',
        },
      },
    };
  },
  methods: {
    async update() {
      switch (this.currentStep) {
        case 0:
          await this.updateUserAccount();
          break;
        case 2:
          await this.updateCompany();
          break;
      }
    },
    async updateUserAccount() {
      const userController = new UserController();

      this.loading = true;

      const obj = this.user;

      for (const key of ['name']) {
        if (!obj[key]) {
          delete obj[key];
        }
      }

      try {
        await userController.update(obj);

        this.$toast.success(this.$t('toast.success.updatedData'));

        this.$router.push({
          name: 'Company Dashboard',
        });
      } catch (e) {
        this.$toast.error(this.$t('toast.error.update'));
      } finally {
        this.loading = false;
      }
    },
    async updateCompany() {
      const companyController = new CompanyController();

      this.loading = true;

      const obj = this.company;

      for (const key of [ 'name', 'description' ]) {
        if (!obj[key]) {
          delete obj[key];
        }
      }

      for (const key of [ 'website', 'linkedin', 'instagram', 'twitter' ]) {
        if (!obj.links[key]) {
          delete obj.links[key];
        }
      }

      for (const key of [ 'data64', 'name', 'size', 'type' ]) {
        if (!obj.logo[key]) {
          delete obj.logo;
          break;
        }
      }

      try {
        await companyController.update(obj);
        this.$toast.success(this.$t('toast.success.updatedData'));

        this.$router.push({
          name: 'Company Dashboard',
        });
      } catch (e) {
        this.$toast.error(this.$t('toast.error.updateCompany'));
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
