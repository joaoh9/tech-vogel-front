<template>
  <div>
    <feedback />
    <v-footer class="px-0 mt-0 pt-0">
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
          <FooterLinks :title="$t('Common.jobs')" :items="$t('footer.jobsInfo')" />
          <FooterLinks :title="$t('Common.aboutUs')" :items="$t('footer.aboutUsInfo')" />
          <FooterLinks
            :title="$t('footer.socialMedia.title')"
            :items="$t('footer.socialMedia.links')"
          />
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
import Feedback from 'Components/Dialogs/Feedback';
import FooterLinks from 'Components/Footer/Links';

export default {
  name: 'Footer',
  components: {
    Feedback,
    FooterLinks,
  },
  data() {
    return {
      logo: Logo,
      footerInfo: [
        this.$t('Common.copywright'),
        this.$t('Common.termsOfService'),
        this.$t('Common.privacyPolicy'),
        this.$t('Common.cnpj') + ': ' + this.$t('Common.cnpjNumber'),
        this.$t('Common.phone'),
        this.$t('Common.contactEmail'),
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
