<template>
  <div class="d-flex justify-center flex-wrap">
    <g-card-outlined borderColor="#1a193c" style="width: 400px" class="mx-2 my-2">
      <div class="d-flex align-center flex-column">
        <h5 class="h5-bold text-center mt-n4">{{ $t('questions.reachUs.title') }}</h5>
        <sub-1 class="text-center my-4">{{ $t('questions.reachUs.description') }}</sub-1>
        <v-btn
          absolute
          :bottom="true"
          color="primary"
          outlined
          large
          class="font-weight-bold"
          @click="goToNewWindow($t('questions.reachUs.click'))"
        >
          {{ $t('questions.reachUs.buttonText') }}
        </v-btn>
      </div>
    </g-card-outlined>
    <g-card-outlined borderColor="#FF9200" style="width: 400px" class="mx-2 my-2">
      <div class="d-flex align-center flex-column">
        <h5 class="h5-bold text-center mt-n4">{{ $t('questions.call.title') }}</h5>
        <sub-1 class="text-center mt-4 mb-8">{{ $t('questions.call.description') }}</sub-1>
        <v-btn
          absolute
          :bottom="true"
          color="secondary"
          outlined
          large
          class="font-weight-bold"
          @click="goToNewWindow($t('questions.call.click'))"
        >
          {{ $t('questions.call.buttonText') }}
        </v-btn>
      </div>
    </g-card-outlined>
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
