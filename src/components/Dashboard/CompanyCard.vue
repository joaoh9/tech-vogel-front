<template>
  <v-card minWidth="0" class="pa-12 bs-primary" color="bg">
    <div v-if="company" :key="loaded" class="d-flex justify-space-between">
      <div>
        <p class="overline">{{ $t('company.dashboard.yourCompany.title') }}</p>
        <h3 class="mb-5 mt-n2 h3-bold text-capitalize">{{ company.name }}</h3>
        <div class="d-flex">
          <div class="d-flex align-center mr-6">
            <h5 class="align-self-center h5-bold color-primary mr-2">
              {{ jobsPosted }}
            </h5>
            <span>
              {{ $t('company.dashboard.yourCompany.currentJobs') }}
            </span>
          </div>
          <div class="d-flex align-center">
          </div>
        </div>
      </div>
      <v-avatar class="align-self-center" size="90" color="cinza-lighten-3">
        <v-img v-if="company.logo" :src="company.logo" />
      </v-avatar>
    </div>
  </v-card>
</template>

<script>

export default {
  name: 'DashboardCompanyCard',
  props: {
    company: Object,
    jobsPosted: [ Number, String ],
  },
  data() {
    return {
      loaded: false,
    }
  },
};

</script>

<style></style>
