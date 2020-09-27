<template>
  <div>
    <div class="d-flex justify-center mt-12 mx-12" style="flex-direction: column">
      <v-btn
        max-width="400"
        class="align-self-center mt-4 px-12"
        color="primary"
        large
        tile
        block
        elevation="0"
        v-on:click="$emit('manual-register', 'manual-register')"
      >
        {{ $t('CV.register.start.registerManually.title') }}
      </v-btn>
      <!-- <p class="align-self-center mt-4"> Comming soon: </p> -->
      <v-btn max-width="400" class="px-12 align-self-center mt-4" color="primary" large disabled>
        {{ $t('CV.register.start.linkLinkedIn.title') }}
      </v-btn>
      <v-btn max-width="400" class="px-12 align-self-center mt-4" color="primary" large disabled>
        {{ $t('CV.register.start.linkGithub.title') }}
      </v-btn>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Start',
};
</script>

<style></style>
