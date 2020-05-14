<template>
  <div>
    <v-dialog v-model="dialog" max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn class="ml-2" color="info" text v-on="on">Login</v-btn>
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
                        name="username"
                        prepend-icon="fa-user"
                        label="Username or Email"
                        required
                      ></v-text-field>
                      <v-text-field
                        name="password"
                        prepend-icon="fa-lock"
                        label="Password"
                        type="password"
                        required
                      ></v-text-field>
                      <v-btn
                        rounded
                        large
                        color="primary"
                        class="mt-2"
                        @click="validate; dialog = false"
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
                        name="username"
                        prepend-icon="fa-user"
                        label="Username"
                        required
                      ></v-text-field>
                      <v-text-field name="email" prepend-icon="fa-envelope" label="Email" required></v-text-field>
                      <v-text-field
                        name="password"
                        prepend-icon="fa-lock"
                        label="Password"
                        type="password"
                        required
                      ></v-text-field>
                      <v-checkbox v-model="checkbox">
                        <small slot="label">
                          By signing up, you agree with our
                          <a>Terms and Conditions</a>
                          and our
                          <a>Privacy Policy</a>
                        </small>
                      </v-checkbox>
                      <v-btn
                        rounded
                        large
                        color="primary"
                        class="mt-2"
                        @click="validate; dialog = false"
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
export default {
  name: 'Login',
  data() {
    return {
      dialog: false,
      tab: 0,
      checkbox: false,
    };
  },
};
</script>
