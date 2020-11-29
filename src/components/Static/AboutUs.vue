<template>
  <div class="d-flex align-center flex-column" id="aboutUs">
    <h3 class="h3-bold text-capitalize color-secondary">{{ $t('about') + ' ' + $t('tv') }}</h3>
    <v-row class="ma-6 mt-12">
      <v-col cols="12" md="6">
        <div class="d-flex justify-center">
          <v-img max-width="600" :src="logoEscritaPreto" />
        </div>
      </v-col>
      <v-col cols="12" md="6" class="px-10">
        <bdy-1>{{ $t('aboutUs.text1') }}</bdy-1>
        <bdy-1 class="mt-4">{{ $t('aboutUs.text2') }}</bdy-1>
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

<style></style>
