<template>
  <div class="container">
    <v-row>
      <v-col md="6" cols="12">
        <v-row class="ma-5">
          <v-cols cols="12">
            <v-img class="text-left" height="100" width="200" contain :src="logo"></v-img>
          </v-cols>
          <v-col cols="12">
            <h1 class="display-4">Tech Vogel</h1>
            <!-- <v-text class="display-4">Tech Vogel</v-text> -->
          </v-col>
          <v-col cols="12">
            <v-text class="display-1 text-justify"
              >Connecting companies with I.T. professionals for remote Work</v-text
            >
          </v-col>
          <v-col cols="12">
            <p>
              Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
              industries for previewing layouts and visual mockups.
            </p>
          </v-col>
          <v-col cols="12">
            <v-card class="" elevation="14" style="" max-width="500">
              <!-- <div> -->
              <v-card-text>
                <p class="title font-weight-regular justify-space-between">
                  <span>Sign Up Now</span>
                </p>

                <v-text-field
                  height="48"
                  rounded
                  outlined
                  label="Name"
                  v-model="name"
                ></v-text-field>
                <v-text-field
                  height="48"
                  rounded
                  outlined
                  label="Email"
                  v-model="email"
                ></v-text-field>
                <Combobox2
                  label="Frameworks"
                  :items="$t('data.frameworks')"
                  v-model="skills"
                ></Combobox2>
                <v-btn
                  rounded
                  large
                  color="primary"
                  class="float-right"
                  elevation="12"
                  @click="login"
                >
                  Register
                </v-btn>
              </v-card-text>
              <!-- </div> -->
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col v-if="this.$vuetify.breakpoint.mdAndUp" md="6" cols="12">
        <v-img height="700" contain :src="img31"> </v-img>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import img31 from 'Assets/31.png';
import logo from 'Assets/tv-new-logo-blue.png';
import Combobox2 from 'Interface/Combobox-2';

export default {
  name: 'Landing Page',
  components: {
    Combobox2,
  },
  data() {
    return {
      img31,
      logo,
      name: '',
      email: '',
      skills: [],
    };
  },
};
</script>

<style></style>
