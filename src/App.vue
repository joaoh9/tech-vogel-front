<template>
  <v-app>
    <Navbar></Navbar>
    <v-content>
      <router-view class="view"></router-view>
    </v-content>
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
