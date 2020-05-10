<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view class="view"></router-view>
  </div>
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
