<template>
  <div>
    <div class="d-flex justify-center mt-12">
      <g-card :md="500" :lg="500">
        <template v-slot:card-content>
          <div class="d-flex justify-center ma-12 flex-column">
            <h4 class="h4-bold align-self-center">{{ $t('signup.confirmEmail.title') }}</h4>
            <span class="bdy-1 align-self-center color-cinza-lighten-1 mt-4">
              {{ $t('signup.confirmEmail.description') }}
            </span>
            <div class="d-flex flex-column justify-space-around align-center mt-12 flex-wrap">
              <g-btn
                type="text"
                textColor="black"
                @click="resendCode = !resendCode"
                class="bdy-1 cursor-pointer color-cinza-lighten-1"
                :label="$t('signup.resendConfirmationCode.title')"
              />
            </div>

            <div
              v-if="resendCode"
              class="d-flex flex-column justify-space-around align-center mt-12 flex-wrap"
            >
              <form-input title="Your email" />
              <v-text-field :rules="[rules.email(email)]" outlined v-model="email" />
              <g-btn
                class="float-right"
                @click="resendConfirmationCode()"
                :loading="resendLoad"
                type="primary"
                :label="$t('signup.resendConfirmationCode.resend')"
              />
            </div>
            <div class="d-flex justify-center">
              <g-btn
                class="mt-4"
                type="primary"
                v-if="!resendCode"
                to="/login"
                maxwidth="100"
                :label="$t('common.login')"
              />
            </div>
          </div>
        </template>
      </g-card>
    </div>
  </div>
</template>

<script>
import UserController from 'Controllers/user';
import RulesHelper from 'Helpers/rules';

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
    this.rules = new RulesHelper(this.$i18n.messages[this.$i18n.locale]);
  },
  data() {
    return {
      resendCode: false,
      email: '',
      rules: {
        email: () => true,
      },
      resendLoad: false,
    };
  },
  methods: {
    async resendConfirmationCode() {
      const userController = new UserController();
      this.resendLoad = true;
      try {
        const success = await userController.resendConfirmationEmail(this.email);
        if (success.success) {
          this.$toast.success(this.$t('signup.resendConfirmationCode.success'));
        }
        this.resendLoad = false;
      } catch (e) {
        this.resendLoad = false;
        this.$toast.error(this.$t('signup.resendConfirmationCode.error'));
      }
    },
  },
};
</script>

<style></style>
