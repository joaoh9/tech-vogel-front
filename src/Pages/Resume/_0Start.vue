<template>
  <div>
    <div class="d-flex justify-center align-center mt-12 mx-12" style="flex-direction: column">
      <g-btn
        class="mt-4"
        type="primary"
        :minwidth="300"
        v-on:click="$emit('manual-register', 'manual-register')"
        :label="$t('CV.register.start.registerManually.title')"
      />
      <g-btn
        type="disabled"
        :minwidth="300"
        class="mt-4"
        disabled
        :label="$t('CV.register.start.linkGithub.title')"
        :href="`https://github.com/login/oauth/authorize?client_id=${getClientId()}`"
      />
      <g-btn
        type="disabled"
        :minwidth="300"
        class="mt-4"
        :label="$t('CV.register.start.linkLinkedIn.title')"
      />
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
