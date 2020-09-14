<template>
  <CardTemplate :title="$t('CV.register.start.title')">
    <template v-slot:content="{}">
      <div class="d-flex justify-center ma-12" style="flex-direction: column">
        <v-btn max-width="400" class="align-self-center mt-4" color="primary" large disabled>
          {{ $t('CV.register.start.linkLinkedIn.title') }}
        </v-btn>
        <v-btn max-width="400" class="align-self-center mt-4" color="primary" large disabled>
          {{ $t('CV.register.start.linkGithub.title') }}
        </v-btn>
        <v-btn
          max-width="400"
          class="align-self-center mt-4"
          color="primary"
          large
          v-on:click="$emit('manual-register', 'manual-register')"
        >
          {{ $t('CV.register.start.registerManually.title') }}
        </v-btn>
      </div>
    </template>
  </CardTemplate>
</template>

<script>
import CardTemplate from 'Components/Interface/CardTemplate';

export default {
  name: 'Start',
  components: {
    CardTemplate,
  },
};
</script>

<style></style>
