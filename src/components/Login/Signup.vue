<template>
  <v-card class="mx-auto mt-12" max-width="500">
    <v-card-title class="title font-weight-regular justify-space-between">
      <span>{{ currentTitle }}</span>
      <v-avatar
        color="primary lighten-2"
        class="subheading white--text"
        size="24"
        style="font-size: 16px"
        v-text="step"
      ></v-avatar>
    </v-card-title>

    <v-window v-model="step">
      <v-window-item :value="1">
        <v-card-text>
          <v-text-field label="Username" v-model="username"></v-text-field>
          <v-text-field label="Email" v-model="email"></v-text-field>
          <span class="caption grey--text text--darken-1">
            You will be abble to log with either of these.
          </span>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="2">
        <v-card-text>
          <v-text-field v-model="password" label="Password" type="password"></v-text-field>
          <v-text-field v-model="confirmPassword" label="Confirm Password" type="password"></v-text-field>
          <span class="caption grey--text text--darken-1">
            Please enter a password for your account
          </span>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="3">
        <div class="pa-4 text-center">
          <v-img
            class="mb-4"
            contain
            height="128"
            :src="logo"
          ></v-img>
          <v-text-field label="Confirmation Token" v-model="emailConfirmationToken"></v-text-field>
        </div>
      </v-window-item>
    </v-window>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn v-if="step === 1" text to="/login">
        Log In
      </v-btn>
      <v-btn v-else @click="step--">
        Back
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn color="primary" depressed @click="nextStep">
        Next
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import Logo from 'Assets/tv-new-logo-blue.png';
import Storage from 'Helpers/storage'

export default {
  name: 'Login2',
  components: {
  },
  data() {
    return {
      logo: Logo,
      step: 1,
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
      emailConfirmationToken: '',
    };
  },
  computed: {
    currentTitle() {
      switch (this.step) {
        case 1:
          return 'Sign-up';
        case 2:
          return 'Create a password';
        default:
          return 'Confirm Email';
      }
    },
  },
  methods: {
    nextStep(){
      switch(this.step){
        case 1:
          if(this.email.length > 1 && this.username)
            this.step++;
          break;
        case 2:
          if(this.password.length > 1 && this.password === this.confirmPassword)
            this.step++;
          break;
        case 3:
          if(this.emailConfirmationToken === '123')
            this.saveUser()
          break;
        default:
          return false
      }
    },
    saveUser(){
      const user = {
        email: this.email,
        username: this.username,
      }
      Storage.saveState('user', user)
      this.$router.push({
        name: 'User Dashboard',
      })
    },
  },
};
</script>
