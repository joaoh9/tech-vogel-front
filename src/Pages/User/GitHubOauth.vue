<template>
  <div class="d-flex justify-center mt-4 mt-md-12">
    <g-card>
      <template v-slot:card-header>
        <g-card-header title="Confirmar autorização do GitHub?" />
      </template>
      <template v-slot:card-content>
        <div class="text-center">
          <v-row justify="center">
            <g-btn class="my-4" type="primary" :label="$t('common.confirm')" @click="confirm()" />
          </v-row>
          <v-row justify="center">
            <g-btn
              class="my-4"
              type="text"
              color="dark"
              :label="$t('signup.registrationConfirmed.description')"
            />
          </v-row>
        </div>
      </template>
    </g-card>
  </div>
</template>

<script>
import OAuthController from 'Controllers/OAuth';

export default {
  name: 'GitHubOAuth',
  methods: {
    async confirm() {
      const oAuthController = new OAuthController();

      try {
        await oAuthController.confirmAcces(this.$route.query.code);
        this.$toast.success(this.$t('oAuth.github.accessSucces'));
      } catch (e) {
        this.$toast.error(this.$t('oAuth.github.accessError'));
      }
    },
  },
};
</script>

<style></style>
