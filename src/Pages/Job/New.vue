<template>
  <div class="d-flex justify-center mt-4 mt-md-12">
    <Stepper :stepsNames="$t('Job.new.steppers')" v-model="currentStep" class="mb-6">
      <template v-slot:default="{}" class="mb-6">
        <g-card>
          <template v-slot:card-header>
            <g-card-header
              :title="getPageTitle(currentStep)"
              :description="getPageDescripton(currentStep)"
            />
          </template>
          <template v-slot:card-content>
            {{ job }}
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
                v-on:skills="r => (job.skills = r)"
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
              :class="`d-flex ${currentStep === 0 ? 'justify-end' : 'justify-space-between'}  my-6`"
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
        <g-alert
          :succesMessage="$t('Signup.resendConfirmationCode.success')"
          :errorMessage="$t('Signup.resendConfirmationCode.error')"
          v-on:success="s => (requestSuccess = s)"
          v-on:error="s => (requestError = s)"
          :successVar="requestSuccess"
          :errorVar="requestError"
        />
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
import JobController from 'Controllers/job';

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
      requestSuccess: false,
      requestError: false,
      job: {
        title: '',
        experienceLevel: '',
        contractType: '',
        about: '',
        languages: [],
        skills: [],
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
        params: { job: this.job },
      });
    },
    async saveJob() {
      const jobController = new JobController();

      try {
        await jobController.save(this.job);
      } catch (e) {
        this.requestError = true;
      }
    },
    getPageInfo() {
      return [
        this.$t('Job.new.basicInfo'),
        this.$t('Job.new.aboutTheRole'),
        this.$t('Job.new.skillRequirements'),
        this.$t('Job.new.salaryAndPerks'),
      ];
    },
    getPageTitle(currentStep) {
      return this.getPageInfo()[currentStep].title;
    },
    getPageDescripton(currentStep) {
      return this.getPageInfo()[currentStep].description;
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
