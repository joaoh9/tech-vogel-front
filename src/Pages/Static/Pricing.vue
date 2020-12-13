<template>
  <div class="d-flex mt-14 align-center flex-column flex-wrap mb-10">
    <h2 class="h2-bold color-secondary mt-16 text-center">{{ $t('common.ourPricing') }}</h2>
    <h5 class="h5 mt-4 color-cinza-lighten-1 text-center">
      {{ $t('common.startPostingJobsForFreeToday') }}
    </h5>
    <g-btn type="primary" class="mt-6" :label="$t('common.startForFree')" to="/signup" />
    <div class="d-flex mt-8 justify-center flex-wrap mb-10">
      <CompanyPlan class="my-3 mx-0 mx-sm-2" />
      <DevsPlan class="my-3 mx-0 mx-sm-2" />
    </div>
  </div>
</template>

<script>
import CompanyPlan from 'Components/Dashboard/CompanyPlan';
import DevsPlan from 'Components/Dashboard/DevsPlan';
export default {
  name: 'Pricing',
  mounted() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
  },
  components: {
    CompanyPlan,
    DevsPlan,
  },
};
</script>

<style></style>
