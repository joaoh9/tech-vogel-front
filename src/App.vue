<template>
  <v-app>
    <Navbar></Navbar>
    <router-view class="view"></router-view>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar/Navbar.vue';

export default {
  name: 'app',
  components: {
    Navbar,
  },
};
</script>
