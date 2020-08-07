<template>
  <div style="height:100%; background: linear-gradient(156deg, #3AA3FF 8.83%, rgba(67, 54, 147, 0.5) 62.18%), #433693;">
    <section style="height: 100%">
      <div class="container d-flex flex-column align-center justify-center" style="height: 100%">
        <v-spacer></v-spacer>
        <h1 class="mb-3 text-center">Register for Tech Vogel</h1>
        <h6 class="mx-5 mb-5 text-justify" style="max-width:600px">
          We connect I.T. professionals from around the globe to companies looking for remote employees.
        </h6>
        <v-row justify="center" style="width:100%">

            <v-col cols=12 md=4 lg=3>
              <v-btn
                color='primary'
                class='black--text'
                large
                block
                to='/job/new'
              >
                I want to hire
              </v-btn>
            </v-col>
            <v-col cols=12 md=4 lg=3>
              <v-btn
                class='black--text'
                color='primary'
                large
                block
              >
                I'm looking for a job
              </v-btn>
            </v-col>
        </v-row>
        <v-spacer></v-spacer>
        <div class="my-3">
          <v-btn
            outlined
            color="white"
          >
          Learn more
          </v-btn>
        </div>
      </div>
    </section>
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

<style>
h1 {
  color: white;
  font-weight: bold;
}
h6 {
  color: white;
}
</style>
