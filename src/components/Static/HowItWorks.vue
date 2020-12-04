<template>
  <v-container class="d-flex align-center flex-column">
    <h2 class="h2-bold-alternative text-center color-secondary mt-6">{{ $t('common.howItWorks') }}</h2>
    <h4 class="color-secondary my-16">{{ $t('howItWorks.forCompanies') }}</h4>
    <v-row align="center" class="mt-4" justify="center">
      <v-col cols="12" md="5">
        <div class="d-flex align-center flex-column mb-12">
          <v-img :src="HowItWorks" :max-width="$vuetify.breakpoint.mdAndUp ? 600 : 340" />
          <HelpCard
            :title="$t('home.helpCard.howItWorks.title')"
            :class="spacing"
            :description="$t('home.helpCard.howItWorks.description')"
            :howDoesWork="$t('home.helpCard.howItWorks.howDoesWork')"
            :modalText="$t('home.helpCard.howItWorks.modalText')"
            :btnText="$t('home.helpCard.howItWorks.btnText')"
            style="background: linear-gradient(231.9deg, #264981 0%, #29245D 71.67%);"
          />
        </div>
      </v-col>
      <v-col cols="0" md="1" />
      <v-col cols="12" md="6" :class="$vuetify.breakpoint.mdAndUp ? 'mt-n16' : 'mt-0'">
        <div v-for="(item, i) in getSteps()" :key="i">
          <v-row>
            <v-col cols="2">
              <span class="circle">
                {{ i + 1 }}
              </span>
            </v-col>
            <v-col>
              <h5 class="h5-bold color-secondary">{{ item.title }}</h5>
              <bdy-1 color="color-dark my-4">{{ item.description }}</bdy-1>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import HowItWorks from 'Assets/how-it-works.svg';
import HelpCard from 'Components/Dashboard/HelpCard';

export default {
  name: 'HowItWorks',
  components: {
    HelpCard,
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
