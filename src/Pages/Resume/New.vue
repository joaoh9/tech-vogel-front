<template>
  <div class="d-flex justify-center mt-4 mt-md-12">
    <Stepper :stepsNames="$t('resume.register.tabs').map(s => s.name)" v-model="currentStep">
      <template v-slot:default="{}" class="mb-6">
        <g-card>
          <template v-slot:card-header>
            <g-card-header
              :title="
                $t(`resume.register.${$t('resume.register.tabs')[currentStep]['identifier']}.title`)
              "
              :description="
                $t(
                  `resume.register.${
                    $t('resume.register.tabs')[currentStep]['identifier']
                  }.description`
                )
              "
            />
          </template>
          <template v-slot:card-content>
            <div v-bind:style="{ display: currentStep == 0 ? 'block' : 'none' }">
              <Start v-on:manual-register="currentStep += 1" />
            </div>
            <div v-bind:style="{ display: currentStep == 1 ? 'block' : 'none' }">
              <Preferences
                v-on:job-interests="e => (resume.jobInterests = e)"
                v-on:contract-type="e => (resume.contractType = e)"
              />
            </div>
            <div v-bind:style="{ display: currentStep == 2 ? 'block' : 'none' }">
              <PersonalInfo
                v-on:full-name="e => (resume.fullName = e)"
                v-on:main-role="e => (resume.mainRole = e)"
                v-on:location="e => (resume.location = e)"
                v-on:personal-bio="e => (resume.biography.personalBio = e)"
              >
              </PersonalInfo>
            </div>
            <div v-bind:style="{ display: currentStep == 3 ? 'block' : 'none' }">
              <WorkExperience v-on:update-item="e => (resume.workHistory = e)"> </WorkExperience>
            </div>
            <div v-bind:style="{ display: currentStep == 4 ? 'block' : 'none' }">
              <Skills v-on:skills="e => (resume.skills = e)" />
            </div>
            <div v-bind:style="{ display: currentStep == 5 ? 'block' : 'none' }">
              <Education v-on:update-item="e => (resume.education = e)"> </Education>
            </div>
          </template>
          <template v-slot:buttons>
            <div
              :class="`d-flex ${currentStep === 1 ? 'justify-end' : 'justify-space-between'}  my-6`"
              style="z-index: -1"
            >
              <g-btn
                :label="$t('common.back')"
                v-if="currentStep > 1"
                type="secondary"
                @click="currentStep--"
              />
              <g-btn
                v-if="currentStep > 0 && currentStep < lastStep"
                :label="$t('common.next')"
                type="primary"
                @click="currentStep++"
              />
              <g-btn
                v-if="currentStep === lastStep"
                :label="$t('common.finish')"
                type="primary"
                @click="saveResume"
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
import Start from './_0Start';
import Preferences from './_1Preferences';
import PersonalInfo from './_2PersonalInfo';
import WorkExperience from './_3WorkExperience';
import Skills from './_4Skills';
import Education from './_5Education';

import ResumeController from 'Controllers/resume';

export default {
  name: 'NewJob',
  components: {
    Stepper,
    Start,
    Preferences,
    PersonalInfo,
    WorkExperience,
    Skills,
    Education,
  },
  data() {
    return {
      educationComponent: Education,
      currentStep: 0,
      resume: {
        cases: [],
        customSkills: [],
        biography: {
          birthDate: '1990-01-01',
          personalBio: '',
        },
        jobInterests: [],
        contractType: [],
        mainRole: '',
        location: {
          city: '',
          country: '',
        },
        workHistory: [],
        skills: {
          techSkills: [],
          softSkills: [],
          languages: [],
        },
        education: [
          {
            degree: '',
            institutionType: '',
            description: '',
            institution: '',
            startDate: '',
            endDate: '',
          },
        ],
      },
    };
  },
  computed: {
    lastStep: function _() {
      return (this.$t('resume.register.tabs') || []).length - 1;
    },
  },
  methods: {
    async saveResume() {
      const resumeController = new ResumeController();
      const validResume = this.validateResume();

      const resume = Object.assign(
        {
          workFieldId: 'it',
        },
        this.resume,
      );
      resume.education = {
        courses: [],
        educationInstitutions: this.resume.education,
        researches: [],
      };
      (resume.education.educationInstitutions || []).forEach(edInst => {
        edInst.location = {
          city: 'Belo Horizonte',
          country: 'BRA',
        };
      });
      if (validResume) {
        try {
          await resumeController.save(resume);
          this.$router.push({
            path: '/dashboard',
          });
        } catch (e) {
          this.$toast.error('There was an error saving your resume');
        }
      }
    },
    validateResume() {
      return true; // TODO
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
