<template>
  <v-card
    :class="!$vuetify.breakpoint.smAndUp ? 'pa-4 rounded-20' : 'pa-8 rounded-20'"
    color="bg"
    outlined
    style="border-color: #1a193c !important"
    :max-width="!$vuetify.breakpoint.smAndUp ? '300' : '350'"
  >
    <div class="d-flex align-center justify-center">
      <div class="d-flex align-center flex-column">
        <div style="height: 150px">
          <h5 class="text-center color-secondary d-flex justify-center">
            {{ $t('company.planCard.token', { quantity: 1 }) }}
          </h5>
          <div class="d-flex">
            <h5 class="text-center mr-2 color-primary">{{ $t('company.planCard.currency') }}</h5>
            <h1 class="text-center h2-bold color-primary mt-2">
              {{ $t('company.planCard.price') }}
            </h1>
            <bdy-1 class="d-flex align-end" color="primary">
              {{ $t('company.planCard.cents') }}
            </bdy-1>
          </div>
          <sub-1>{{ $t('howItWorks.forEachReport') }}</sub-1>
          <bdy-2 class="mt-2">
            <sub-2 color="secondary mr-1">
              <!-- TODO: internacionalização de moeda -->
              {{ $t('howItWorks.BRL.installments').toString() + ' x R$ ' + eachInstallment() }}
            </sub-2>
            {{ $t('company.planCard.paymentMethod') }}
          </bdy-2>
        </div>
        <div class="mt-10 d-flex flex-column justify-center" style="height: 290px">
          <IconText
            v-for="(item, index) in $t('howItWorks.pricing')"
            :key="index"
            icon="mdi-check-circle"
            :text="item.text"
            type="bdy-2"
            class="color-cinza-lighten-1 mb-4"
          />
        </div>
        <g-btn
          class="mt-6"
          style="height: 56px; width: 270px;"
          type="primary"
          :label="$t('home.postForFree')"
          to="/signup"
        />
      </div>
    </div>
  </v-card>
</template>

<script>
import IconText from 'Components/Interface/IconText';

export default {
  name: 'PlanCard',
  components: {
    IconText,
  },
  methods: {
    getIconText() {
      return [
        { icon: 'mdi-check-circle', text: this.$t('company.planCard.planDays', { days: 15 }) },
        { icon: 'mdi-check-circle', text: this.$t('company.planCard.planJobAd', { quantity: 1 }) },
        {
          icon: 'mdi-check-circle',
          text: this.$t('company.planCard.planApplicants', { quantity: 3 }),
        },
      ];
    },
    eachInstallment() {
      return (
        parseFloat(this.$t('howItWorks.BRL.fullPrice')) /
        parseFloat(this.$t('howItWorks.BRL.installments'))
      )
        .toFixed(2)
        .toString();
    },
  },
};
</script>

<style>
.rounded-20 {
  border-radius: 20px !important;
}
</style>
