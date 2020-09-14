<template>
  <div>
    <v-row class="mt-12">
      <v-col cols="2"></v-col>
      <v-col cols="8">
        <v-card class="primary-card" elevation="6" color="bg">
          <Stepper ref="stepper" :stepsNames="$t('Company.new.steps')" v-model="currentStep">
            <template v-slot:default="{}">
              <div v-bind:style="{ display: currentStep == 0 ? 'block' : 'none' }">
                <New1
                  v-on:company-name="e => (company.name = e)"
                  v-on:representative-name="e => (company.representativeName = e)"
                  v-on:representative-email="e => (company.representativeEmail = e)"
                  v-on:password="e => (company.password = e)"
                ></New1>
                <div class="d-flex justify-end">
                  <v-btn large color="primary" @click="currentStep += 1" class="align-self-end">
                    {{ $t('Common.next') }}
                  </v-btn>
                </div>
              </div>
              <div v-bind:style="{ display: currentStep == 1 ? 'block' : 'none' }">
                <New2
                  v-on:location="e => (company.location = e)"
                  v-on:about="e => (company.about = e)"
                ></New2>
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
                <New3
                  v-on:webpage="e => (company.links.webpage = e)"
                  v-on:linkedin="e => (company.links.linkedin = e)"
                  v-on:instagram="e => (company.links.instagram = e)"
                  v-on:twitter="e => (company.links.twitter = e)"
                ></New3>
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
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Stepper from 'Components/Interface/Stepper';
import New1 from 'Pages/Company/New1';
import New2 from 'Pages/Company/New2';
import New3 from 'Pages/Company/New3';
import CompanyController from 'Controllers/company';

export default {
  name: 'New',
  props: {},
  components: {
    New1,
    New2,
    New3,
    Stepper,
  },
  data() {
    return {
      currentStep: 0,
      company: {
        name: '',
        representativeName: '',
        representativeEmail: '',
        password: '',
        location: '',
        about: '',
        links: { webpage: '', linkedin: '', instagram: '', twitter: '' },
      },
    };
  },
  methods: {
    register() {
      const companyController = CompanyController();
      if (this.company) {
        companyController
          .registerCompany({
            company: this.company,
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
