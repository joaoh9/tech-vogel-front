<template>
  <v-row class="mt-12">
    <v-col cols="2"></v-col>
    <v-col cols="8">
      <v-system-bar color="bg" style="margin-left: -50px; margin-right: -50px">
        <div v-html="getPageTitle(1)" class="overline" :style="getTitleColor(1)" :key="step + 1"></div>
        <v-spacer></v-spacer>
        <div v-html="getPageTitle(2)" class="overline" :style="getTitleColor(2)" :key="step + 2"></div>
        <v-spacer></v-spacer>
        <div v-html="getPageTitle(3)" class="overline" :style="getTitleColor(3)" :key="step + 3"></div>
        <v-spacer></v-spacer>
        <div v-html="getPageTitle(4)" class="overline" :style="getTitleColor(4)" :key="step + 4"></div>
      </v-system-bar>
      <v-card class="primary-card" elevation="6">
        <v-system-bar color="cinza4" style="border-radius: 6px; margin: -1px">
          <v-icon
            size="28px"
            style="margin: -10px"
            :color="step === 1 ? 'primary' : 'cinza3'"
          >mdi-checkbox-blank-circle</v-icon>
          <v-spacer></v-spacer>
          <v-icon
            size="28px"
            style="margin: 0px"
            :color="step === 2 ? 'primary' : 'cinza3'"
          >mdi-checkbox-blank-circle</v-icon>
          <v-spacer></v-spacer>
          <v-icon
            size="28px"
            style="margin: 0px"
            :color="step === 3 ? 'primary' : 'cinza3'"
          >mdi-checkbox-blank-circle</v-icon>
          <v-spacer></v-spacer>
          <v-icon
            size="28px"
            style="margin: -10px"
            :color="step === 4 ? 'primary' : 'cinza3'"
          >mdi-checkbox-blank-circle</v-icon>
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
              v-on:salaryRange="r => (salary.range = !salary.range)"
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
import LocaleHelper from 'Helpers/locale';

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
      const maxNewJobPageTitleLength = LocaleHelper(this.$t('Job.new'));
      console.log(maxNewJobPageTitleLength);
      const space = '&nbsp;';

      let pageTitle = this.$t(`Job.new._${page.toString()}.pageTitle`);
      console.log(pageTitle + '|');
      console.log(maxNewJobPageTitleLength - pageTitle.length);
      const ptLength = pageTitle.length;
      for (let i = 0; i <= maxNewJobPageTitleLength - ptLength; i++) {
        i % 2 === 0 ? (pageTitle = pageTitle + space) : (pageTitle = space + pageTitle);
      }

      console.log(pageTitle + '|');

      return '<p>' + pageTitle + '</p>';
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
