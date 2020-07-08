<template>
  <div class="mt-12">
    <v-row>
      <v-col cols="3"> </v-col>
      <v-col cols="6" class="mt-12">
        {{this.title}}
        {{this.category}}
        {{this.contractType}}
        <h2 class="mb-12">Tell us more</h2>

        <h6>About the role</h6>
        <v-textarea v-model="about" style="width: 100%" outlined background-color="#FCFCFF"> </v-textarea>
        <h6>Required Language(s)</h6>
        <v-text-field style="width: 100%" v-model="languages" outlined background-color="#FCFCFF"> </v-text-field>
        <v-row>
          <v-col>
            <v-btn elevation="0" @click="goTo1" large color="secondary-lighten-2" class="">Go Back</v-btn>
          </v-col>
          <v-spacer></v-spacer>
          <v-col class="text-right">
            <v-btn elevation="0" to="3" large color="primary">Next</v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="3"> </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'NewJob2',
  props: {
    title: { type: String },
    category: { type: String },
    contractType: { type: String },

    _about: { type: String, default: '' },
    _languages: { type: Array, default: () => [] },

    knowlegeAreas: { type: Array },
    programmingLanguages: { type: Array },
    frameworks: { type: Array },
    softSkills: { type: Array },

    perks: { type: String },
  },
  mounted() {
    this.about = this._about;
    this.languages = this._languages;
  },
  data() {
    return {
      about: '',
      languages: '',
    };
  },
  methods: {
    goTo1() {
      this.$router.push({
        name: 'NewJob1',
        props: {
          _title: this.title,
          _category: this.category,
          _contractType: this.contractType,
          about: this.about,
          languages: this.languages,
          knowlegeAreas: this.knowlegeAreas,
          programmingLanguages: this.programmingLanguages,
          frameworks: this.frameworks,
          softSkills: this.softSkills,
          perks: this.perks,
        },
      })
    },
  },
};
</script>

<style></style>
