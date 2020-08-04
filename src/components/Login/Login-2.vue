<template>
  <v-card class="mx-auto mt-12" max-width="500">
    <v-card-title class="title font-weight-regular justify-space-between">
      <span>Log In</span>
    </v-card-title>

    <v-window>
      <v-window-item :value="1">
        <v-card-text>
          <v-text-field label="Username" v-model="username"></v-text-field>
          <v-text-field label="Password" type="password" v-model="password"></v-text-field>
          <!-- <span -->
          <!-- class="caption grey--text text--darken-1" -->
          <!-- >You will be abble to log with either of these.</span> -->
        </v-card-text>
      </v-window-item>
    </v-window>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn text to="/signup">Sign Up</v-btn>
      <v-spacer></v-spacer>
      <v-btn color="primary" depressed @click="login">Log In</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import Logo from 'Assets/tv-new-logo-blue.png';
import Storage from 'Helpers/storage';
import UserController from 'Controllers/user';

export default {
  name: 'Login2',
  components: {},
  data() {
    return {
      logo: Logo,
      email: '',
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      const userController = UserController();
      if ((this.username || this.email) && this.password) {
        userController
          .login({
            username: this.username,
            password: this.password,
          })
          .then((res) => {
            console.log('res');
            console.log(res);
          })
          .catch((e) => {
            console.log('e');
            console.log(e);
          });
      }
    },
    goToSignUp() {
      this.$router.push({
        name: 'Signup',
      });
    },
  },
};
</script>
