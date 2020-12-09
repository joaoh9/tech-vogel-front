<template>
  <div class="bg-color-bg">
    <v-footer :class="`px-0 mt-12 pt-0`">
      <v-card
        width="100%"
        color="secondary"
        class="d-flex align-center py-6"
        flat
        style="border-radius: 0px !important"
      >
        <v-row align="start" justify="center" class="mx-1 mt-2">
          <v-col v-if="$vuetify.breakpoint.smAndUp" cols="2" class="align-self-start">
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
              newWindow
              :title="$t('footer.socialMedia.title')"
              :items="$t('footer.socialMedia.links')"
            />
          </v-col>
        </v-row>
      </v-card>
      <v-card
        width="100%"
        flat
        color="cinza-lighten-4"
        class="d-flex justify-space-around flex-wrap py-4"
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
import Logo from 'Assets/logo-redondo-amarelo-grad.svg';
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
        this.$t('common.copyright'),
        this.$t('common.cnpj') + ': ' + this.$t('common.cnpjNumber'),
        this.$t('common.phone'),
        this.$t('common.contactEmail'),
      ],
    };
  },
};

</script>

<style></style>
