<template>
  <div>
    <v-dialog v-model="dialog" max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn tile class="ml-2" color="info" text v-on="on">Login</v-btn>
      </template>
      <v-card>
        <v-tabs v-model="tab" grow>
          <v-tab key="0">Log In</v-tab>
          <v-tab key="1">Sign Up</v-tab>
          <v-tabs-items v-model="tab">
            <v-tab-item key="0">
              <v-card flat>
                <v-card-text>
                  <v-form ref="form" v-model="valid" lazy-validation>
                    <v-container>
                      <v-text-field
                        tile
                        style="opacity: 80%"
                        outlined
                        name="username"
                        prepend-inner-icon="fa-user"
                        label="Username or Email"
                        required
                      ></v-text-field>
                      <v-text-field
                        tile
                        style="opacity: 80%"
                        outlined
                        name="password"
                        prepend-inner-icon="fa-lock"
                        label="Password"
                        type="password"
                        required
                      ></v-text-field>
                      <v-btn
                        tile
                        style="opacity: 80%"
                        large
                        color="primary"
                        class="mt-2"
                        @click="saveUser; dialog = false"
                      >Log In</v-btn>
                    </v-container>
                  </v-form>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item key="1">
              <v-card flat>
                <v-card-text>
                  <v-form ref="form" v-model="valid" lazy-validation>
                    <v-container>
                      <v-text-field
                        tile
                        style="opacity: 80%"
                        outlined
                        name="Name"
                        prepend-inner-icon="fa-user"
                        label="Name"
                        required
                        v-model="name"
                      ></v-text-field>
                      {{name}}
                      <v-text-field
                        tile
                        style="opacity: 80%"
                        outlined
                        name="username"
                        prepend-inner-icon="fa-user"
                        label="Username"
                        required
                        v-model="username"
                      ></v-text-field>
                      {{username}}
                      <v-text-field
                        tile
                        style="opacity: 80%"
                        outlined
                        name="email"
                        prepend-inner-icon="fa-envelope"
                        label="Email"
                        required
                        v-model="email"
                      ></v-text-field>
                      {{email}}
                      <v-text-field
                        tile
                        style="opacity: 80%"
                        outlined
                        name="password"
                        prepend-inner-icon="fa-lock"
                        label="Password"
                        type="password"
                        required
                        v-model="password"
                      ></v-text-field>
                      {{password}}
                      <v-text-field
                        tile
                        style="opacity: 80%"
                        outlined
                        name="Confirm Password"
                        prepend-inner-icon="fa-lock"
                        label="Confirm Password"
                        type="password"
                        required
                        v-model="confirmPassword"
                      ></v-text-field>
                      {{confirmPassword}}
                      <v-checkbox v-model="checkbox">
                        <small slot="label">
                          By signing up, you agree with our
                          <a>Terms and Conditions</a>
                          and our
                          <a>Privacy Policy</a>
                        </small>
                      </v-checkbox>
                      <v-btn
                        tile
                        style="opacity: 80%"
                        large
                        color="primary"
                        class="mt-2"
                        @click="saveUser()"
                      >Sign Up</v-btn>
                    </v-container>
                  </v-form>
                </v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-tabs>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import UserController from '../../controllers/user-controller';

export default {
  name: 'Login',
  data() {
    return {
      dialog: false,
      tab: 0,
      checkbox: false,
      name: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  },
  methods: {
    saveUser() {
      const userController = new UserController();
      if (this.validateForm()) {
        userController
          .saveUser({
            name: this.name,
            username: this.username,
            email: this.email,
            password: this.password,
          })
          .then((res) => {
            console.log(res);
            this.$router.push({ path: '/' });
          })
          .catch((e) => {
            console.log('Erro ao cadastrar usuário!', e);
          });
      }
    },
    validateForm() {
      return this.name && this.username && this.email && this.password === this.confirmPassword;
    },
  },
};
</script>
