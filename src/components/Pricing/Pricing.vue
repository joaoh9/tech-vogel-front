<template>
  <div>
    <v-row align="center" class="mb-10 mx-5">
      <v-col v-for="n in 4" :key="n" cols="12" md="3" sm="6">
        <div class="text-center">
          <v-btn
            elevation="10"
            rounded
            color="primary"
            class="mb-n6"
            style="z-index: 999"
          >Get Started</v-btn>
        </div>
        <v-card
          tile
          elevation="8"
          min-height="600"
          class="d-flex text-center justify-around flex-column display-1"
        >
          <v-avatar id="avatar-1" height="100" width="100%" tile></v-avatar>
          <div id="avatar-2-container">
            <v-avatar id="avatar-2" height="60" width="100%" tile></v-avatar>
          </div>
          <div class="d-flex">
            <v-img
              style="margin-top: -7rem; margin-left: 30%;"
              class="d-flex justify-center"
              :src="getBird(n)"
              max-height="40%"
              max-width="40%"
            ></v-img>
          </div>
          <div class="d-flex flex-column justify-end align-center flex-fill mb-5">
            <h2 class="display-2 mb-5">{{ $t(`Pricing._${n}.credits`) }}</h2>
            <h2 class="mb-5">$ {{$t(`Pricing._${n}.price`)}}</h2>
            <v-btn
              max-width="70%"
              class="mb-5"
              elevation="6"
              rounded
              color="primary"
            >Choose Plan</v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import bird1 from '../../assets/bird1.png';
import bird2 from '../../assets/bird2.png';
import bird3 from '../../assets/bird3.png';
import bird4 from '../../assets/bird4.png';

export default {
  name: 'Pricing',
  data() {
    return {
      bird1,
      bird2,
      bird3,
      bird4,
    };
  },
  methods: {
    getBird(n) {
      const map = {
        1: bird1,
        2: bird2,
        3: bird3,
        4: bird4,
      };
      return map[n];
    },
  },
};
</script>

<style>
#avatar-2-container {
  filter: drop-shadow(0px 10px 12px rgba(0, 0, 0, 0.5));
}
.v-avatar--tile {
  background-color: #6f6cff;
  opacity: 50%;
}
#avatar-2 {
  clip-path: polygon(100% 0, 0% 100%, 0 0);
}
</style>
