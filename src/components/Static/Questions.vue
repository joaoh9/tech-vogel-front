<template>
  <div class="d-flex justify-center flex-wrap">
    <v-card
      class="pa-8 mx-2 my-2"
      color="bg"
      outlined
      style="border-color: #1a193c !important"
      width="400"
    >
      <div class="d-flex align-center flex-column">
        <h5 class="h5-bold">{{ $t('questions.reachUs.title') }}</h5>
        <sub-1 class="text-center mt-4">{{ $t('questions.reachUs.description') }}</sub-1>
        <g-btn
          type="outlined"
          class="mt-6"
          color="primary"
          :label="$t('questions.reachUs.buttonText')"
          @click="goToNewWindow($t('questions.reachUs.click'))"
        />
      </div>
    </v-card>
    <v-card
      class="pa-8 mx-2 my-2"
      color="bg"
      outlined
      style="border-color: #1a193c !important"
      width="400"
    >
      <div class="d-flex align-center flex-column">
        <h5 class="h5-bold">{{ $t('questions.call.title') }}</h5>
        <sub-1 class="text-center mt-4">{{ $t('questions.call.description') }}</sub-1>
        <g-btn
          type="outlined"
          class="mt-6"
          color="primary"
          :label="$t('questions.call.buttonText')"
          @click="goToNewWindow($t('questions.call.click'))"
        />
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Questions',
  methods: {
    goToNewWindow(link) {
      window.open(link, '_blank');
    },
  },
};
</script>

<style></style>
