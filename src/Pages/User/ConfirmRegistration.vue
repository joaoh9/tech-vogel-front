<template>
  <div>
    <div class="d-flex justify-center mt-12">
      <g-card :md="500" :lg="500">
        <template v-slot:card-content>
          <div class="d-flex justify-center ma-12" style="flex-direction: column">
            <h4 class="h4-bold align-self-center">{{ $t('Signup.confirmEmail.title') }}</h4>
            <span class="body-1 align-self-center color-cinza-lighten-1 mt-4">
              {{ $t('Signup.confirmEmail.description') }}
            </span>
            <div class="d-flex flex-column justify-space-around align-center mt-12 flex-wrap">
              <g-btn
                type="text"
                textColor="black"
                @click="resendCode = !resendCode"
                class="body-1 cursor-pointer color-cinza-lighten-1"
                :label="$t('Signup.resendConfirmationCode.title')"
              />

              <div v-if="resendCode" style="min-width: 60%" class="mt-6">
                <form-input class="mt-6" title="Your email" />
                <v-text-field outlined v-model="email" />
                <g-btn
                  class="float-right"
                  @click="resendConfirmationCode()"
                  type="primary"
                  :label="$t('Signup.resendConfirmationCode.resend')"
                />
              </div>
              <g-btn
                class="mt-4"
                type="primary"
                v-else
                to="/login"
                maxwidth="100"
                :label="$t('Common.login')"
              />
            </div>
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

export default {
  name: 'Login',
  props: {
    _username: String,
    _email: String,
  },
  mounted() {
    if (this._username) {
      this.username = this._username;
    }
    if (this._email) {
      this.email = this._email;
    }
  },
  data() {
    return {
      requestSuccess: false,
      requestError: false,
      resendCode: false,
      email: '',
    };
  },
  methods: {
    async resendConfirmationCode() {
      const userController = new UserController();

      try {
        const success = await userController.resendConfirmationEmail(this.email);
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
