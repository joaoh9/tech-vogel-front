<template>
  <div class="container">
    <v-row>
      <v-col md="6" cols="12">
        <v-row class="ma-5">
          <v-cols cols="12">
            <v-img class="text-left" height="100" width="200" contain :src="logo"></v-img>
          </v-cols>
          <v-col cols="12">
            <h1 class="display-4 font-weight-regular">Tech Vogel</h1>
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
            <!-- <v-card class="" elevation="14" style="" max-width="500"> -->
            <!-- <div> -->
            <!-- <v-card-text> -->
            <p class="title font-weight-regular justify-space-between">
              <span>Sign Up Now</span>
            </p>
            <v-row>
              <!-- <v-text-field -->
                <!-- height="48" -->
                <!-- outlined -->
                <!-- rounded -->
                <!-- prepend-inner-icon="mdi-account-outline" -->
                <!-- label="Name" -->
                <!-- v-model="name" -->
              <!-- ></v-text-field> -->
              <v-text-field
                  height="48"
                  outlined
                  rounded
                  prepend-inner-icon="mdi-email-outline"
                  label="Email"
                  v-model="email"
                ></v-text-field>
              <!-- <Combobox2 -->
              <!-- label="Skills" -->
              <!-- :items="$t('data.frameworks')" -->
              <!-- v-model="skills" -->
              <!-- ></Combobox2> -->
              <v-btn
                rounded
                height="56"
                color="primary"
                class="float-right ml-n1"
                elevation="0"
                @click="login"
              >
                Register
              </v-btn>
            </v-row>
            <!-- </v-card-text> -->
            <!-- </div> -->
            <!-- </v-card> -->
          </v-col>
        </v-row>
      </v-col>
      <v-col v-if="this.$vuetify.breakpoint.mdAndUp" md="6" cols="12">
        <v-img height="700" contain :src="pic"> </v-img>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import img31 from 'Assets/31.png';
import logo from 'Assets/logo-amarelo-grad.svg';
// import logo from 'Assets/logo-azul-grad.svg';
// import logo from 'Assets/logo-azul.svg';
// import Combobox2 from 'Interface/Combobox-2';

import pic2 from 'Assets/lp-pic-2.png';
import pic3 from 'Assets/lp-pic-3.png';
import pic4 from 'Assets/lp-pic-4.png';

export default {
  name: 'Landing Page',
  components: {
    // Combobox2,
  },
  mounted() {
    const random = Math.random();
    this.pic = random < 0.33 ? pic4 : random < 0.66 ? pic2 : pic3;
  },
  data() {
    return {
      img31,
      logo,
      pic: '',
      name: '',
      email: '',
      skills: [],
    };
  },
};
</script>

<style>
/* .v-application .display-4 { */
  /* font-family: 'Raleway' !important; */
/* } */
/* .v-application .display-1 { */
  /* font-family: 'Lato' !important; */
/* } */
/* .v-application p { */
  /* font-family: 'Raleway' !important; */
/* } */

.v-btn--rounded {
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
}

.v-text-field fieldset {
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
}
.v-btn__content {
  color: white
}
</style>
