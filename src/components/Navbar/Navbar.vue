<template>
  <v-app-bar color="deep-purple darken-1">
    <v-toolbar-title :collapse-on-scroll="true"
      >Tech Vogel
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn rouded color="">Apply</v-btn>
    <v-btn rouded color="blue" text>Hire</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>
