<template>
  <div>
    <div class="d-flex justify-center mt-12">
      <g-card :md="500" :lg="500">
        <template v-slot:card-content>
          <div class="d-flex justify-center ma-12 flex-column">
            <h4 class="h4-bold align-self-center text-center">
              {{ $t('signup.confirmEmail.title', { email: email }) }}
            </h4>
            <span class="bdy-1 align-self-center color-cinza-lighten-1 mt-4">
              {{ $t('signup.confirmationCode.title') }}
            </span>
            <div class="d-flex flex-column align-center mt-6">
              <div style="max-width: 150px">
                <v-text-field v-model="confirmationKey" outlined dense />
                <g-btn
                  block
                  class="mt-n2"
                  type="primary"
                  @click="confirmUser()"
                  :label="$t('common.confirm')"
                />
              </div>
            </div>
            <div
              class="d-flex flex-column justify-space-around align-center mt-12 flex-wrap"
              v-if="_showResendButton"
            >
              <v-card
                outlined
                @click="resendConfirmationCode()"
                style="background-color: #FCFCFF"
                class="pa-3 cursor-pointer"
              >
                <bdy-1 color="black" class="bdy-1  text-center">
                  {{ $t('signup.resendConfirmationCode.title') }}
                </bdy-1>
              </v-card>
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
  name: 'ConfirmRegistration',
  props: {
    _email: String,
    _showResendButton: {
      type: Boolean,
      default: true,
    },
  },
  mounted() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
    if (this._email) {
      this.email = this._email;
    } else if (!this._email) {
      this.$router.push('/login');
    }

    this.showResendButton = this._showResendButton;

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
      confirmationKey: '',
      showResendButton: false,
    };
  },
  methods: {
    async resendConfirmationCode() {
      const userController = new UserController();
      this.resendLoad = true;
      try {
        await userController.resendConfirmationEmail(this.email);

        this.$toast.success(this.$t('signup.resendConfirmationCode.success'));

        this.resendLoad = false;
      } catch (e) {
        this.resendLoad = false;
        if (e.response.status === 409) {
          this.$toast.info(this.$t('toast.info.userAlreadyConfirmed'));
          return this.$router.push({
            name: 'User Login',
            params: {
              email: this.email,
            },
          });
        }
        this.$toast.error(this.$t('signup.resendConfirmationCode.error'));
      }
    },
    async confirmUser() {
      const userController = new UserController();

      try {
        await userController.confirmUser(this.email, this.confirmationKey);
        this.$toast.success(this.$t('toast.success.emailConfirmation'));
        this.$emit('login');
        this.$router.push('/side-pick');
      } catch (e) {
        this.$toast.error(this.$t('toast.warning.confirmationCode'));
      }
    },
  },
};
</script>

<style></style>
