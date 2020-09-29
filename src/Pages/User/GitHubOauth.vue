<template>
  <div>
    <div class="d-flex justify-center mt-4 mt-md-12">
      <g-card>
        <template v-slot:card-header>
          <g-card-header title="Confirmar autorização do GitHub?" />
        </template>
        <template v-slot:card-content>
          <div class="text-center">
            <v-row justify="center">
              <g-btn class="my-4" type="primary" :label="$t('Common.confirm')" @click="confirm()" />
            </v-row>
            <v-row justify="center">
              <g-btn
                class="my-4"
                type="text"
                color="dark"
                :label="$t('Signup.registrationConfirmed.description')"
              />
            </v-row>
          </div>
        </template>
      </g-card>
    </div>
    <div class="d-flex justify-center">
      <g-alert
        :succesMessage="$t('OAuth.github.accessSucces')"
        :errorMessage="$t('OAuth.github.accessError')"
        v-on:success="s => (requestSuccess = s)"
        v-on:error="s => (requestError = s)"
        :successVar="requestSuccess"
        :errorVar="requestError"
      />
    </div>
  </div>
</template>

<script>
import OAuthController from 'Controllers/OAuth';

export default {
  name: 'GitHubOAuth',
  data() {
    return {
      requestError: false,
      requestSuccess: false,
    };
  },
  methods: {
    async confirm() {
      const oAuthController = new OAuthController();

      try {
        await oAuthController.confirmAcces(this.$route.query.code);
        this.requestSuccess = true;
      } catch (e) {
        console.error(e)
        this.requestError = true;
      }
    },
  },
};
</script>

<style></style>
