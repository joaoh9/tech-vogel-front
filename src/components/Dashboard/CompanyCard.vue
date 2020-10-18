<template>
  <g-card minWidth="0" maxWidth="100vw">
    <template v-slot:card-content>
      <div class="d-flex justify-space-between">
        <div>
          <p class="overline mt-2">{{ $t('company.dashboard.yourCompany.title') }}</p>
          <h3 class="mb-5 mt-n2 h3-bold text-capitalize">{{ company.name }}</h3>
          <div class="d-flex">
            <div class="d-flex align-center mr-6">
              <h5 class="align-self-center h5-bold color-primary mr-2">
                {{ company.currentAds || 6 }}
              </h5>
              <span>
                <!-- TODO: internacionalização de textos -->
                Current Jobs Posted
                <!-- {{ $t('company.dashboard.yourCompany.currentAds') }} -->
              </span>
            </div>
            <div class="d-flex align-center">
              <h5 class="align-self-center h5-bold color-primary mr-2">
                {{ company.remainingCredits || 16 }}
              </h5>
              <span>
                Remaining Tokens
                <!-- {{ $t('company.dashboard.yourCompany.remainingCredits') }} -->
              </span>
            </div>
          </div>
        </div>
        <v-avatar class="align-self-center mr-n12" size="90" color="cinza-lighten-3">
          <v-img v-if="company.profilePhoto" :src="company.profilePhoto" />
          <v-icon v-else>
            fa-user
          </v-icon>
        </v-avatar>
      </div>
    </template>
  </g-card>
</template>

<script>
export default {
  name: 'DashboardCompanyCard',
  props: {
    company: Object,
  },
};
</script>

<style></style>
