<template>
  <v-card minWidth="0" class="pa-12 bs-primary" color="bg">
    <div class="d-flex justify-space-between">
      <div>
        <p class="overline">{{ $t('company.dashboard.yourCompany.title') }}</p>
        <h3 class="mb-5 mt-n2 h3-bold text-capitalize">{{ company.name }}</h3>
        <div class="d-flex">
          <div class="d-flex align-center">
            <h5 class="align-self-center h5-bold color-primary mr-2">
              {{ company.remainingCredits }}
            </h5>
            <span>
              {{ $t('company.dashboard.yourCompany.remainingCredits') }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'CompactCompanyCard',
  props: {
    company: Object,
    jobsPosted: [ Number, String ],
  },
};
</script>

<style></style>
