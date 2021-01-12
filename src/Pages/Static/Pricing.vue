<template>
  <div class="d-flex align-center flex-column flex-wrap mb-10">
    <h2 class="h2-bold color-secondary mt-10 text-center">{{ $t('common.ourPricing') }}</h2>
    <h5 class="h5 mt-4 color-cinza-lighten-1 text-center">
      {{ $t('common.startPostingJobsForFreeToday') }}
    </h5>
    <g-btn style="height: 56px;" type="primary" class="mt-6" :label="$t('common.startForFree')" to="/signup" />
    <div class="d-flex mt-8 justify-center flex-wrap mb-10">
      <PlanCard
        :width="!$vuetify.breakpoint.smAndUp ? '300' : '350'"
        :border="'border-color: #1a193c !important'"
        :title="$t('company.planCard.forCompanies')"
        :texts="$t('howItWorks.pricing')"
        :label="$t('home.postForFree')"
        :to="'/signup'"
        priceTitle
        :class="$vuetify.breakpoint.xsOnly ? 'mb-8' : 'ma-4'"
      />
      <PlanCard
        :width="!$vuetify.breakpoint.smAndUp ? '300' : '350'"
        :border="'border-color: #FF9200 !important'"
        :title="$t('devs.subtitle')"
        :header="$t('common.free')"
        :texts="$t('devs.pricing')"
        :label="$t('home.startApplying')"
        :to="'/jobs'"
        devTitle
        :class="$vuetify.breakpoint.xsOnly ? 'mb-8' : 'ma-4'"
      />
    </div>
  </div>
</template>

<script>
import PlanCard from 'Components/Dashboard/PlanCard';

export default {
  name: 'Pricing',
  mounted() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
  },
  components: {
    PlanCard,
  },
};
</script>

<style></style>
