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
import OAuthController from 'Controllers/githubOauth';

import Storage from 'Helpers/storage';

export default {
  name: 'GitHubOAuth',
  methods: {
    async confirm() {
      const oAuthController = new OAuthController();

      try {
        const hasAccessToken = Storage.loadState('access_token');

        const data = await oAuthController.confirmAccess(this.$route.query.code);

        Storage.saveState('access_token', data.accessToken);
        Storage.saveState('github_username', data.username);
        this.$toast.success(this.$t('oAuth.github.accessSuccess'));

        if (hasAccessToken) {
          this.$toast.success('You can close this tab and retry your request on the other page');
          return;
        }

        this.$router.push({
          name: 'User Signup',
          params: {
            _email: data.email,
            _username: data.username,
            _name: data.name,
          },
        });
      } catch (e) {
        this.$toast.error(this.$t('oAuth.github.accessError'));
        console.log(e);
      }
    },
  },
};
</script>

<style></style>
