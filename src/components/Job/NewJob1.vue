<template>
  <div class="mt-12">
    <v-row>
      <v-col cols="3"> </v-col>
      <v-col cols="6" class="mt-12">
        <h2 class="mb-12">Basic Information</h2>


{{title}}        <h6>Job Title</h6>
        <v-text-field v-model="title" style="width: 100%" outlined background-color="#FCFCFF">
        </v-text-field>
        <v-row>
          <v-col>
            <h6>Category</h6>

            {{category}}<v-text-field
              v-model="category"
              style="width: 100%"
              outlined
              background-color="#FCFCFF"
            >
            </v-text-field>
          </v-col>
          <v-col>
            <h6>Contract Type</h6>

            {{contractType}}<v-text-field
              v-model="contractType"
              style="width: 100%"
              outlined
              background-color="#FCFCFF"
            >
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
          </v-col>
          <v-spacer></v-spacer>
          <v-col class="text-right">
            <v-btn elevation="0" @click="goTo2" large color="primary" class="ml-2">Next</v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="3"> </v-col>
    </v-row>
  </div>
</template>

<script>
/*
  title
  category
  contractType

  about
  languages

  knowlegeAreas
  programmingLanguages
  frameworks
  softSkills

  perks
*/

export default {
  name: 'NewJob1',
  props: {
    _title: { type: String },
    _category: { type: String },
    _contractType: { type: String },

    about: { type: String },
    languages: { type: Array },

    knowlegeAreas: { type: Array },
    programmingLanguages: { type: Array },
    frameworks: { type: Array },
    softSkills: { type: Array },

    perks: { type: String },
  },
  data() {
    return {
      title: '',
      category: '',
      contractType: '',
    };
  },
  mounted() { },
  methods: {
    goTo2(){
      this.$router.push({
        name: 'NewJob2',
        params: {
          title: this.title,
          category: this.category,
          contractType: this.contractType,
        },
      })
    },
  },
  watch: {
    _title() {
      console.log(this._title)
      this.title = this._title
    },
  },
};
</script>

<style></style>
