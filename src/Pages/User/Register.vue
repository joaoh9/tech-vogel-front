<template>
  <div class="container">
    <v-card class="primary-card">
      <v-row>
        <v-col cols="1"></v-col>
        <v-col cols="10">
          <v-form>
            <v-stepper v-model="currentStep" alt-labels>
              <v-stepper-header>
                <v-stepper-step
                  step="1"
                  :complete="currentStep > 1"
                >
                  Personal Information
                </v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step
                  step="2"
                  :complete="currentStep > 2"
                >Confirmation</v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step
                  step="3"
                >
                  You're done!
                </v-stepper-step>
              </v-stepper-header>
              <v-stepper-items>
                <v-stepper-content step="1">
                  <Register1
                    v-on:full-name="e => (job.fullName = e)"
                    v-on:email="e => (job.email = e)"
                    v-on:username="e => (job.username = e)"
                    v-on:password="e => (job.password = e)"
                  ></Register1>
                  <div class="d-flex justify-end flex-fill m-3">
                    <v-btn large color="primary" @click="currentStep += 1">Next</v-btn>
                  </div>
                </v-stepper-content>
                <v-stepper-content step="2">
                  <Register2
                    v-on:access-code="e => (accessCode = e)"
                  ></Register2>
                  <div class="d-flex justify-space-between">
                    <v-btn large color="secondary" @click="currentStep -= 1">Back</v-btn>
                    <v-btn
                      large
                      color="primary"
                      @click="currentStep += 1"
                      class="align-self-end"
                    >Next</v-btn>
                  </div>
                </v-stepper-content>
                <v-stepper-content step="3">
                  <Register3></Register3>
                  <div class="d-flex justify-space-between">
                    <v-btn large color="secondary" @click="currentStep -= 1">Back</v-btn>
                    <v-btn
                      large
                      color="success"
                      @click="currentStep = 1"
                      class="align-self-end"
                    >Finish</v-btn>
                  </div>
                </v-stepper-content>
              </v-stepper-items>
            </v-stepper>
          </v-form>
        </v-col>
        <v-col cols="1"></v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import Register1 from 'Pages/User/Register1';
import Register2 from 'Pages/User/Register2';
import Register3 from 'Pages/User/Register3';

export default {
  name: 'New',
  props: {},
  components: {
    Register1,
    Register2,
    Register3,
  },
  data() {
    return {
      user: {
        fullName: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
      },
      accessCode: '',
      currentStep: 1,
      showPassword: false,
      profilePhoto: null,
      profilePhotURL: null,
    };
  },
};
</script>

