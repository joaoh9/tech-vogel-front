<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <div class="mt-4">
          <h3 class="color-secondary mb-4">{{ $t('report.title') }}</h3>
          <h5 class="color-black">
            {{ $t('report.subtitle') }}
          </h5>
          <!-- <v-card class="pa-6 mt-12 d-flex align-center justify-space-between bs-primary">
            <h6 class="color-primary mb-0">{{ $t('report.card') }}</h6>
            <v-icon color="primary">mdi-arrow-down</v-icon>
          </v-card>
          -->
          <v-expansion-panels class="mt-6">
            <v-expansion-panel class="boder-primary bs-none" style="background-color: #fcfcff;">
              <v-expansion-panel-header>
                <h6 class="color-primary mb-0">{{ $t('report.card') }}</h6>
              </v-expansion-panel-header>
              <v-expansion-panel-content
                v-for="(text, index) in getReportText()"
                :key="index"
                class="my-3"
              >
                <bdy-1 color="dark">
                  {{ text.description }}
                </bdy-1>
                <!-- </div> -->
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <v-img :src="img" contain height="300" class="mt-16" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Report from 'Assets/report.svg';

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

<style scoped></style>
