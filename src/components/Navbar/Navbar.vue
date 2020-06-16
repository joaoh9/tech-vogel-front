<template>
  <div>
    <v-app-bar app color="white darken-4" elevate-on-scroll>
      <v-btn text color="white darken-4" height="60" tile elevation="0" to="/">
        <v-avatar size="150">
          <v-img height="100" width="1" :src="logo"></v-img>
        </v-avatar>
      </v-btn>
      <v-btn to="howitworks" color="grey darken-3" text>How It Works</v-btn>
      <v-btn to="aboutus" color="grey darken-3" text>About Us</v-btn>
      <v-btn to="pricing" color="grey darken-3" text>Pricing</v-btn>
      <v-btn to="content" color="grey darken-3" text>Content</v-btn>
      <v-spacer></v-spacer>
      <v-btn class color="info" elevation="12">Apply</v-btn>
      <v-btn class="ml-3" color="info" elevation="12" outlined>Hire</v-btn>
      <v-btn to="login" color="info" text>Login</v-btn>
      <v-btn to="signup" outlined color="secondary" text>SignUp</v-btn>
    </v-app-bar>
  </div>
</template>

<script>
import Logo from 'Assets/tv-new-logo-squared-blue.png';

export default {
  name: 'Navbar',
  components: {
  },
  data() {
    return {
      logo: Logo,
    };
  },
};
</script>

<style scoped>
.v-toolbar {
  box-shadow: 0px 2px 8px -1px rgba(0, 0, 0, 0.2), 0px 8px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12);
}
</style>
