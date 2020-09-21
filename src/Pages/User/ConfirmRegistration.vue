<template>
  <div>
    <div class="d-flex justify-center mt-12">
      <g-card :md="500" :lg="500">
        <template v-slot:card-content="{}">
          <div class="d-flex justify-center ma-12" style="flex-direction: column">
            <h4 class="h4-bold align-self-center">{{ $t('Signup.confirmEmail.title') }}</h4>
            <span class="body-1 align-self-center color-cinza-lighten-1 mt-4">
              {{ $t('Signup.confirmEmail.description') }}
            </span>
            <div class="d-flex justify-space-around align-center mt-12 flex-wrap">
              <span
                @click="resendConfirmationCode()"
                class="body-1 cursor-pointer color-cinza-lighten-1"
              >
                {{ $t('Signup.resendConfirmationCode.title') }}
              </span>
              <v-btn to="/login" large color="primary" elevation="0" max-width="100">
                {{ $t('Common.login') }}
              </v-btn>
            </div>
          </div>
        </template>s
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
  data() {
    return {
      requestSuccess: false,
      requestError: false,
    };
  },
  methods: {
    async resendConfirmationCode() {
      const userController = new UserController();

      try {
        const success = await userController.resendConfirmationEmail({ email: this.user.email });
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
