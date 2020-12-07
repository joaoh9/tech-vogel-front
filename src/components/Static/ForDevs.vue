<template>
  <v-container class="d-flex align-center flex-column">
    <h4 class="color-secondary my-10">{{ $t('devs.subtitle') }}</h4>
    <v-row align="center" class="mt-4" justify="center">
      <v-col cols="12" md="6" :class="$vuetify.breakpoint.mdAndUp ? 'mt-n16' : 'mt-0'">
        <NumberedSteps :steps="getSteps()" titleColor="secondary" textColor="dark" />
      </v-col>
      <v-col cols="0" md="1" />
      <v-col cols="12" md="5">
        <div class="d-flex align-center flex-column">
          <v-img :src="devs" :max-width="$vuetify.breakpoint.mdAndUp ? 600 : 300" />
          <HelpCard
            :title="$t('home.helpCard.whatsVogel.title')"
            :description="$t('home.helpCard.whatsVogel.description')"
            :howDoesWork="$t('home.helpCard.whatsVogel.vogelsLimited')"
            :modalText="$t('home.helpCard.whatsVogel.modalText')"
            :btnText="$t('home.helpCard.whatsVogel.btnText')"
            style="background: linear-gradient(0deg, rgba(255, 146, 0, 0.7), rgba(255, 146, 0, 0.7)), linear-gradient(112.55deg, #FFD500 0%, rgba(255, 213, 0, 0.5) 72.92%), #FF9200;"
          />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import devs from 'Assets/devs.svg';
import HelpCard from 'Components/Dashboard/HelpCard';
import NumberedSteps from './NumberedSteps';

export default {
  name: 'devs',
  components: {
    HelpCard,
    NumberedSteps,
  },
  data() {
    return {
      devs,
    };
  },
  methods: {
    getSteps() {
      return this.$t('devs.steps');
    },
    getMinWidth() {
      return window.innerWidth;
    },
  },
};
</script>

<style></style>
