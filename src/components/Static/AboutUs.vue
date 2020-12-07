<template>
  <div class="d-flex align-center flex-column mx-md-16 mx-2" id="aboutUs">
    <v-row class="ma-md-6 ma-2 mt-12" align="center" justify="center">
      <v-col cols="12" md="6">
        <div class="d-flex justify-center align-center">
          <v-img max-width="335" :src="logoEscritaPreto" />
        </div>
      </v-col>
      <v-col cols="12" md="6" class="px-4 px-md-10">
        <div class="d-flex justify-center align-center">
          <h3 class="h3 text-capitalize text-center color-secondary mb-8">
            {{ $t('common.aboutUs') }}
          </h3>
        </div>
        <bdy-1 class="break-line text-justify">{{ $t('aboutUs.text1') }}</bdy-1>
        <bdy-1 class="mt-4 break-line-another-text text-justify">{{ $t('aboutUs.text2') }}</bdy-1>
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
