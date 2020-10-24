<template>
  <div class="d-flex align-center flex-column">
    <h4 class="h4-bold">{{ $t('user.applications.title') }}</h4>
    <v-img class="mt-6" :src="howItWorks2" max-height="400" />
    <h6 class="mt-6"> {{ $t('user.applications.noJobsApplied.title') }}</h6>
    <sub-1 class="mt-6 text-center"> {{ $t('user.applications.noJobsApplied.text1') }} </sub-1>
    <sub-1 class="mt-6"> {{ $t('user.applications.noJobsApplied.text2') }} </sub-1>
  </div>
</template>

<script>
import HowItWorks2 from 'Assets/how-it-works-2.svg';

export default {
  name: 'NoJobsApplied',
  data() {
    return {
      howItWorks2: HowItWorks2,
    };
  },
};
</script>

<style></style>
