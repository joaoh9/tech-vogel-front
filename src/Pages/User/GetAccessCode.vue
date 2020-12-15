<template>
  <div class="d-flex justify-center mt-12">
    <g-card :lg="600" :md="500">
      <template v-slot:card-header>
        <g-card-header
          class="px-n10"
          :title="$t('user.getAccessCode.title')"
          :description="$t('user.getAccessCode.description')"
        />
      </template>

      <template v-slot:card-content>
        <form-input class="mt-6" :title="$t('common.email.label')" />
        <v-text-field
          v-model="email"
          :rules="[rules.required(email), rules.email(email)]"
          outlined
          autofocus
        />
      </template>

      <template v-slot:buttons>
        <div class="d-flex justify-space-between my-6">
          <v-btn @click="$router.go(-1)" color="secondary" tile outlined text large>
            {{ $t('common.back') }}
          </v-btn>
          <g-btn
            type="primary"
            large
            :loading="loading"
            :label="$t('common.confirm')"
            @click="resendConfirmationCode()"
          />
        </div>
      </template>
    </g-card>
  </div>
</template>

<script>
import RulesHelper from 'Helpers/rules';
// import StorageHelper from 'Helpers/storage';
import UserController from 'Controllers/user';

export default {
  name: 'GetAccessCode',
  mounted() {
    this.rules = new RulesHelper(this.$i18n.messages[this.$i18n.locale]);
  },
  data() {
    return {
      email: '',
      rules: {
        required: () => true,
        email: () => true,
      },
      loading: false,
    };
  },
  methods: {
    async resendConfirmationCode() {
      const userController = new UserController();
      this.loading = true;
      try {
        await userController.resendConfirmationEmail(this.email);

        this.$toast.success(this.$t('signup.resendConfirmationCode.success'));

        this.loading = false;
      } catch (e) {
        this.loading = false;
        if (e.response.status === 404) {
          this.$toast.error(this.$t('toast.error.userNotFound'));
        } else if (e.response.status === 409) {
          this.$toast.info(this.$t('toast.info.userAlreadyConfirmed'));
          this.$router.push({
            name: 'User Login',
            params: {
              email: this.email,
            },
          })
        } else {
          this.$toast.error(this.$t('signup.resendConfirmationCode.error'));
        }
      }
    },
  },
};
</script>

<style></style>
