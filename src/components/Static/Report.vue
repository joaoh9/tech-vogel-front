<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <div class="mt-4">
          <h3 class="color-secondary mb-4">{{ $t('report.title') }}</h3>
          <h5 class="color-black">
            {{ $t('report.subtitle') }}
          </h5>
          <FAQ :items="$t('FAQ.report')" />
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <v-img :src="img" contain height="300" class="mt-16" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import FAQ from 'Components/Static/FAQ';
import Report from 'Assets/report.svg';

export default {
  name: 'Report',
  components: {
    FAQ,
  },
  data() {
    return {
      img: Report,
    };
  },
};

</script>

<style scoped></style>
