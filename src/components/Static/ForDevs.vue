<template>
  <v-container class="d-flex align-center flex-column">
    <h4 class="color-secondary my-10">{{ $t('devs.subtitle') }}</h4>
    <v-row align="center" class="mt-4" justify="center">
      <v-col cols="12" md="6">
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
      <v-col cols="12" md="6">
        <div class="d-flex align-center flex-column">
          <v-img :src="devs" :max-width="$vuetify.breakpoint.mdAndUp ? 600 : 340" />
          <v-img class="mt-4" :src="vogel" :max-width="$vuetify.breakpoint.mdAndUp ? 600 : 400" />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import devs from 'Assets/devs.svg';
import vogel from 'Assets/vogel.svg';

export default {
  name: 'devs',
  data() {
    return {
      devs,
      vogel,
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

<style scoped>
.circle {
  width: 60px;
  height: 60px;
  min-width: 60px;
  min-height: 60px;
  background: #fff;
  border: 1px solid #ff9200;
  border-radius: 50%;

  display: table-cell;
  text-align: center;
  vertical-align: middle;

  font-size: 1.5em;
  font-weight: 600;
  color: #ff9200;
}
</style>
