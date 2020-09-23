<template>
  <v-footer class="px-0">
    <v-card
      height="250"
      width="100%"
      color="secondary"
      class="d-flex align-center"
      flat
      style="border-radius: 0px !important"
    >
      <v-row align="start" justify="center" class="mx-1 mt-2">
        <v-col v-if="$vuetify.breakpoint.mdAndUp" cols="2" class="align-self-start">
          <v-img height="75" contain :src="logo" />
        </v-col>
        <v-col :cols="$vuetify.breakpoint.mdAndUp ? 2 : 4">
          <h6 class="color-primary">{{ $t('Common.jobs') }}</h6>
          <p
            @click="$router.push({ path: job.to })"
            v-for="(job, i) in $t('footer.jobsInfo')"
            :key="i"
            class="color-ligth"
          >
            {{ job.text }}
          </p>
        </v-col>
        <v-col :cols="$vuetify.breakpoint.mdAndUp ? 2 : 4">
          <h6 class="color-primary">{{ $t('Common.aboutUs') }}</h6>
          <p
            @click="$router.push({ path: ab.to })"
            v-for="(ab, i) in $t('footer.aboutUsInfo')"
            :key="i"
            class="color-ligth cursor-pointer"
          >
            {{ ab.text }}
          </p>
        </v-col>
        <v-col v-if="$vuetify.breakpoint.mdAndUp" cols="4"> </v-col>
        <v-col :cols="$vuetify.breakpoint.mdAndUp ? 2 : 4">
          <h6 class="color-primary">{{ $t('footer.socialMedia.title') }}</h6>
          <p
            v-for="(sm, i) in $t('footer.socialMedia.links')"
            @click="goToSocialMedia(sm)"
            :key="i"
            class="color-ligth cursor-pointer"
          >
            {{ sm.text }}
          </p>
        </v-col>
      </v-row>
    </v-card>
    <v-card
      height="100"
      width="100%"
      flat
      color="cinza-lighten-4"
      class="d-flex justify-space-around flex-wrap"
      style="border-radius: 0px !important"
    >
      <p
        class="text--secondary align-self-center caption-1 mb-0"
        v-for="(fi, i) in footerInfo"
        :key="i"
      >
        {{ fi }}
      </p>
    </v-card>
  </v-footer>
</template>

<script>
import Logo from 'Assets/logo-redondo-amarelo-grad.png';
export default {
  name: 'Footer',
  data() {
    return {
      logo: Logo,
      footerInfo: {
        teste: [
          this.$t('Common.copywright'),
          this.$t('Common.termsOfService'),
          this.$t('Common.privacyPolicy'),
          this.$t('Common.cnpj') + ': ' + this.$t('Common.cnpjNumber'),
          this.$t('Common.phone'),
          this.$t('Common.contactEmail'),
        ],
      },
    };
  },
  methods: {
    goToSocialMedia(sm) {
      window.open(sm.link, '_blank');
    },
  },
};
</script>

<style></style>
