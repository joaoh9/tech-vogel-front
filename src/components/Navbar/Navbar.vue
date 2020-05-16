<template>
  <div>
    <v-app-bar color="grey darken-4" dark>
      <v-btn to="/" tile color="grey-lighten-2" class="mr-5">Tech Vogel</v-btn>
      <v-btn to="howitworks" tile color="grey lighten-3" text>How It Works</v-btn>
      <v-btn to="aboutus" tile color="grey lighten-3" text>About Us</v-btn>
      <v-btn to="pricing" tile color="grey lighten-3" text>Pricing</v-btn>
      <v-btn to="content" tile color="grey lighten-3" text>Content</v-btn>
      <v-spacer></v-spacer>
      <v-btn class="" color="info" tile elevation="12">Apply</v-btn>
      <v-btn class="ml-3" color="info" tile elevation="12" outlined>Hire</v-btn>
      <Login> </Login>
      <!-- <v-btn class="ml-2" color="info" text>Log In</v-btn> -->
    </v-app-bar>
  </div>
</template>

<script>
import Login from '../Login/Login.vue';

export default {
  name: 'Navbar',
  components: {
    Login,
  },
  data() {
  },
};
</script>
