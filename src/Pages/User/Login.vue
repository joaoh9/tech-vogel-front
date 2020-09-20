<template>
  <div class="d-flex justify-center mt-12">
    <v-card
      class="primary-card"
      :elevation="$vuetify.breakpoint.smAndUp ? 6 : 0"
      color="bg"
      max-width="600"
      :min-width="$vuetify.breakpoint.smAndUp ? 500 : 320"
    >
      <card-template :title="$t('Common.login')" :description="$t('login.subtitle')">
        <template v-slot:content="{}">
          <form-input class="mt-6" :title="$t('Common.username.label')" />
          <v-text-field outlined v-model="user.username" />
          <form-input :title="$t('Common.password.label')" />
          <v-text-field
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
            :type="showPassword ? 'text' : 'password'"
            outlined
            v-model="user.password"
          />
          <div class="d-flex justify-start mt-n6">
            <p color="secondary" class="button-text align-self-center font-weight-bold">
              Forgot password?
            </p>
          </div>
          <v-row class="mt-6">
            <v-col cols="6" md="6" class="text-left">
              <v-btn to="/signup" color="secondary" tile outlined text large>
                {{ $t('Common.signup') }}
              </v-btn>
            </v-col>
            <v-col cols="6" md="6" class="text-right">
              <v-btn color="primary" elevation="0" large @click="login">
                {{ $t('login.title') }}
              </v-btn>
            </v-col>
          </v-row>
        </template>
      </card-template>
    </v-card>
  </div>
</template>

<script>
import CardTemplate from 'Components/Interface/CardTemplate';
import UserController from 'Controllers/user';

export default {
  name: 'Login',
  components: {
    CardTemplate,
  },
  data() {
    return {
      showPassword: false,
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    async login() {
      const userController = new UserController();

      if (this.user.username && this.password) {
        try {
          await userController.login({
            username: this.user.username,
            password: this.user.password,
          });
        } catch (e) {
          console.log('e');
          console.log(e);
        }
      }
    },
  },
};
</script>

<style></style>
