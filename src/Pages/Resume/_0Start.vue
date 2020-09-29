<template>
  <div>
    <div class="d-flex justify-center align-center mt-12 mx-12" style="flex-direction: column">
      <g-btn
        class="mt-4 px-12"
        type="primary"
        max-width="400"
        block
        v-on:click="$emit('manual-register', 'manual-register')"
        :label="$t('CV.register.start.registerManually.title')"
      />
      <g-btn
        type="primary"
        class="px-12 mt-4"
        block
        disabled
        :label="$t('CV.register.start.linkGithub.title')"
        :href="`https://github.com/login/oauth/authorize?client_id=${getClientId()}`"
      />
      <v-btn class="px-12 mt-4" color="primary" block large disabled max-width="400">
        {{ $t('CV.register.start.linkLinkedIn.title') }}
      </v-btn>
    </div>
    <slot />
  </div>
</template>

<script>
import config from '@config';

export default {
  name: 'Start',
  methods: {
    getClientId() {
      return config.client_id;
    },
  },
};
</script>

<style></style>
