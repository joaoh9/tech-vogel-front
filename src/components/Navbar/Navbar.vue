<template>
  <div>
    <v-app-bar
      app
      :color="this.$router.currentRoute.name === 'Home' ? 'transparent' : 'white'"
      hide-on-scroll
      elevation="0"
    >
      <v-btn class="body-2" text color="white darken-4" height="60" tile elevation="0" to="/">
        <v-avatar size="150">
          <v-img contain height="100" width="1" :src="logo"></v-img>
        </v-avatar>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn class="body-2" @click="goToJobList" color="grey darken-3" text>Jobs</v-btn>
      <v-btn class="body-2" @click="goToPricing" color="grey darken-3" text>Pricing</v-btn>
      <v-btn class="body-2" @click="goToHowItWorks" color="grey darken-3" text>How It Works</v-btn>
      <v-spacer></v-spacer>
      <!-- <v-btn to="content" color="grey darken-3" text>Sign Up</v-btn> -->
      <v-btn @click="goToSignup" text>Sign Up</v-btn>
      <v-btn @click="goToLogin" tile large color="primary" class="mx-4">Login</v-btn>
    </v-app-bar>
  </div>
</template>

<script>
import Logo from 'Assets/logo-escrita-preto-amarelo.svg';

export default {
  name: 'Navbar',
  components: {},
  data() {
    return {
      logo: Logo,
    };
  },
  methods: {
    goToSignup() {
      this.$router.push({
        name: 'Signup',
      });
    },
    goToLogin() {
      this.$router.push({
        name: 'Login',
      });
    },
    goToJobList() {},
    goToPricing() {},
    goToHowItWorks() {},
  },
};
</script>

<style scoped>
.v-toolbar {
  box-shadow: 0px 2px 8px -1px rgba(0, 0, 0, 0.2), 0px 8px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12);
}
</style>
