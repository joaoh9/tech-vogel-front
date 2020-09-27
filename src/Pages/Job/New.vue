<template>
  <div class="d-flex justify-center mt-12">
    <Stepper :stepsNames="$t('Job.new.steppers')" v-model="currentStep" class="mb-6">
      <template v-slot:default="{}" class="mb-6">
        <g-card>
          <template v-slot:card-header>
            <g-card-header :title="$t(`Job.new.page${currentStep + 1}.title`)" />
          </template>
          <template v-slot:card-content>
            <div v-bind:style="{ display: currentStep == 0 ? 'block' : 'none' }">
              <BasicInfo
                v-on:title="r => (job.title = r)"
                v-on:experience-level="r => (job.experienceLevel = r)"
                v-on:contract-type="r => (job.contractType = r)"
                v-on:advance="step++"
              />
            </div>
            <div v-bind:style="{ display: currentStep == 1 ? 'block' : 'none' }">
              <About
                v-on:about="r => (job.about = r)"
                v-on:languages="r => (job.languages = r.map(l => l.code))"
                v-on:back="step--"
                v-on:advance="step++"
              />
            </div>
            <div v-bind:style="{ display: currentStep == 2 ? 'block' : 'none' }">
              <Skills
                v-on:knowlege-areas="r => (job.knowlegeAreas = r)"
                v-on:programming-languages="r => (job.programmingLanguages = r)"
                v-on:frameworks="r => (job.frameworks = r)"
                v-on:soft-skills="r => (job.softSkills = r)"
                v-on:back="step--"
                v-on:advance="step++"
              />
            </div>
            <div v-bind:style="{ display: currentStep == 3 ? 'block' : 'none' }">
              <Benefits
                v-on:perks="r => (job.perks = r)"
                v-on:salary-currency="r => (job.salary.currency = r)"
                v-on:salary-time-frame="r => (job.salary.timeFrame = r)"
                v-on:salary-min="r => (job.salary.min = r)"
                v-on:salary-max="r => (job.salary.max = r)"
                v-on:salary-range="r => (job.salary.range = r)"
                v-on:back="step--"
                v-on:advance="preview"
              />
            </div>
          </template>
          <template v-slot:buttons>
            <div
              :class="`d-flex ${currentStep === 0 ? 'justify-end' : 'justify-space-between'}  ma-6`"
              style="z-index: -1"
            >
              <g-btn
                :label="$t('Common.back')"
                v-if="currentStep > 0"
                type="secondary"
                @click="currentStep--"
              />
              <g-btn :label="$t('Common.next')" type="primary" @click="currentStep++" />
            </div>
          </template>
        </g-card>
      </template>
    </Stepper>
  </div>
</template>

<script>
import Stepper from 'Components/Interface/Stepper';
import BasicInfo from './_1BasicInfo';
import About from './_2About';
import Skills from './_3Skills';
import Benefits from './_4Benefits';

export default {
  name: 'NewJob',
  components: {
    BasicInfo,
    About,
    Skills,
    Benefits,
    Stepper,
  },
  data() {
    return {
      currentStep: 0,
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
