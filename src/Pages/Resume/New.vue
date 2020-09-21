<template>
  <div class="d-flex justify-center mt-12">
    <g-card>
      <template v-slot:card-content>
        <Stepper ref="stepper" :stepsNames="$t('CV.register.tabs')" v-model="currentStep">
          <template v-slot:default="{}">
            <div v-bind:style="{ display: currentStep == 0 ? 'block' : 'none' }">
              <Start v-on:manual-register="currentStep += 1"></Start>
            </div>
            <div v-bind:style="{ display: currentStep == 1 ? 'block' : 'none' }">
              <Preferences
                v-on:job-category="e => (resume.jobCategory = e)"
                v-on:job-type="e => (resume.jobType = e)"
              ></Preferences>
              <div class="d-flex justify-space-between">
                <v-btn large outlined color="tertiary" @click="currentStep -= 1">
                  {{ $t('Common.back') }}
                </v-btn>
                <v-btn large color="primary" @click="currentStep += 1" class="align-self-end">
                  {{ $t('Common.next') }}
                </v-btn>
              </div>
            </div>
            <div v-bind:style="{ display: currentStep == 2 ? 'block' : 'none' }">
              <PersonalInfo
                v-on:full-name="e => (resume.fullName = e)"
                v-on:location="
                  e => {
                    resume.location = e;
                  }
                "
              ></PersonalInfo>
              <div class="d-flex justify-space-between">
                <v-btn large outlined color="tertiary" @click="currentStep -= 1">
                  {{ $t('Common.back') }}
                </v-btn>
                <v-btn large color="primary" @click="currentStep += 1" class="align-self-end">
                  {{ $t('Common.next') }}
                </v-btn>
              </div>
            </div>
            <div v-bind:style="{ display: currentStep == 3 ? 'block' : 'none' }">
              <WorkExperience
                v-on:job="
                  e => {
                    resume.jobDescription = e;
                  }
                "
              ></WorkExperience>
              <div class="d-flex justify-space-between">
                <v-btn large outlined color="tertiary" @click="currentStep -= 1">
                  {{ $t('Common.back') }}
                </v-btn>
                <v-btn large color="primary" @click="currentStep += 1" class="align-self-end">
                  {{ $t('Common.next') }}
                </v-btn>
              </div>
            </div>
            <div v-bind:style="{ display: currentStep == 4 ? 'block' : 'none' }">
              <Skills v-on:skills="e => (resume.skills = e)"></Skills>
              <div class="d-flex justify-space-between">
                <v-btn large outlined color="tertiary" @click="currentStep -= 1">
                  {{ $t('Common.back') }}
                </v-btn>
                <v-btn large color="primary" @click="currentStep += 1" class="align-self-end">
                  {{ $t('Common.next') }}
                </v-btn>
              </div>
            </div>
            <div v-bind:style="{ display: currentStep == 5 ? 'block' : 'none' }">
              <Education v-on:education="e => (resume.education = e)"></Education>
              <div class="d-flex justify-space-between">
                <v-btn large outlined color="tertiary" @click="currentStep -= 1">
                  {{ $t('Common.back') }}
                </v-btn>
                <v-btn large color="primary" @click="currentStep += 1" class="align-self-end">
                  {{ $t('Common.finish') }}
                </v-btn>
              </div>
            </div>
          </template>
        </Stepper>
      </template>
    </g-card>
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
      currentStep: 0,
      resume: {
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
    register() {
      const resumeController = ResumeController();
      if (this.resume) {
        resumeController
          .register({
            resume: this.resume,
          })
          .then(res => {
            console.log('res');
            console.log(res);
          })
          .catch(e => {
            console.log('e');
            console.log(e);
          });
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
