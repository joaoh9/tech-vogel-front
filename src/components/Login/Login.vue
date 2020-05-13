<template>
  <div>
    <v-dialog v-model="dialog" max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn class="ml-2" color="info" text v-on="on">Login</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Sign In</span>
        </v-card-title>
        <v-card-text>
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
            <v-container>
              <v-row>
                <v-col cols='12'>
                  <v-text-field prepend-icon="fa-user" label="Email" required></v-text-field>
                </v-col>
                <v-col cols='12'>
                  <v-text-field prepend-icon="fa-lock" label="Password" type="password" required></v-text-field>
                </v-col>
                <v-col
                  cols='12'
                  align="center"
                >
                  <v-btn
                    rounded
                    color="success"
                    class="mr-4"
                    @click="validate; dialog = false"
                  >
                    Sign In
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card-text>
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
    };
  },
};
</script>
