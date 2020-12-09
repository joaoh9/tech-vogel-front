<template>
  <v-container class="d-flex align-center flex-column">
    <h4 class="color-secondary my-10">{{ $t('howItWorks.forCompanies') }}</h4>
    <v-row align="center" class="mt-4" justify="center">
      <v-col cols="12" md="5">
        <div class="d-flex align-center flex-column mb-12">
          <v-img :src="HowItWorks" :max-width="$vuetify.breakpoint.smAndUp ? 600 : 300" />
          <HelpCard
            :title="$t('home.helpCard.howItWorks.title')"
            :description="$t('home.helpCard.howItWorks.description')"
            :howDoesWork="$t('home.helpCard.howItWorks.howDoesWork')"
            :modalText="$t('home.helpCard.howItWorks.modalText')"
            :btnText="$t('home.helpCard.howItWorks.btnText')"
            style="background: linear-gradient(231.9deg, #264981 0%, #29245D 71.67%);"
          />
        </div>
      </v-col>
      <v-col cols="0" md="1" />
      <v-col cols="12" md="6" :class="$vuetify.breakpoint.smAndUp ? 'mt-n16' : 'mt-0'">
        <NumberedSteps :steps="getSteps()" titleColor="secondary" textColor="dark" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import HowItWorks from 'Assets/how-it-works.svg';
import HelpCard from 'Components/Dashboard/HelpCard';
import NumberedSteps from './NumberedSteps';

export default {
  name: 'HowItWorks',
  components: {
    HelpCard,
    NumberedSteps,
  },
  mounted() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
  },
  data() {
    return {
      HowItWorks,
    };
  },
  methods: {
    getSteps() {
      return this.$t('howItWorks.steps');
    },
    getMinWidth() {
      return window.innerWidth;
    },
  },
};
</script>

<style scoped>
.circle {
  border: 1px solid #1a193c;
  color: #1a193c;
}
</style>
