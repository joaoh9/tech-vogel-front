<template>
  <g-card-outlined>
    <div class="d-flex align-center justify-center">
      <div class="d-flex align-center flex-column">
        <sub-2 color="secondary" class="d-flex justify-center">
          {{ $t('company.planCard.token', { quantity: 1 }) }}
        </sub-2>
        <div class="d-flex">
          <sub-1 class="mr-2" color="primary">{{ $t('company.planCard.currency') }}</sub-1>
          <h1 class="h2-bold color-primary mt-2">
            {{ $t('company.planCard.price') }}
          </h1>
          <span class="d-flex align-end color-primary">{{ $t('company.planCard.cents') }}</span>
        </div>
        <bdy-2 class="mt-2">
          <sub-2 color="secondary mr-1">
            {{ $t('company.planCard.installments', { quantity: 3 }) }}
          </sub-2>
          {{ $t('company.planCard.paymentMethod') }}
        </bdy-2>
        <div class="mt-10">
          <IconText
            v-for="(item, index) in getIconText()"
            :key="index"
            :icon="item.icon"
            :text="item.text"
            type="bdy-2"
            class="color-cinza-lighten-1 mb-4"
          />
        </div>
        <g-btn
          class="mt-6"
          style="height: 56px; width: 270px;"
          type="primary"
          :label="$t('company.planCard.getStarted')"
          to="/"
        />
      </div>
    </div>
  </g-card-outlined>
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
  },
};
</script>


<style>
.theme--light.v-sheet--outlined {
  border: 1px solid #1a193c !important;
}
.v-application .bg {
  border-color: #1a193c !important;
}
.rounded-20 {
  border-radius: 20px !important;
}
</style>
