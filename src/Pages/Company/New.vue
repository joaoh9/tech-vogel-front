<template>
  <div class="container">
    <v-card class="primary-card">
      <v-row>
        <v-col cols="1"></v-col>
        <v-col cols="10">
          <v-form>
            <v-stepper v-model="currentStep">
              <v-stepper-items>
                <v-stepper-content step="1">
                  <New1
                    v-on:company-name="e => (company.name = e)"
                    v-on:representative-name="e => (company.representativeName = e)"
                    v-on:representative-email="e => (company.representativeEmail = e)"
                    v-on:password="e => (company.password = e)"
                  ></New1>
                  <div class="d-flex justify-end flex-fill m-3">
                    <v-btn large color="primary" @click="currentStep += 1">Next</v-btn>
                  </div>
                </v-stepper-content>
                <v-stepper-content step="2">
                  <New2
                    v-on:location="e => (company.location = e)"
                    v-on:about="e => (company.about = e)"
                  ></New2>
                  <div class="d-flex justify-space-between">
                    <v-btn large color="secondary" @click="currentStep -= 1">Back</v-btn>
                    <v-btn
                      large
                      color="primary"
                      @click="currentStep += 1"
                      class="align-self-end"
                    >Next</v-btn>
                  </div>
                </v-stepper-content>
                <v-stepper-content step="3">
                  <New3
                    v-on:webpage="e => (company.links.webpage = e)"
                    v-on:linkedin="e => (company.links.linkedin = e)"
                    v-on:instagram="e => (company.links.instagram = e)"
                    v-on:twitter="e => (company.links.twitter = e)"
                  ></New3>
                  <div class="d-flex justify-space-between">
                    <v-btn large color="secondary" @click="currentStep -= 1">Back</v-btn>
                    <v-btn
                      large
                      color="success"
                      @click="register()"
                      class="align-self-end"
                    >Finish</v-btn>
                  </div>
                </v-stepper-content>
              </v-stepper-items>
            </v-stepper>
          </v-form>
        </v-col>
        <v-col cols="1"></v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
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
  },
  data() {
    return {
      currentStep: 1,
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
          .then((res) => {
            console.log('res');
            console.log(res);
          })
          .catch((e) => {
            console.log('e');
            console.log(e);
          });
      }
    },
  },
};
</script>

