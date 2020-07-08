<template>
  <div class="mt-12">
    <v-row>
      <v-col cols="3"> </v-col>
      <v-col cols="6" class="mt-12">
        <h2 class="mb-12">The Specifics</h2>

        <h6>Perks and Benefits</h6>
        <v-textarea style="width: 100%" v-model="perks" outlined background-color="#FCFCFF">
        </v-textarea>
        <v-row>
          <v-col>
            <v-btn elevation="0" to="1" large color="secondary-lighten-2" class="">Go Back</v-btn>
          </v-col>
          <v-spacer></v-spacer>
          <v-col class="text-right">
            <v-btn elevation="0" @click="save" large color="primary">Next</v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="3"> </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'NewJob4',
  props: {
    title: { type: String },
    category: { type: String },
    contractType: { type: String },

    languages: { type: Array },
    knowlegeAreas: { type: Array },

    programmingLanguages: { type: Array },
    frameworks: { type: Array },
    softSkills: { type: Array },
  },
  data() {
    return {
      perks: '',
    };
  },
  methods: {
    save(){

    },
  },
};
</script>

<style></style>
