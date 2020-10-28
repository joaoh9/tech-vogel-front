<template>
  <div class="d-flex justify-center mt-12">
    <g-card :sm="400" :md="500" :lg="600">
      <template v-slot:card-header>
        <g-card-header :title="getHeaderTitle()" />
      </template>
      <template v-slot:card-content>
        <div clas="d-flex justify-center ma-12 flex-column">
          <div v-if="confirmationStatus === 0" class="d-flex justify-center">
            <g-btn type="primary" :label="$t('common.confirm')" await @click="confirmAccount()" />
          </div>

          <div
            v-if="confirmationStatus === 1"
            class="d-flex flex-column justify-space-around align-center mt-12"
          >
            <g-btn
              type="primary"
              class="mb-4"
              :label="$t('signup.buttons.createCompany')"
              @click="crateCompany()"
              block
            />

            <g-btn
              type="primary"
              class="mb-4"
              :label="$t('signup.buttons.createCV')"
              @click="crateCV()"
              block
            />
          </div>
          <v-row justify="center" v-if="confirmationStatus === 2">
            <v-col>
              <div class="d-flex justify-center">
                <g-btn
                  type="outlined"
                  textColor="black"
                  @click="resendCode = !resendCode"
                  class="bdy-1 cursor-pointer color-cinza-lighten-1"
                  :label="$t('signup.resendConfirmationCode.title')"
                />
              </div>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col>
              <div v-if="resendCode" style="min-width: 100%" class="mt-6">
                <form-input class="mt-6" title="Your email" />
                <v-text-field :rules="[rules.email(email)]" outlined v-model="email" />
                <g-btn
                  class="float-right"
                  @click="resendConfirmationCode()"
                  type="primary"
                  :loading="resendLoad"
                  :label="$t('signup.resendConfirmationCode.resend')"
                />
              </div>
            </v-col>
          </v-row>
        </div>
      </template>
    </g-card>
  </div>
</template>

<script>
import UserController from 'Controllers/user';

import StorageHelper from 'Helpers/storage';
import RulesHelper from 'Helpers/rules';

export default {
  name: 'RegistrationConfirmed',
  props: {
    user: Object,
  },
  async mounted() {
    this.confirmationId = this.$route.params.id;
    this.rules = new RulesHelper(this.$i18n.messages[this.$i18n.locale]);
  },
  data() {
    return {
      confirmationStatus: 0,
      resendCode: false,
      email: '',
      resendLoad: false,
      userEmail: '',
      userUsername: '',
      rules: {
        email: () => true,
      },
    };
  },
  methods: {
    async confirmAccount() {
      const userController = new UserController();

      try {
        const user = await userController.confirmAccount(this.confirmationId);
        this.saveUserCredentials(user);
        this.userEmail = user.email;
        this.username = user.username;

        this.confirmationStatus = 1;
      } catch (e) {
        this.confirmationStatus = 2;
      }
    },
    saveUserCredentials(user) {
      StorageHelper.saveState('user', user);
    },
    async resendConfirmationCode() {
      this.resendLoad = true;
      const userController = new UserController();

      try {
        const success = await userController.resendConfirmationEmail(this.email);

        if (success.success) {
          this.$toast.success(this.$t('signup.resendConfirmationCode.success'));
        }
        this.resendLoad = false;
      } catch (e) {
        this.resendLoad = true;
        this.$toast.error(this.$t('signup.resendConfirmationCode.error'));
      }
    },
    getHeaderTitle() {
      switch (this.confirmationStatus) {
        case 0:
          return this.$t('signup.registrationConfirmed.clickToConfirm');
        case 1:
          return this.$t('signup.registrationConfirmed.title');
        case 2:
          return this.$t('signup.registrationConfirmed.error');
      }
    },
    crateCompany() {
      this.$router.push({
        name: 'User Login',
        params: {
          nextRoute: '/company/new',
          userEmail: this.userEmail,
          username: this.username,
        },
      });
    },
    crateCV() {
      this.$router.push({
        name: 'User Login',
        params: {
          nextRoute: '/resume/new',
          firstLogin: true,
          userEmail: this.userEmail,
          username: this.username,
        },
      });
    },
  },
};

</script>

<style></style>
