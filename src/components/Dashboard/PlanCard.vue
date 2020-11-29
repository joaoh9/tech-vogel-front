<template>
  <v-card width="750" height="420">
    <div class="d-flex align-center justify-center">
      <div class="d-flex align-center flex-column">
        <sub-2 color="secondary" class="d-flex justify-center mt-10">{{ $t('company.planCard.token', { quantity: 1 }) }}</sub-2>
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
        <div class="mt-6">
          <IconText
            v-for="(item, index) in getIconText()"
            :key="index"
            :icon="item.icon"
            :text="item.text"
            type="bdy-2"
            class="color-cinza-lighten-1"
          />
        </div>
          <g-btn
            class="my-10"
            style="height: 56px; width: 270px;"
            type="primary"
            :label="$t('company.planCard.getStarted')"
            to="/"
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
        { icon: 'mdi-check', text: this.$t('company.planCard.planDays', { days: 15 }) },
        { icon: 'mdi-check', text: this.$t('company.planCard.planJobAd', { quantity: 1 }) },
        { icon: 'mdi-check', text: this.$t('company.planCard.planApplicants', { quantity: 3 }) },
      ];
    },
  },
};
</script>

<style scoped>
.v-card.v-sheet.theme--light {
  border: 2.5px solid #1a193c;
}
</style>
