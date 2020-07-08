<template>
  <div class="container">
    <div class="d-flex flex-column text-center align-stretch my-2">
      <h1>Register for Tech Voguel</h1>
      <h4 class="text-justify my-4">
        Opportunities Lorem ipsum dolor sit amet, consectetur adipiscing elit. In congue elit ac sem tristique eleifend.
      </h4>
      <div class="d-flex flex-row justify-space-around flex-wrap my-3">
        <v-card color="secondary" max-width="350px" class="my-2">
          <v-img
            :src="professionalImg"
            class="white--text align-end"
          >
            <v-card-title>Are you a professional?</v-card-title>
          </v-img>
          <v-card-actions>
            <div class="d-flex justify-center flex-fill">
                <v-btn tile>Register</v-btn>
            </div>
          </v-card-actions>
        </v-card>
        <v-card color="secondary" max-width="350px" class="my-2">
          <v-img
            :src="companyImg"
            class="white--text align-end "
          >
            <v-card-title>Are you a company?</v-card-title>
          </v-img>
          <v-card-actions>
            <div class="d-flex justify-center flex-fill">
                <v-btn tile>Register</v-btn>
            </div>
          </v-card-actions>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
import professionalImg from 'Assets/31.png';
import companyImg from 'Assets/hiring 3.png';

export default {
  name: 'Welcome',
  components: {
  },
  data() {
    return {
      professionalImg: professionalImg,
      companyImg: companyImg,
    };
  },
};
</script>
