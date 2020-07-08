<template>
  <div class="mt-12">
    <v-row>
      <v-col cols="3"> </v-col>
      <v-col cols="6" class="mt-12">
        <h2 class="mb-12">Select Desired Skills</h2>

        <h6>Knowlege Areas</h6>
        <v-text-field v-model="knowlegeAreas" style="width: 100%" outlined background-color="#FCFCFF">
        </v-text-field>
        <h6>Programming Languages</h6>
        <v-text-field v-model="programmingLanguages" style="width: 100%" outlined background-color="#FCFCFF">
        </v-text-field>
        <h6>Frameworks</h6>
        <v-text-field v-model="frameworks" style="width: 100%" outlined background-color="#FCFCFF">
        </v-text-field>
        <h6>Soft Skills</h6>
        <v-text-field v-model="softSkills" style="width: 100%" outlined background-color="#FCFCFF">
        </v-text-field>
        <v-row>
          <v-col>
            <v-btn elevation="0" to="2" large color="secondary-lighten-2">Go Back</v-btn>
          </v-col>
          <v-spacer></v-spacer>
          <v-col class="text-right">
            <v-btn elevation="0" to="4" large color="primary">Next</v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="3"> </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'NewJob3',
  props: {
    title: { type: String },
    category: { type: String },
    contractType: { type: String },

    about: { type: String },
    languages: { type: Array },

    perks: { type: String },
  },
  data() {
    return {
      knowlegeAreas: [],
      programmingLanguages: [],
      frameworks: [],
      softSkills: [],
    };
  },
};
</script>

<style></style>
