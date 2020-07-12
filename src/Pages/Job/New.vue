<template>
  <v-row class="mt-12">
    <v-col cols="2"></v-col>
    <v-col cols="8">
      <v-card class="primary-card">
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
