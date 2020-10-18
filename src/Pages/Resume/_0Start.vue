<template>
  <div>
    <div class="d-flex justify-center align-center mt-12 mx-12 flex-column" >
      <g-btn
        class="mt-4"
        type="primary"
        :minwidth="300"
        @click="$emit('manual-register', 'manual-register')"
        :label="$t('resume.register.start.registerManually.title')"
      />
      <g-btn
        type="disabled"
        :minwidth="300"
        class="mt-4"
        disabled
        :label="$t('resume.register.start.linkGithub.title')"
        :href="`https://github.com/login/oauth/authorize?client_id=${getClientId()}`"
      />
      <g-btn
        type="disabled"
        :minwidth="300"
        class="mt-4"
        :label="$t('resume.register.start.linkLinkedIn.title')"
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
