<template>
  <v-app>
    <Navbar></Navbar>
    <v-content style="background-color: #f4f6fc">
      <router-view class="view"></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar/Navbar';

export default {
  name: 'app',
  components: {
    Navbar,
  },
};
</script>
