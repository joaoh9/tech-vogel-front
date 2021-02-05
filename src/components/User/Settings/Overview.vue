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
              <Password v-on:updates="e => (user = e)" />
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
              <v-dialog v-model="dialog">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    v-on="on"
                    v-bind="attrs"
                    class="mb-12 font-weight-bold"
                    style="width: 100%;"
                    depressed
                    outlined
                    color="error"
                    @click="
                      dialog = true;
                      showFirstDialog = true;
                    "
                  >
                    {{ $t('user.account.delete.text') }}
                  </v-btn>
                </template>
                <div>
                  <DefaultDialog
                    v-if="showFirstDialog"
                    :key="showFirstDialog"
                    :title="$t('user.account.delete.title')"
                    :subtitle="$t('user.account.delete.subtitle')"
                    btnType="error"
                    :btnText="$t('user.account.delete.text')"
                    :secBtnText="$t('common.close')"
                    @close="
                      showFirstDialog = false;
                      dialog = false;
                    "
                    v-on:primary-button-click="
                      showFirstDialog = false;
                      keepDialog = true;
                      deleteAccount();
                    "
                    v-on:secondary-button-click="
                      showFirstDialog = false;
                      dialog = false;
                    "
                  />
                  <DefaultDialog
                    :title="$t('TODO')"
                    :subtitle="
                      $t('TODO')
                    "
                    btnType="secondary"
                    :btnText="$t('TODO')"
                    :secBtnText="$t('common.close')"
                    emailCode
                    v-if="keepDialog"
                    @close="
                      keepDialog = false;
                      dialog = false;
                    "
                    v-on:code-button-click="
                      keepDialog = true;
                      deleteAccount();
                    "
                    v-on:primary-button-click="
                      keepDialog = false;
                      dialog = false;
                    "
                    v-on:secondary-button-click="
                      keepDialog = false;
                      dialog = false;
                    "
                  />
                </div>
              </v-dialog>
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
import NotificationController from 'Controllers/notification';
import Stepper from 'Components/Interface/Stepper';
import Account from './Account';
import Password from './Password';
import Personal from './Personal';
import DefaultDialog from 'Components/Dialogs/Default';

export default {
  name: 'SettingsOverview',
  components: {
    Stepper,
    Account,
    Password,
    Personal,
    DefaultDialog,
  },
  data() {
    return {
      currentStep: 0,
      user: {
        name: '',
        password: '',
        newPassword: '',
        confirmPassword: '',
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
      dialog: false,
      confirmationKey: '',
      showFirstDialog: false,
      keepDialog: false,
    };
  },
  methods: {
    async update() {
      switch (this.currentStep) {
        case 0:
          await this.updateUserAccount();
          break;
        case 1:
          await this.updatePassword();
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
    async updatePassword() {
      const userController = new UserController();
      const { email } = await userController.getById();

      try {
        const data = await userController.auth({
          email,
          password: this.user.password,
        });

        if (data && this.user.newPassword && this.user.confirmPassword) {
          this.user.password = this.user.newPassword;

          const response = await userController.update(this.user);

          if (response) {
            this.$toast.success(this.$t('toast.success.passwordUpdated'));

            this.$router.push({
              name: 'User Dashboard',
            });
          }
        } else {
          this.$toast.warning(this.$t('toast.error.wrongPasswordAuth'));
        }
      } catch (e) {
        this.$toast.error('');
      }
    },
    async deleteAccount() {
      const notificationController = new NotificationController();
      try {
        await notificationController.deleteAccount();
      } catch (e) {
        this.$toast.error(this.$t('toast.error.somethingWrong'));
      }
    },
  },
};
</script>
