<template>
  <div class="d-flex justify-center flex-wrap">
    <g-card-outlined borderColor="#1a193c" style="width: 400px" class="mx-2 my-2">
      <div class="d-flex align-center flex-column">
        <h5 class="h5-bold text-center">{{ $t('questions.reachUs.title') }}</h5>
        <sub-1 class="text-center mt-4">{{ $t('questions.reachUs.description') }}</sub-1>
        <g-btn
          type="outlined"
          class="mt-6"
          color="primary"
          :label="$t('questions.reachUs.buttonText')"
          @click="goToNewWindow($t('questions.reachUs.click'))"
        />
      </div>
    </g-card-outlined>
    <g-card-outlined borderColor="#FF9200" style="width: 400px" class="mx-2 my-2">
      <div class="d-flex align-center flex-column">
        <h5 class="h5-bold text-center">{{ $t('questions.call.title') }}</h5>
        <sub-1 class="text-center mt-4">{{ $t('questions.call.description') }}</sub-1>
        <g-btn
          type="outlined"
          class="mt-6"
          color="secondary"
          :label="$t('questions.call.buttonText')"
          @click="goToNewWindow($t('questions.call.click'))"
        />
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
