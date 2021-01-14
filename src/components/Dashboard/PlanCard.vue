<template>
  <v-card
    :class="!$vuetify.breakpoint.smAndUp ? 'px-12 py-6 rounded-20' : 'pa-8 rounded-20'"
    color="bg"
    outlined
    :style="border"
    :max-width="width"
  >
    <div class="d-flex align-center justify-center">
      <div class="d-flex align-center flex-column">
        <div class="d-flex align-center justify-center flex-column">
          <h5 class="h5-bold text-center color-secondary d-flex justify-center">
            {{ title }}
          </h5>

          <div class="d-flex" v-if="priceTitle">
            <h5 class="text-center mr-2 color-primary">{{ $t('company.planCard.currency') }}</h5>
            <h1 class="text-center h2-bold color-primary mt-2">
              {{ $t('company.planCard.price') }}
            </h1>
            <bdy-1 class="d-flex align-end" color="primary">
              {{ $t('company.planCard.cents') }}
            </bdy-1>
          </div>

          <div v-if="priceTitle">
            <sub-1 class="d-flex justify-center text-lowercase" color="secondary">
              {{ $t('howItWorks.forEachReport') }}
            </sub-1>
            <bdy-2 class="mt-2">
              <sub-2 color="secondary mr-1">
                {{ getInstallments() }}
              </sub-2>
              {{ $t('company.planCard.paymentMethod') }}
            </bdy-2>
          </div>

          <div v-if="devTitle" class="d-flex justify-center text-uppercase">
            <h1 class="text-center h2-bold color-primary mt-2 mb-8">
              {{ header }}
            </h1>
          </div>
        </div>

        <div class="mt-10 mb-16 d-flex flex-column justify-center">
          <div>
            <div v-for="(item, index) in texts" :key="index">
              <capt-1 color="primary" class="mt-10" v-if="item.comingSoon">
                {{ $t('common.comingSoon') }}
              </capt-1>
              <IconText
                :key="index"
                icon="mdi-check-circle"
                :text="item.text"
                type="bdy-1"
                class="color-secondary mb-4"
              />
            </div>
          </div>
        </div>
        <div class="d-flex align-center justify-center">
          <v-btn
            absolute
            bottom="0"
            elevation="0"
            style="height: 56px; width: 270px;"
            color="primary"
            class="font-weight-bold"
            :to="to"
            v-if="to"
          >
            {{ label }}
          </v-btn>
          <v-btn
            absolute
            bottom="0"
            elevation="0"
            style="height: 56px; width: 270px;"
            color="primary"
            class="font-weight-bold"
            @click="$emit('click')"
            v-else
          >
            {{ label }}
          </v-btn>
        </div>
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
  props: {
    border: String,
    title: String,
    header: String,
    label: String,
    to: String,
    texts: Array,
    width: String,
    devTitle: {
      type: Boolean,
      default: false,
    },
    priceTitle: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    eachInstallment() {
      return (+this.$t('howItWorks.BRL.fullPrice') / +this.$t('howItWorks.BRL.installments'))
        .toFixed(2)
        .toString();
    },
    getInstallments() {
      return (
        this.$t('howItWorks.BRL.installments').toString() +
        'x ' +
        this.$n(this.eachInstallment(), 'currency', 'pt-br')
      );
    },
  },
};
</script>

<style></style>
