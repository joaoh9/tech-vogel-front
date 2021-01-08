<template>
  <div class="d-flex align-center flex-column mt-4 mt-sm-12">
    <Stepper
      class="mt-4"
      :stepsNames="$t('user.settings.buttons').map(el => el.text)"
      v-model="currentStep"
    >
      <g-card-header
        class="color-secondary"
        :title="$t('common.settings')"
        :description="$t('user.settings.subtitle')"
      />
      <g-card>
        <template v-slot:card-content>
          <div v-bind:style="{ display: currentStep == 0 ? 'block' : 'none' }">
            <Personal
              v-on:company-logo="e => (company.logo = e)"
              v-on:updates="e => (company = e)"
            />
          </div>
        </template>

        <template v-slot:buttons>
          <div class="d-flex justify-space-between my-6" style="z-index: -1">
            <g-btn
              :label="$t('common.back')"
              type="secondary"
              @click="$router.push({ name: 'Company Dashboard' })"
            />
            <g-btn :label="$t('common.update')" type="primary" @click="update" />
          </div>
        </template>
      </g-card>
    </Stepper>
  </div>
</template>

<script>
import Stepper from 'Components/Interface/Stepper';
import Personal from './Personal';
import CompanyController from 'Controllers/company';

export default {
  name: 'SettingsOverview',
  components: {
    Stepper,
    Personal,
  },
  data() {
    return {
      currentStep: 0,
      company: {
        logo: {},
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
    async update() {
      const companyController = new CompanyController();

      this.loading = true;

      const obj = this.company;

      for (const key of [ 'name', 'description' ]) {
        if (!obj[key]) {
          delete obj[key];
        }
      }

      for (const key of [ 'website', 'linkedin', 'instagram', 'twitter' ]) {
        if (!obj.links[key]) {
          delete obj.links[key];
        }
      }

      for (const key of [ 'data64', 'name', 'size', 'type' ]) {
        if (!obj.logo[key]) {
          delete obj.logo;
          break;
        }
      }

      try {
        await companyController.update(obj);
        this.$toast.success(this.$t()); // TODO: Update that messages

        this.$router.push({
          name: 'Company Dashboard',
        });
      } catch (e) {
        this.$toast.error(this.$t());
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
