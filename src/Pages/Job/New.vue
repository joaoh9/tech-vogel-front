<template>
  <div class="d-flex justify-center mt-4 mt-md-12">
    <Stepper :stepsNames="$t('job.new.steppers')" v-model="currentStep" class="mb-6">
      <template v-slot:default="{}" class="mb-6">
        <g-card>
          <template v-slot:card-header>
            <g-card-header
              :title="getPageTitle(currentStep)"
              :description="getPageDescripton(currentStep)"
            />
          </template>
          <template v-slot:card-content>
            <div v-bind:style="{ display: currentStep == 0 ? 'block' : 'none' }">
              <BasicInfo
                v-on:title="r => (job_.title = r)"
                v-on:id="r => (job_.id = r)"
                v-on:experience-level="r => (job_.experienceLevel = r)"
                v-on:contract-type="r => (job_.contractType = r)"
                v-on:advance="step++"
              />
            </div>
            <div v-bind:style="{ display: currentStep == 1 ? 'block' : 'none' }">
              <About
                v-on:description="r => (job_.description = r)"
                v-on:back="step--"
                v-on:advance="step++"
              />
            </div>
            <div v-bind:style="{ display: currentStep == 2 ? 'block' : 'none' }">
              <Skills
                v-on:skills="r => (job_.skills = r)"
                v-on:back="step--"
                v-on:advance="step++"
              />
            </div>
            <div v-bind:style="{ display: currentStep == 3 ? 'block' : 'none' }">
              <Benefits
                v-on:benefits="r => (job_.benefits = r)"
                v-on:salary-currency="r => (job_.salary.currency = r)"
                v-on:salary-time-frame="r => (job_.salary.timeFrame = r)"
                v-on:salary-min="r => (job_.salary.min = r)"
                v-on:salary-max="r => (job_.salary.max = r)"
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
                :label="$t('common.back')"
                v-if="currentStep > 0"
                type="secondary"
                @click="currentStep--"
              />
              <g-btn
                :label="$t('common.next')"
                type="primary"
                @click="currentStep === 3 ? saveJob() : currentStep++"
              />
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
import JobController from 'Controllers/job';
import RandomizerHelper from 'Helpers/random';

export default {
  name: 'NewJob',
  params: {
    job: {
      type: Object,
      default: () => ({
        title: '',
        id: '',
        experienceLevel: '',
        contractType: '',
        description: '',
        skills: [],
        benefits: '',
        salary: {
          currency: 'USD',
          timeFrame: 'MONTHS',
          min: 0,
          max: 0,
        },
      }),
    },
  },
  components: {
    BasicInfo,
    About,
    Skills,
    Benefits,
    Stepper,
  },
  mounted() {
    this.jobs_ = this.job;
    this.randomizer = new RandomizerHelper();
    this.idSufix = this.randomizer.randomString({ size: 6 });
  },
  data() {
    return {
      currentStep: 0,
      step: 1,
      job_: {
        title: '',
        id: '',
        experienceLevel: '',
        contractType: '',
        description: '',
        skills: [],
        benefits: '',
        salary: {
          currency: 'USD',
          timeFrame: 'MONTHS',
          min: 0,
          max: 0,
        },
      },
    };
  },
  methods: {
    preview() {
      this.$router.push({
        name: 'Job Description',
        params: { job: this.job_ },
      });
    },
    async saveJob() {
      const jobController = new JobController();

      try {
        await jobController.save(this.job_);
        this.$toast.success('Job saved successfully');
      } catch (e) {
        this.$toast.error('There was an error when saving the job');
      }
    },
    getPageInfo() {
      return [
        this.$t('job.new.basicInfo'),
        this.$t('job.new.aboutTheRole'),
        this.$t('job.new.skillRequirements'),
        this.$t('job.new.salaryAndPerks'),
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
