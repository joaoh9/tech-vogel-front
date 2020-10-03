<template>
  <div class="d-flex justify-center mt-4 mt-md-12">
    <Stepper :stepsNames="$t('CV.register.tabs')" v-model="currentStep">
      <template v-slot:default="{}" class="mb-6">
        <g-card>
          <template v-slot:card-header>
            <g-card-header
              :title="$t(`CV.register.${$t('CV.register.pages')[currentStep]}.title`)"
              :description="$t(`CV.register.${$t('CV.register.pages')[currentStep]}.description`)"
            />
          </template>
          <template v-slot:card-content>
            <div v-bind:style="{ display: currentStep == 0 ? 'block' : 'none' }">
              <Start v-on:manual-register="currentStep += 1" />
            </div>
            <div v-bind:style="{ display: currentStep == 1 ? 'block' : 'none' }">
              <Preferences
                v-on:job-category="e => (resume.jobInterests = e)"
                v-on:contract-type="e => (resume.contractType = e)"
              />
            </div>
            <div v-bind:style="{ display: currentStep == 2 ? 'block' : 'none' }">
              <PersonalInfo
                v-on:full-name="e => (resume.fullName = e)"
                v-on:location="
                  e => {
                    resume.location = e;
                  }
                "
              >
              </PersonalInfo>
            </div>
            <div v-bind:style="{ display: currentStep == 3 ? 'block' : 'none' }">
              <WorkExperience
                v-on:job="
                  e => {
                    resume.job = e;
                  }
                "
              >
              </WorkExperience>
            </div>
            <div v-bind:style="{ display: currentStep == 4 ? 'block' : 'none' }">
              <Skills v-on:skills="e => (resume.skills = e)"> </Skills>
            </div>
            <div v-bind:style="{ display: currentStep == 5 ? 'block' : 'none' }">
              <Education v-on:education="e => (resume.education = e)"> </Education>
            </div>
          </template>
          <template v-slot:buttons>
            <div
              :class="`d-flex ${currentStep === 1 ? 'justify-end' : 'justify-space-between'}  my-6`"
              style="z-index: -1"
            >
              <g-btn
                :label="$t('Common.back')"
                v-if="currentStep > 1"
                type="secondary"
                @click="currentStep--"
              />
              <g-btn
                v-if="currentStep > 0"
                :label="$t('Common.next')"
                type="primary"
                @click="currentStep++"
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
import 'Public/css/card.css';

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
        contractType: [],
        jobInterests: [],
        location: {
          city: '',
          country: '',
        },
        job: {
          company: {
            title: '',
          },
          position: '',
          from: {
            month: '',
            year: '',
          },
          to: {
            month: '',
            year: '',
          },
          jobDescription: '',
          currentJob: '',
        },
        skills: {
          programmingLanguages: '',
          frameworks: '',
          knowledgeAreas: '',
          softSkills: '',
        },
        education: {
          degree: '',
          type: '',
          description: '',
          institution: '',
          from: {
            year: '',
          },
          to: {
            year: '',
          },
        },
      },
    };
  },
  methods: {
    async register() {
      const resumeController = new ResumeController();
      const validResume = this.validateResume();
      if (validResume) {
        try {
          await resumeController.register({
            resume: this.resume,
          });
        } catch (e) {
          alert(e);
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
