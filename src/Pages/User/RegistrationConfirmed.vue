<template>
  <div>
    <div class="d-flex justify-center mt-12">
      <g-card :sm="400" :md="500" :lg="600">
        <template v-slot:card-header>
          <g-card-header
            :title="
              confirmationId
                ? $t('Signup.registrationConfirmed.title')
                : $t('Signup.registrationConfirmed.error')
            "
          />
        </template>
        <template v-slot:card-content>
          <div clas="d-flex justify-center ma-12" style="flex-direction: column">
            <div
              v-if="confirmationId"
              class="d-flex flex-column justify-space-around align-center mt-12"
            >
              <g-btn
                type="primary"
                class="mb-4"
                label="I want to post a job"
                to="/company/new"
                block
              />
              <g-btn type="primary" to="/resume/new" block label="I want to get hired" />
            </div>
            <v-row justify="center" v-if="!confirmationId">
              <v-col>
                <g-btn
                  type="outlined"
                  textColor="black"
                  @click="resendCode = !resendCode"
                  class="body-1 cursor-pointer color-cinza-lighten-1"
                  :label="$t('Signup.resendConfirmationCode.title')"
                />
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col>
                <div v-if="resendCode" style="min-width: 100%" class="mt-6">
                  <form-input class="mt-6" title="Your email" />
                  <v-text-field outlined v-model="email" />
                  <g-btn
                    class="float-right"
                    @click="resendConfirmationCode()"
                    type="primary"
                    :label="$t('Signup.resendConfirmationCode.resend')"
                  />
                </div>
              </v-col>
            </v-row>
          </div>
        </template>
      </g-card>
    </div>
    <g-alert
      :succesMessage="$t('Signup.resendConfirmationCode.success')"
      :errorMessage="$t('Signup.resendConfirmationCode.error')"
      v-on:success="s => (requestSuccess = s)"
      v-on:error="s => (requestError = s)"
      :successVar="requestSuccess"
      :errorVar="requestError"
    />
  </div>
</template>

<script>
import UserController from 'Controllers/user';
import StorageHelper from 'Helpers/storage';
import JwtHelper from 'Helpers/jwt';

export default {
  name: 'Login',
  props: {
    user: Object,
  },
  async mounted() {
    this.confirmationId = this.$route.params.id;
    await this.confirmAccount();
  },
  data() {
    return {
      requestSuccess: false,
      requestError: false,
      confirmationId: null,
      resendCode: false,
      email: '',
    };
  },
  methods: {
    async confirmAccount() {
      const userController = new UserController();

      try {
        const user = await userController.confirmAccount(this.confirmationId);
        this.saveUserCredentials(user);

        this.confirmationId = true;
      } catch (e) {
        this.confirmationId = false;
      }
    },
    saveUserCredentials(user) {
      const jwtHelper = new JwtHelper();

      const userToken = jwtHelper.createToken(user);

      StorageHelper.saveOnSession('user', userToken);
    },
    async resendConfirmationCode() {
      const userController = new UserController();

      try {
        const success = await userController.resendConfirmationEmail(this.email);
        console.log(success);
        if (success.success) {
          this.requestSuccess = true;
        }
      } catch (e) {
        this.requestError = true;
      }
    },
  },
};
</script>

<style></style>
