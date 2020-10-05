<template>
  <div class="d-flex justify-center mt-4 mt-md-12">
    <!-- <Stepper ref="stepper" :stepsNames="$t('Company.new.steps')" v-model="currentStep" class="mb-6">
      <template v-slot:default="{}">
        -->
    <g-card>
      <template v-slot:card-header>
        <g-card-header :title="$t(`Company.new.page1`)" />
      </template>
      <template v-slot:card-content>
        <div v-bind:style="{ display: currentStep == 0 ? 'block' : 'none' }">
          <About
            v-on:owner-id="e => (company.ownerId = e)"
            v-on:company-name="e => (company.name = e)"
            v-on:representative-name="e => (company.representative = e)"
            v-on:company-description="e => (company.companyDescription = e)"
          />
        </div>
        <!--
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
            -->
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
            @click="manageStepBack"
          />
          <g-btn :label="$t('Common.next')" type="primary" @click="manageNextStep" />
        </div>
      </template>
    </g-card>
    <!--  </template>
    </Stepper> -->
  </div>
</template>

<script>
// import Stepper from 'Components/Interface/Stepper';
import About from 'Pages/Company/_1About';
// import New2 from 'Pages/Company/New2';
// import New3 from 'Pages/Company/New3';
import CompanyController from 'Controllers/company';
import RulesHelper from 'Helpers/rules';

export default {
  name: 'New',
  props: {},
  mounted() {
    this.rules = new RulesHelper(this.$i18n.messages[this.$i18n.locale]);
  },
  components: {
    About,
    // New2,
    // New3,
    // Stepper,
  },
  data() {
    return {
      currentStep: 0,
      company: {
        ownerId: '',
        name: '',
        representative: '',
        companyDescription: '',
      },
    };
  },
  methods: {
    manageStepBack() {
      this.currentStep--;
    },
    manageNextStep() {
      switch (this.currentStep) {
        case 0:
          this.register();
          break;
        case 1:
        case 2:
        case 3:
      }
    },
    async register() {
      const companyController = new CompanyController();
      console.log('this.rules.min(3, this.company.name)');
      console.log(this.rules.min(3, this.company.name));
      console.log('this.rules.min(3, this.company.representative)');
      console.log(this.rules.min(3, this.company.representative));
      if (
        this.rules.min(3, this.company.name) !== true ||
        this.rules.min(3, this.company.representative) !== true
      ) {
        console.log('rules failed');
        return;
      }

      try {
        const res = await companyController.registerCompany({
          company: this.company,
        });
        console.log('res');
        console.log(res);
      } catch (e) {
        alert(e);
      }
    },
  },
};
</script>
