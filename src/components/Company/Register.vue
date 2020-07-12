<template>
  <div class="container">
    <v-card flat>
      <v-form>
        <v-stepper v-model="currentStep">
          <v-stepper-items>
            <v-stepper-content step="1">
              <v-card flat>
                <v-card-title>Register as a company</v-card-title>
                <v-card-text>
                  <v-text-field tile outlined label="Company name"></v-text-field>
                  <v-text-field tile outlined label="Representative name"></v-text-field>
                  <v-text-field tile outlined label="Representative email"></v-text-field>
                  <v-row>
                    <v-col cols="12" md="6">
                      <v-text-field
                        tile
                        outlined
                        label="Password"
                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="showPassword ? 'text' : 'password'"
                        @click:append="showPassword = !showPassword"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-text-field
                        tile
                        outlined
                        label="Confirm password"
                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="showPassword ? 'text' : 'password'"
                        @click:append="showPassword = !showPassword"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
              <div class="d-flex justify-end flex-fill m-3">
                <v-btn color="primary" @click="currentStep += 1">Next</v-btn>
              </div>
            </v-stepper-content>
            <v-stepper-content step="2">
              <v-card flat>
                <v-card-title>Build your company page</v-card-title>
                <v-card-text>
                  <v-avatar color="light-gray" size="96">
                    <img src alt="Company" />
                  </v-avatar>
                  <v-text-field tile outlined label="Location"></v-text-field>
                  <v-textarea auto-grow rows="3" tile outlined label="About your company"></v-textarea>
                </v-card-text>
              </v-card>
              <div class="d-flex justify-space-between">
                <v-btn color="primary" outlined @click="currentStep -= 1">Back</v-btn>
                <v-btn color="primary" @click="currentStep += 1" class="align-self-end">Next</v-btn>
              </div>
            </v-stepper-content>
            <v-stepper-content step="3">
              <v-card flat>
                <v-card-title>Add your links</v-card-title>
                <v-card-text>
                  <v-text-field tile outlined label="Company webpage"></v-text-field>
                  <v-text-field tile outlined label="Linkedin"></v-text-field>
                  <v-text-field tile outlined label="Instagram"></v-text-field>
                  <v-text-field tile outlined label="Twitter"></v-text-field>
                </v-card-text>
              </v-card>
              <div class="d-flex justify-space-between">
                <v-btn color="primary" outlined @click="currentStep -= 1">Back</v-btn>
                <v-btn color="success" @click="currentStep = 1" class="align-self-end">Finish</v-btn>
              </div>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-form>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Register',
  props: {},
  data() {
    return {
      currentStep: 1,
      showPassword: false,
    };
  },
};
</script>
