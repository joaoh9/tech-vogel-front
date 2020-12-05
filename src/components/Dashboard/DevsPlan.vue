<template>
  <v-card
    class="pa-8 rounded-20"
    color="bg"
    outlined
    style="border-color: #FF9200 !important"
    max-width="350"
  >
    <div class="d-flex align-center justify-center">
      <div class="d-flex align-center flex-column">
        <div style="height: 150px">
          <h5 class="color-secondary d-flex justify-center">
            {{ $t('devs.subtitle') }}
          </h5>
          <div class="d-flex">
            <h2 class="h2-bold color-primary mt-2 text-uppercase">
              {{ $t('common.free') }}
            </h2>
          </div>
        </div>
        <div class="mt-10 d-flex flex-column justify-center" style="height: 290px">
          <div v-for="(item, index) in $t('devs.pricing')" :key="index">
            <capt-1 color="primary" class="mt-10" v-if="item.comingSoon">
              {{ $t('common.comingSoon') }}
            </capt-1>
            <IconText
              :key="index"
              icon="mdi-check-circle"
              :text="item.text"
              type="bdy-1"
              class="color-cinza-lighten-1 mb-4"
            />
          </div>
        </div>
        <g-btn
          class="mt-6"
          style="height: 56px; width: 270px;"
          type="primary"
          :label="$t('home.startApplying')"
          to="/jobs"
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
};
</script>

<style>
.theme--light.v-sheet--outlined {
  border: 1px solid #1a193c !important;
}
.rounded-20 {
  border-radius: 20px !important;
}
</style>
