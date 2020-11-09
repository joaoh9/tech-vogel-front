<template>
  <div class="d-flex justify-center mt-4 mt-md-12">
    <!-- <Stepper ref="stepper" :stepsNames="$t('company.new.steps')" v-model="currentStep" class="mb-6">
        -->
    <g-card>
      <template v-slot:card-header>
        <g-card-header :title="$t(`company.new.page1`)" />
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
            :label="$t('common.back')"
            v-if="currentStep > 0"
            type="secondary"
            @click="manageStepBack"
          />
          <g-btn :label="$t('common.next')" type="primary" @click="manageNextStep" />
        </div>
      </template>
    </g-card>
    <!-- </Stepper> -->
  </div>
</template>

<script>
// import Stepper from 'Components/Interface/Stepper';
import About from 'Pages/Company/_1About';
// import New2 from 'Pages/Company/New2';
// import New3 from 'Pages/Company/New3';
import CompanyController from 'Controllers/company';
import RulesHelper from 'Helpers/rules';
import StorageHelper from 'Helpers/storage';

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
      if (
        this.rules.min(3, this.company.name) !== true ||
        this.rules.min(3, this.company.representative) !== true
      ) {
        this.$toast.error(this.$t('toast.error.writeNames'));
        return;
      }
      try {
        const companyId =
          this.company.name.replace(/ /g, '-').replace(/[A-Z]/g, match => match.toLowerCase()) +
          Math.round(Math.random() * 10 ** 6).toString();

        await companyController.save({
          ...this.company,
          companyId,
        });
        this.$toast.success(this.$t('toast.success.savedCompany'));
        StorageHelper.saveState('companyId', companyId);
        this.$router.push({
          path: '/jobs/new',
        });
      } catch (e) {
        if (e.response.status === 409) {
          this.$toast.warning(this.$t('toast.warning.userHasCompany'));
        }
        this.$toast.error(this.$t('toast.error.saveCompany'));
      }
    },
  },
};

</script>
