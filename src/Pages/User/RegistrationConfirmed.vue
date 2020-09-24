<template>
  <div>
    <div class="d-flex justify-center mt-12">
      <g-card :sm="400" :md="500" :lg="600">
        <template v-slot:card-content>
          <div class="d-flex justify-center ma-12" style="flex-direction: column">
            <h4 :key="confirmationId" class="h4-bold align-self-center">
              {{
                confirmationId
                  ? $t('Signup.registrationConfirmed.title')
                  : $t('Signup.registrationConfirmed.error')
              }}
            </h4>
            <div class="d-flex flex-column justify-space-around align-center mt-12">
              <span @click="resendCode = true" class="body-1 cursor-pointer color-cinza-lighten-1">
                {{ $t('Signup.resendConfirmationCode.title') }}
              </span>

              <div v-if="!confirmationId && resendCode" style="min-width: 60%" class="mt-6">
                <form-input class="mt-6" title="Your email" />
                <v-text-field outlined v-model="email" />
                <v-btn class="float-right" @click="resendConfirmationCode" large color="primary">Resend</v-btn>
              </div>

              <v-btn
                v-if="confirmationId"
                to="/login"
                large
                color="primary"
                elevation="0"
                max-width="100"
              >
                {{ $t('Common.login') }}
              </v-btn>
            </div>
          </div> </template
        >s
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
        await userController.confirmAccount(this.confirmationId);
        this.confirmationId = true;
      } catch (e) {
        this.confirmationId = false;
      }
    },
    async resendConfirmationCode() {
      const userController = new UserController();

      try {
        const success = await userController.resendConfirmationEmail({ email: this.email });
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
