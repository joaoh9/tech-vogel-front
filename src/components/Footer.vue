<template>
  <div>
    <v-footer class="px-0 mt-12 pt-0">
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
          <v-col>
            <FooterLinks :title="$t('common.jobs')" :items="$t('footer.jobsInfo')" />
          </v-col>
          <v-col>
            <FooterLinks :title="$t('common.aboutUs')" :items="$t('footer.aboutUsInfo')" />
          </v-col>
          <v-col>
            <FooterLinks
              :title="$t('footer.socialMedia.title')"
              :items="$t('footer.socialMedia.links')"
            />
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
          class="text--secondary align-self-center caption-1 mb-0 ma-4"
          v-for="(fi, i) in footerInfo"
          :key="i"
        >
          {{ fi }}
        </p>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
import Logo from 'Assets/logo-redondo-amarelo-grad.png';
import FooterLinks from 'Components/Footer/Links';

export default {
  name: 'Footer',
  components: {
    FooterLinks,
  },
  data() {
    return {
      logo: Logo,
      footerInfo: [
        this.$t('common.copywright'),
        this.$t('common.termsOfService'),
        this.$t('common.privacyPolicy'),
        this.$t('common.cnpj') + ': ' + this.$t('common.cnpjNumber'),
        this.$t('common.phone'),
        this.$t('common.contactEmail'),
      ],
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
