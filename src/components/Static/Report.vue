<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <div class="mt-4">
          <h3 class="color-secondary mb-4">{{ $t('report.title') }}</h3>
          <h5 class="color-black">
            {{ $t('report.subtitle') }}
          </h5>
          <v-card class="pa-6 mt-12 d-flex align-center justify-space-between">
            <h6 class="color-primary mb-0">{{ $t('report.card') }}</h6>
            <v-icon color="primary">mdi-arrow-down</v-icon>
          </v-card>
          <div v-for="(text, index) in getReportText()" :key="index">
            <bdy-1 class="mt-12" color="dark">
              {{ text.description }}
            </bdy-1>
          </div>
        </div>
      </v-col>
      <v-col cols="12" md="6">
          <v-img :src="img" contain height="500" class="mt-16" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Report from '../../assets/report.svg';
export default {
  name: 'Report',
  data() {
    return {
      img: Report,
    };
  },
  methods: {
    getReportText() {
      return [
        { description: this.$t('report.explanation.1') },
        { description: this.$t('report.explanation.2') },
        { description: this.$t('report.explanation.3') },
      ];
    },
  },
};
</script>

<style scoped>
</style>
