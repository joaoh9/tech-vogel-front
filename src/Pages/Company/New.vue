<template>
  <div class="d-flex justify-center mt-4 mt-md-12">
    <Stepper ref="stepper" :stepsNames="$t('Company.new.steps')" v-model="currentStep" class="mb-6">
      <template v-slot:default="{}">
        <g-card>
          <template v-slot:card-header>
            <g-card-header :title="$t(`Company.new.page${currentStep + 1}`)" />
          </template>
          <template v-slot:card-content>
            <div v-bind:style="{ display: currentStep == 0 ? 'block' : 'none' }">
              <New1
                v-on:company-name="e => (company.name = e)"
                v-on:representative-name="e => (company.representativeName = e)"
                v-on:representative-email="e => (company.representativeEmail = e)"
                v-on:password="e => (company.password = e)"
              />
            </div>
            <div v-bind:style="{ display: currentStep == 1 ? 'block' : 'none' }">
              <New2
                v-on:location="e => (company.location = e)"
                v-on:about="e => (company.about = e)"
              />
            </div>
            <div v-bind:style="{ display: currentStep == 2 ? 'block' : 'none' }">
              <New3
                v-on:webpage="e => (company.links.webpage = e)"
                v-on:linkedin="e => (company.links.linkedin = e)"
                v-on:instagram="e => (company.links.instagram = e)"
                v-on:twitter="e => (company.links.twitter = e)"
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
