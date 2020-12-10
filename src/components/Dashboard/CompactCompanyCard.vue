<template>
  <div>
    <v-card class="pa-12 bs-primary" color="bg">
      <div class="d-flex justify-space-between flex-column color-secondary">
        <p class="overline">{{ $t('company.dashboard.yourCompany.title') }}</p>
        <h3 class="mb-5 mt-n2 text-capitalize">{{ company.name }}</h3>
        <div class="d-flex">
          <div class="d-flex align-center">
            <h5 class="h5-bold color-primary mr-2">
              {{ company.currentAds || 16 }}
            </h5>
            <bdy-1 color="secondary">
              {{ $t('company.dashboard.yourCompany.currentAds') }}
            </bdy-1>
          </div>
        </div>
      </div>
    </v-card>

    <h6 class="color-secondary mt-8 mb-4">{{ $t('company.dashboard.yourCompany.yourReports') }}</h6>
    <v-card color="bg" outlined style="border-color: #1a193c !important" class="pa-6">
      <div class="d-flex justify-space-between">
        <div>
          <h6 class="font-weight-regular">{{ job.title }}</h6>
          <sub-2 class="font-weight-regular">{{ getPostedInfo() }}</sub-2>
        </div>

        <div class="color-secondary">
          <g-btn :label="$t('common.view')" color="secondary" :icon="'fas fa-angle-right'" text />
        </div>
      </div>
    </v-card>

    <div class="mt-12">
      <PlanCard
        :border="'border-color: #FF9200 !important'"
        :title="$t('company.report.unlockReport')"
        :texts="$t('report.pricing')"
        :label="$t('company.report.paymentProceed')"
        :to="'/jobs'"
        :margin="'mt-10'"
        priceTitle
        class="my-3 mx-0 mx-md-2"
      />
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import PlanCard from 'Components/Dashboard/PlanCard';

export default {
  name: 'DashboardCompanyCard',
  components: {
    PlanCard,
  },
  props: {
    job: Object,
    company: Object,
    jobsPosted: [ Number, String ],
  },
  methods: {
    formatDate(date) {
      return moment(date)
        .startOf('hour')
        .fromNow();
    },
    getPostedInfo() {
      return `${this.$t('company.report.created')} ${this.formatDate(this.job.createdAt)}`;
    },
  },
};
</script>

<style></style>
