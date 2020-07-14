<template>
  <div class="mt-12">
    <v-row class="text-center">
      <v-spacer></v-spacer>
      <h1>Register for Tech Vogel</h1>
      <v-spacer></v-spacer>
    </v-row>
    <v-row>
      <v-spacer></v-spacer>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <v-spacer></v-spacer>
    </v-row>
    <v-row>
      <v-col>
        <v-card class="mx-auto" height="400" width="600">
          <v-img   gradient="to top, rgba(255,255,255,.5), rgba(255,255,255,.9)" :src="backgroudCompanies">
            <v-card-title class="d-block text-center"> Tech Vogel for Companies</v-card-title>
          </v-img>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="mx-auto" height="400" width="600">
          <v-img gradient="to top, rgba(255,255,255,.5), rgba(255,255,255,.9)" :src="backgroudProfessionals">
            <v-card-title class="d-block text-center"> Tech Vogel for Professionals</v-card-title>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import backgroudCompanies from 'Assets/office-wp-1.jpg';
import backgroudProfessionals from 'Assets/office-wp-2.jpg';

export default {
  name: 'Home',
  data() {
    return {
      backgroudCompanies,
      backgroudProfessionals,
    };
  },
};
</script>
