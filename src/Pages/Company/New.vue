<template>
  <div>
    <PrimaryHeader
      :title="$t('company.new.getStarted')"
      :subtitle="$t('company.new.formInfo')"
      :cols="true"
    />
    <div class="d-flex justify-center mt-4 mt-md-12">
      <g-card>
        <template v-slot:card-header>
          <g-card-header :title="$t(`company.new.companyInfo`)" class="color-secondary" />
          <capt-1 class="mt-4">{{ $t('company.new.learnMore') }}</capt-1>
        </template>
        <template v-slot:card-content>
          <div v-bind:style="{ display: currentStep == 0 ? 'block' : 'none' }" class="mt-12">
            <About
              v-on:company-logo="e => (logo = e)"
              v-on:company-name="e => (company.name = e)"
              v-on:company-description="e => (company.description = e)"
              v-on:website="e => (company.links.website = e)"
              v-on:linkedin="e => (company.links.linkedin = e)"
              v-on:instagram="e => (company.links.instagram = e)"
              v-on:twitter="e => (company.links.twitter = e)"
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
              @click="manageStepBack"
            />
            <g-btn :label="$t('common.next')" type="primary" @click="manageNextStep" />
          </div>
        </template>
      </g-card>
    </div>
  </div>
</template>

<script>
import About from 'Pages/Company/_1About';
import PrimaryHeader from 'Components/Interface/PrimaryHeader';
import CompanyController from 'Controllers/company';
import UserController from 'Controllers/user';
import ProfilePictureController from 'Controllers/profilePic';
import RulesHelper from 'Helpers/rules';

export default {
  name: 'New',
  mounted() {
    this.rules = new RulesHelper(this.$i18n.messages[this.$i18n.locale]);
  },
  components: {
    About,
    PrimaryHeader,
  },
  data() {
    return {
      currentStep: 0,
      logo: {},
      company: {
        name: '',
        description: '',
        links: {
          website: '',
          linkedin: '',
          instagram: '',
          twitter: '',
        },
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
      const userController = new UserController();
      const profilePictureController = new ProfilePictureController();

      if (this.rules.min(3, this.company.name) !== true || !this.company.description) {
        this.$toast.error(this.$t('toast.error.writeNames'));
        return;
      }
      try {
        await companyController.save(this.company);
        await profilePictureController.save(this.logo);
        await userController.update({ side: 21 });
        this.$toast.success(this.$t('toast.success.savedCompany'));

        this.$router.push({
          path: '/jobs/new',
        });
      } catch (e) {
        this.$toast.error(this.$t('toast.error.saveCompany'));
      }
    },
  },
};
</script>
