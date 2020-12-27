<template>
  <div class="d-flex justify-center mt-12">
    <g-card :sm="400" :md="500" :lg="600" :loading="true">
      <template v-slot:card-header>
        <g-card-header :title="getHeaderTitle()" />
      </template>
      <template v-slot:card-content>
      </template>
    </g-card>
  </div>
</template>

<script>
import UserController from 'Controllers/user';

import StorageHelper from 'Helpers/storage';

export default {
  name: 'ConfirmUser',
  props: {
    user: Object,
    _code: Number,
    _text: String,
  },
  async mounted() {
    this.userId = this.$route.query.id;
    this.confirmationKey = this.$route.query.key;
    this.confirmUser();
    this.confirmationStatus = this._code || 0;
  },
  data() {
    return {
      confirmationStatus: 0,
      resendCode: false,
      email: '',
      resendLoad: false,
      userEmail: '',
      rules: {
        email: () => true,
      },
    };
  },
  methods: {
    async confirmUser() {
      const userController = new UserController();

      try {
        await userController.confirmUser(this.email, this.confirmationKey);
        this.$toast.success(this.$t('toast.success.emailConfirmation'));
        this.confirmationStatus = 1;
        this.$router.push('/side-pick');
      } catch (e) {
        this.confirmationStatus = 2;
        this.$toast.error(this.$t('toast.warning.confirmationCode'));
      }
    },
    saveUserCredentials(user) {
      StorageHelper.saveState('user', user);
    },
    getHeaderTitle() {
      switch (this.confirmationStatus) {
        case 0:
          return this.$t('signup.confirmationCode.confirming');
        case 1:
          return this.$t('signup.registrationConfirmed.title');
        case 2:
          return this.$t('signup.registrationConfirmed.error');
      }
    },
    goToLogin() {
      this.$router.push({
        name: 'User Login',
        params: {
          userEmail: this.userEmail,
        },
      });
    },
  },
};
</script>

<style></style>
