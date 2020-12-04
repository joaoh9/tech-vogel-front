<template>
  <div class="d-flex align-center flex-column mx-md-16 mx-4" id="aboutUs">
    <v-row class="ma-6 mt-12" align="center" justify="center">
      <v-col cols="12" md="6">
        <div class="d-flex justify-end mr-12">
          <v-img max-width="335" :src="logoEscritaPreto" />
        </div>
      </v-col>
      <v-col cols="12" md="6" class="px-10">
        <h3 class="h3 text-capitalize color-secondary mb-8">{{ $t('about') + ' ' + $t('tv') }}</h3>
        <bdy-1 class="break-line">{{ $t('aboutUs.text1') }}</bdy-1>
        <bdy-1 class="mt-4 break-line-another-text">{{ $t('aboutUs.text2') }}</bdy-1>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import LogoEscritaPreto from 'Assets/logo+escrita-preto.svg';

export default {
  name: 'AboutUs',
  data() {
    return {
      logoEscritaPreto: LogoEscritaPreto,
    };
  },
};
</script>

<style scoped>
.break-line {
  max-width: 550px;
}

.break-line-another-text {
  max-width: 950px;
}
</style>
