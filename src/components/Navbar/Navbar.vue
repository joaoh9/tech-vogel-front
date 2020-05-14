<template>
  <div>
    <v-app-bar collapse-on-scroll color="grey darken-4" dark>
      <v-toolbar-title class="mr-5">Tech Vogel</v-toolbar-title>
      <v-btn color="grey lighten-3" text>How It Works</v-btn>
      <v-btn color="grey lighten-3" text>About Us</v-btn>
      <v-btn color="grey lighten-3" text>Pricing</v-btn>
      <v-btn color="grey lighten-3" text>Content</v-btn>
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
