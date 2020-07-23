<template>
  <v-row class="mt-12">
    <v-col cols="2"></v-col>
    <v-col cols="8">
    <v-system-bar color="bg" style="margin-left: -50px; margin-right: -50px">
      <p class="overline" :style="getPageTitle(1)" :key="step">aaaaaaaaaaaaaaaaa</p>
      <v-spacer></v-spacer>
      <p class="overline" :style="getPageTitle(2)" :key="step">aaaaaaaaaaaaaaaaa</p>
      <v-spacer></v-spacer>
      <p class="overline" :style="getPageTitle(3)" :key="step">aaaaaaaaaaaaaaaaa</p>
      <v-spacer></v-spacer>
      <p class="overline" :style="getPageTitle(4)" :key="step">aaaaaaaaaaaaaaaaa</p>
    </v-system-bar>
      <v-card class="primary-card" elevation="6">
        <v-system-bar color="cinza4" style="border-radius: 6px; margin: -1px">
          <v-icon size="28px" style="margin: -10px" :color="step === 1 ? 'primary' : 'cinza3'">mdi-checkbox-blank-circle</v-icon>
          <v-spacer></v-spacer>
          <v-icon size="28px" style="margin: -10px" :color="step === 2 ? 'primary' : 'cinza3'">mdi-checkbox-blank-circle</v-icon>
          <v-spacer></v-spacer>
          <v-icon size="28px" style="margin: -10px" :color="step === 3 ? 'primary' : 'cinza3'">mdi-checkbox-blank-circle</v-icon>
          <v-spacer></v-spacer>
          <v-icon size="28px" style="margin: -10px" :color="step === 4 ? 'primary' : 'cinza3'">mdi-checkbox-blank-circle</v-icon>
        </v-system-bar>
        <v-row class="mt-12 mb-9">
          <v-col cols="1"></v-col>
          <v-col cols="10">
            <NewJob1
              v-on:title="r => (title = r)"
              v-on:category="r => (category = r)"
              v-on:contractType="r => (contractType = r)"
              v-on:advance="step++"
              v-if="step === 1"
            />
            <NewJob2
              v-on:about="r => (about = r)"
              v-on:languages="r => (languages = r)"
              v-on:back="step--"
              v-on:advance="step++"
              v-if="step === 2"
            />
            <NewJob3
              v-on:knowlegeAreas="r => (knowlegeAreas = r)"
              v-on:programmingLanguages="r => (programmingLanguages = r)"
              v-on:frameworks="r => (frameworks = r)"
              v-on:softSkills="r => (softSkills = r)"
              v-on:back="step--"
              v-on:advance="step++"
              v-if="step === 3"
            />
            <NewJob4
              v-on:perks="r => (perks = r)"
              v-on:salaryCurrency="r => (salary.currency = r)"
              v-on:salaryTimeFrame="r => (salary.timeFrame = r)"
              v-on:salaryMin="r => (salary.min = r)"
              v-on:salaryMax="r => (salary.max = r)"
              v-on:salaryRange="r => (salary.range = r)"
              v-on:back="step--"
              v-on:advance="step++"
              v-if="step === 4"
            />
            <NewJob5 v-on:back="step--" v-on:advance="preview" v-if="step === 5" />
            <JobDetails v-if="step === 6" />
          </v-col>
          <v-col cols="1"></v-col>
        </v-row>
      </v-card>
    </v-col>
    <v-col cols="2"></v-col>
  </v-row>
</template>

<script>
import 'Public/css/card.css';
import NewJob1 from './NewJob1';
import NewJob2 from './NewJob2';
import NewJob3 from './NewJob3';
import NewJob4 from './NewJob4';
import NewJob5 from './NewJob5';
import JobDetails from 'Components/Job/JobDetails';

export default {
  name: 'NewJob',
  components: {
    NewJob1,
    NewJob2,
    NewJob3,
    NewJob4,
    NewJob5,
    JobDetails,
  },
  data() {
    return {
      step: 1,
      title: '',
      category: '',
      contractType: '',
      about: '',
      languages: [],
      knowlegeAreas: [],
      programmingLanguages: [],
      frameworks: [],
      softSkills: [],
      perks: '',
      salary: {
        currency: '',
        timeFrame: '',
        min: '',
        max: '',
        range: false,
      },
    };
  },
  methods: {
    preview() {
      this.$router.push({
        name: 'Job Description',
      })
    },
    getPageTitle(page){
      switch (page){
        case 1:
          if (this.step === 1) return 'color: #FF9200'
          return 'color: #A1A1AC'

        case 2:
          if (this.step === 2) return 'color: #FF9200'
          return 'color: #A1A1AC'

        case 3:
          if (this.step === 3) return 'color: #FF9200'
          return 'color: #A1A1AC'

        case 4:
          if (this.step === 4) return 'color: #FF9200'
          return 'color: #A1A1AC'

      }
    },
  },
};
</script>

<style>
.v-text-field--outlined > .v-input__control > .v-input__slot {
  background: #fcfcff !important;
}
.v-text-field {
  width: 100%;
}
</style>
