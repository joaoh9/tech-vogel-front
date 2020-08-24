<template>
  <v-row class="mt-12">
    <v-col cols="2"></v-col>
    <v-col cols="8">
      <v-card class="primary-card" elevation="6" color="bg" :key="step">
        <v-system-bar
          class="d-flex justify-space-between"
          :style="`${getSystemBarColor()}; `"
          :key="step"
        >
          <div
            class="d-flex justify-center mb-9"
            style="flex-direction: column; "
            v-for="i of [1, 2, 3, 4]"
            :key="i"
          >
            <p>{{ getPageTitle(i) }}</p>
            <v-icon
              :key="i"
              size="28px"
              :color="step >= i ? 'primary' : 'cinza-lighten-3'"
              >mdi-checkbox-blank-circle
            </v-icon>
          </div>
        </v-system-bar>
        <v-row class="mt-12 mb-9">
          <v-col cols="1"></v-col>
          <v-col cols="10">
            <NewJob1
              v-on:title="r => (job.title = r)"
              v-on:experience-level="r => (job.experienceLevel = r)"
              v-on:contract-type="r => (job.contractType = r)"
              v-on:advance="step++"
              v-if="step === 1"
            />
            <NewJob2
              v-on:about="r => (job.about = r)"
              v-on:languages="r => (job.languages = r)"
              v-on:back="step--"
              v-on:advance="step++"
              v-if="step === 2"
            />
            <NewJob3
              v-on:knowlege-areas="r => (job.knowlegeAreas = r)"
              v-on:programming-languages="r => (job.programmingLanguages = r)"
              v-on:frameworks="r => (job.frameworks = r)"
              v-on:soft-skills="r => (job.softSkills = r)"
              v-on:back="step--"
              v-on:advance="step++"
              v-if="step === 3"
            />
            <NewJob4
              v-on:perks="r => (job.perks = r)"
              v-on:salary-currency="r => (job.salary.currency = r)"
              v-on:salary-time-frame="r => (job.salary.timeFrame = r)"
              v-on:salary-min="r => (job.salary.min = r)"
              v-on:salary-max="r => (job.salary.max = r)"
              v-on:salary-range="r => (job.salary.range = r)"
              v-on:back="step--"
              v-on:advance="preview"
              v-if="step === 4"
            />
            <!-- <NewJob5 v-on:back="step--" v-on:advance="preview" v-if="step === 5" /> -->
            <JobDetails :confirm="true" :job="job" v-if="step === 6" />
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
// // import NewJob5 from './NewJob5';
import JobDetails from 'Components/Job/JobDetails';

export default {
  name: 'NewJob',
  components: {
    NewJob1,
    NewJob2,
    NewJob3,
    NewJob4,
    // NewJob5,
    JobDetails,
  },
  data() {
    return {
      step: 1,
      job: {
        title: '',
        experienceLevel: '',
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
      },
    };
  },
  methods: {
    log(m) {
      console.log(m);
    },
    preview() {
      this.$router.push({
        name: 'Job Description',
      });
    },
    getTitleColor(page) {
      switch (page) {
        case 1:
          if (this.step === 1) return 'color: #FF9200';
          return 'color: #A1A1AC';

        case 2:
          if (this.step === 2) return 'color: #FF9200';
          return 'color: #A1A1AC';

        case 3:
          if (this.step === 3) return 'color: #FF9200';
          return 'color: #A1A1AC';

        case 4:
          if (this.step === 4) return 'color: #FF9200';
          return 'color: #A1A1AC';
      }
    },
    getPageTitle(page) {
      return this.$t('Job.new.page' + page.toString() + '.title');
    },
    getSystemBarColor() {
      switch (this.step) {
        case 1:
          return 'border-radius: 6px; margin: -1px; background: linear-gradient(to right, #FCFCFF 100%)';
        case 2:
          return 'border-radius: 6px; margin: -1px; background: linear-gradient(to right, #F1D6B2 16.665%, #FCFCFF 33.3334%)';
        case 3:
          return 'border-radius: 6px; margin: -1px; background: linear-gradient(to right, #F1D6B2 49.995%, #FCFCFF 66.667%)';
        case 4:
          return 'border-radius: 6px; margin: -1px; background: linear-gradient(to right, #F1D6B2 100%, #FCFCFF 33%)';
      }
    },
  },
};
</script>

<style>
.v-text-field {
  width: 100%;
}

.ql-container {
  font-family: Open Sans !important;
}
</style>
