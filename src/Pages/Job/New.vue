<template>
  <div class="d-flex flex-column align-center mt-4 mt-sm-12">
    <Stepper :stepsNames="$t('job.new.steppers')" v-model="currentStep" class="mb-6">
      <g-card>
        <template v-slot:card-header>
          <g-card-header
            class="color-secondary"
            :title="getPageTitle(currentStep)"
            :description="getPageDescripton(currentStep)"
          />
        </template>
        <template v-slot:card-content>
          <div v-bind:style="{ display: currentStep == 0 ? 'block' : 'none' }">
            <BasicInfo
              :key="loaded"
              :job="{
                title: (job && job.title) || '',
                experienceLevel: (job && job.experienceLevel) || '',
                contractType: (job && job.contractType) || '',
              }"
              v-on:title="r => (job_.title = r)"
              v-on:experience-level="r => (job_.experienceLevel = r)"
              v-on:contract-type="r => (job_.contractType = r)"
            />
          </div>
          <div v-bind:style="{ display: currentStep == 1 ? 'block' : 'none' }">
            <About
              :key="loaded"
              :job="{ description: (job && job.description) || '' }"
              v-on:description="r => (job_.description = r)"
            />
          </div>
          <div v-bind:style="{ display: currentStep == 2 ? 'block' : 'none' }">
            <Skills
              :key="loaded"
              :job="{
                skills: (job && job.skills) || null,
                techSkills: (job && job.skills && job.skills.techSkills) || null,
                softSkills: (job && job.skills && job.skills.softSkills) || null,
                languages: (job && job.skills && job.skills.languages) || null,
              }"
              v-on:skills="r => (job_.skills = r)"
              from="job"
            />
          </div>
          <div v-bind:style="{ display: currentStep == 3 ? 'block' : 'none' }">
            <Benefits
              :key="loaded"
              :job="{
                perks: (job && job.perks) || '',
                salary: (job && job.salary) || null,
              }"
              v-on:perks="r => (job_.perks = r)"
              v-on:salary-currency="r => (job_.salary.currency = r)"
              v-on:salary-time-frame="r => (job_.salary.timeFrame = r)"
              v-on:salary-min="r => (job_.salary.min = r)"
              v-on:salary-max="r => (job_.salary.max = r)"
            />
          </div>
        </template>
        <template v-slot:buttons>
          <div class="d-flex justify-space-between my-6" style="z-index: -1">
            <g-btn
              :label="$t('common.back')"
              v-if="currentStep >= 0"
              type="secondary"
              @click="
                currentStep === 0 ? $router.push({ name: 'Company Dashboard' }) : currentStep--
              "
            />
            <g-btn
              :label="currentStep === 3 ? $t('common.preview') : $t('common.next')"
              type="primary"
              @click="checkInputsAndFollowUp()"
            />
          </div>
        </template>
      </g-card>
    </Stepper>
  </div>
</template>

<script>
import Stepper from 'Components/Interface/Stepper';
import BasicInfo from './_1BasicInfo';
import About from './_2About';
import Skills from 'Components/General/SkillsSelection';
import Benefits from './_4Benefits';
import CompanyController from 'Controllers/company';
import JobController from 'Controllers/job';
import UserController from 'Controllers/user';
import config from '@config';
import RulesHelper from 'Helpers/rules';

export default {
  name: 'NewJob',
  props: {
    editingJobPosted: {
      type: Boolean,
      default: false,
    },
    _job: Object,
  },
  components: {
    BasicInfo,
    About,
    Skills,
    Benefits,
    Stepper,
  },
  async mounted() {
    this.rules = new RulesHelper(this.$i18n.messages[this.$i18n.locale]);
    if (this.$route.params.id) {
      this.job = await new JobController().getById(this.$route.params.id);
      this.job_ = this.job;
      this.loaded = true;
    } else if (this._job) {
      this.job_.title = this._job.title || '';
      this.job_.experienceLevel = this._job.experienceLevel || '';
      this.job_.contractType = this._job.contractType || '';
      this.job_.description = this._job.description || '';
      this.job_.skills = this._job.skills || '';
      this.job_.perks = this._job.perks || '';
      this.job_.salary = this._job.salary || '';
      this.job_.skills = this._job.skills || {
        techSkills: [],
        softSkills: [],
        languages: [],
      };
      this.job.title = this._job.title || '';
      this.job.experienceLevel = this._job.experienceLevel || '';
      this.job.contractType = this._job.contractType || '';
      this.job.description = this._job.description || '';
      this.job.skills = this._job.skills || '';
      this.job.perks = this._job.perks || '';
      this.job.salary = this._job.salary || '';
      this.job.skills = this._job.skills || {
        techSkills: [],
        softSkills: [],
        languages: [],
      };
    }
    this.getCompanyInfo();
  },
  data() {
    return {
      currentStep: 0,
      step: 1,
      job: {},
      loaded: false,
      job_: {
        title: '',
        experienceLevel: 'junior',
        contractType: '2',
        description: '',
        skills: {
          techSkills: [],
          softSkills: [],
          languages: [],
        },
        perks: '',
        salary: {
          currency: 'USD',
          timeFrame: 'MONTHS',
          min: 0,
          max: 0,
          range: false,
        },
      },
      company: {},
    };
  },
  methods: {
    previewJob() {
      this.$router.push({
        name: 'Job Description',
        params: {
          job_: this.job_,
          company_: this.company,
          editMode: true,
          savedJobId: this.$route.params.id || '',
        },
      });
    },
    async getCompanyInfo() {
      const companyController = new CompanyController();
      try {
        this.company = await companyController.getByCurrentUser();
      } catch (e) {
        this.$toast.error(this.$t('toast.error.retrieveCompanyInfo'));
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
    async checkInputsAndFollowUp() {
      const userController = new UserController();

      switch (this.currentStep) {
        case 0:
          document.body.scrollTop = 0; // For Safari
          document.documentElement.scrollTop = 0;
          if (this.job_.title && this.job_.experienceLevel && this.job_.contractType) {
            this.currentStep++;
          } else {
            this.$toast.warning(this.$t('toast.warning.fillAll'));
          }
          break;
        case 1:
          document.body.scrollTop = 0; // For Safari
          document.documentElement.scrollTop = 0;
          if (this.job_.description && this.rules.max(20000, this.job_.description) === true) {
            this.currentStep++;
          } else {
            this.$toast.warning(this.$t('toast.warning.detailedInfo'));
          }
          break;
        case 2:
          document.body.scrollTop = 0; // For Safari
          document.documentElement.scrollTop = 0;
          for (const skill of Object.keys(this.job_.skills)) {
            const skillValidated = this.validateSkills(skill);
            if (!skillValidated) {
              return;
            }
          }
          this.currentStep++;
          break;
        case 3:
          document.body.scrollTop = 0; // For Safari
          document.documentElement.scrollTop = 0;
          if (this.job_.salary.timeFrame && this.rules.isNumber(this.job_.salary.min)) {
            this.previewJob();
          } else {
            this.$toast.warning(this.$t('toast.warning.fillAll'));
          }

          await userController.update({ side: 22 });

          break;
      }
    },

    validateSkills(skill) {
      let validated = true;
      if (this.job_.skills[skill].length < config.skills[skill].min) {
        this.$toast.warning(
          this.$t('job.selectAtLeast', {
            min: config.skills[skill].min,
            skillName: this.$t(`enums.skills.${skill}`),
          }),
        );

        validated = false;
      }
      if (this.job_.skills[skill].length > config.skills[skill].max) {
        this.$toast.warning(
          this.$t('job.selectMaximum', {
            max: config.skills[skill].max,
            skillName: this.$t(`enums.skills.${skill}`),
          }),
        );
        validated = false;
      }
      return validated;
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
