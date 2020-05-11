<template>
  <div>
    <v-app-bar collapse-on-scroll color="grey darken-4" dark>
      <v-toolbar-title class="mr-5">Tech Vogel</v-toolbar-title>
      <v-btn color="grey lighten-3" text>How It Works</v-btn>
      <v-btn color="grey lighten-3" text>About Us</v-btn>
      <v-btn color="grey lighten-3" text>Content</v-btn>
      <v-spacer></v-spacer>
      <v-btn class="" color="info" elevation="12" rounded>Apply</v-btn>
      <v-btn class="ml-3" rouded color="info" elevation="12" outlined rounded>Hire</v-btn>
      <v-btn class="ml-2" color="info" text>Log In</v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>
