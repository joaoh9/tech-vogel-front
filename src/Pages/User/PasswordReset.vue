<template>
  <div class="d-flex justify-center mt-12">
    <g-card :lg="600" :md="500">
      <template v-slot:card-content>
        <g-card-header :title="$t('user.passwordReset.title')" :description="$t('user.passwordReset.description')" />
        <form-input class="mt-6" :title="$t('common.email.label')" />
        <v-text-field
          outlined
          v-model="user.email"
          :rules="[rules.required(user.email)]"
          autofocus
          data-cy="password-reset-email"
        />
      </template>
      <template v-slot:buttons>
        <div class="d-flex justify-space-between my-6">
          <v-btn @click="$router.go(-1)" color="secondary" tile outlined text large>
            {{ $t('common.back') }}
          </v-btn>
          <v-btn
            :loading="loading.login"
            color="primary"
            elevation="0"
            large
            @click="passwordReset()"
            data-cy="login"
          >
            {{ $t('common.confirm') }}
          </v-btn>
        </div>
      </template>
    </g-card>
  </div>
</template>

<script>
import UserController from 'Controllers/user';
import RulesHelper from 'Helpers/rules';

import StorageHelper from 'Helpers/storage';

export default {
  name: 'Login',
  props: {
    nextRoute: {
      type: String,
      default: '',
    },
    userEmail: {
      type: String,
    },
    email: {
      type: String,
    },
    firstLogin: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    this.rules = new RulesHelper(this.$i18n.messages[this.$i18n.locale]);
    this.rulesLoaded = true;
    if (this.email) {
      this.user.email = this.email;
    }
    this.retrieveUserDataFromLocalStorage();
  },
  data() {
    return {
      showPassword: false,
      user: {
        email: '',
      },
      loading: {
        login: false,
      },
      rules: {
        required: () => true,
      },
      errorMessage: this.$t('login.error'),
    };
  },
  methods: {
    retrieveUserDataFromLocalStorage() {
      const userController = new UserController();
      const trashedToken = StorageHelper.loadState('trashedToken');
      if (!trashedToken) {
        return;
      }
      const userInfo = userController.decodeUserToken(trashedToken);

      this.user.email = userInfo.email;
    },
  },

  passwordReset() {

  },
};
</script>

<style></style>
