<template>
  <v-app>
    <UserNavbar v-if="userIsLoggedIn()"></UserNavbar>
    <Navbar v-else></Navbar>
    <v-content style="background-color: #f4f6fc">
      <router-view class="view"></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from 'Components/Navbar/Navbar';
import UserNavbar from 'Components/Navbar/UserNavbar';
import Storage from 'Helpers/storage';

export default {
  name: 'app',
  data(){
    return {
      user: null,
    }
  },
  components: {
    Navbar,
    UserNavbar,
  },
  methods: {
    userIsLoggedIn() {
      const user = Storage.loadState('user');
      if(!user) {
        return false;
      }
      this.user = user;
      return true
    },
  },
};
</script>
