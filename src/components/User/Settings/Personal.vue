<template>
  <div>
   <ImageUploader
      :message="$t('company.new.logo.placeholder')"
      :_data64="currentLogo"
      :key="loading"
      v-on:image-data="e => (company.logo = e)"
    />

    <form-input :title="$t('company.new.companyName')" />
    <v-text-field
      outlined
      :rules="[rules.min(3, company.name), rules.max(200, company.name)]"
      counter="200"
      v-model="company.name"
      @input="$emit('updates', company)"
      data-cy="register-company-name"
    />

    <form-input :title="$t('company.new.aboutYourCompany.title')" />
    <v-textarea
      v-model="company.description"
      outlined
      counter="5000"
      :rules="[
        rules.min(10, company.description),
        rules.max(5000, company.description),
      ]"
    />

    <form-input :title="$t('common.links.webpage.title')" />
    <v-text-field
      :placeholder="$t('common.links.webpage.placeholder')"
      v-model="company.links.website"
      @input="$emit('updates', company)"
      outlined
      counter="200"
      :rules="[rules.max(200, company.links.website)]"
    />

    <form-input :title="$t('common.links.linkedin.title')" />
    <v-text-field
      :placeholder="$t('common.links.linkedin.placeholder')"
      v-model="company.links.linkedin"
      @input="$emit('updates', company)"
      outlined
      counter="200"
      :rules="[rules.max(200, company.links.linkedin)]"
    />

    <form-input :title="$t('common.links.instagram.title')" />
    <v-text-field
      :placeholder="$t('common.links.instagram.placeholder')"
      v-model="company.links.instagram"
      @input="$emit('updates', company)"
      outlined
      counter="200"
      :rules="[rules.max(200, company.links.instagram)]"
    />

    <form-input :title="$t('common.links.twitter.title')" />
    <v-text-field
      :placeholder="$t('common.links.twitter.placeholder')"
      v-model="company.links.twitter"
      @input="$emit('updates', company)"
      outlined
      counter="200"
      data-cy="register-company-desc"
      :rules="[rules.max(200, company.links.twitter)]"
    />
  </div>
</template>

<script>
import RulesHelper from 'Helpers/rules';
import config from '@config';
import CompanyController from 'Controllers/company';
import ImageUploader from 'Components/Interface/ImageUploader';
import 'cropperjs/dist/cropper.css';
const MB = 1000 * 1000;

export default {
  name: 'CompanyUpdate',
  components: {
    ImageUploader,
  },
  mounted() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;

    this.rules = new RulesHelper(this.$i18n.messages[this.$i18n.locale]);
    this.getCompanyInfo();
  },
  data() {
    return {
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
      loading: true,
      currentLogo: '',
      rules: {
        min: () => true,
        max: () => true,
      },
    };
  },
  methods: {
    async getCompanyInfo() {
      const companyController = new CompanyController();

      this.loading = true;

      try {
        const data = await companyController.getByCurrentUser();
        this.currentLogo = data.logo || {};
        this.company.name = data.name || '';
        this.company.description = data.description || '';
        this.company.links.website = data.links.website || '';
        this.company.links.linkedin = data.links.linkedin || '';
        this.company.links.instagram = data.links.instagram || '';
        this.company.links.twitter = data.links.twitter || '';
      } catch (e) {
        this.$toast.error(this.$t('toast.error.retrieveCompany'));
      } finally {
        this.loading = false;
      }

      this.$emit('updates', this.company);
    },
    getBase64(file) {
      return new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
      });
    },
    async handleFileUpload() {
      if (this.company.logo.size > config.maxFileSize) {
        this.$toast.error(
          this.$t('toast.error.fileExceeds', {
            filename: this.company.logo.name,
            fileSize: config.maxFileSize / MB,
          }),
        );

        this.company.logo = null;

        return;
      }
      const data64 = await this.getBase64(this.company.logo);
      const file = {
        data64,
        name: this.company.logo.name,
        size: this.company.logo.size,
        type: this.company.logo.type,
      };

      if (!config.imageFileFormats.find(el => el === this.company.logo.type)) {
        this.company.logo = {};

        return this.$toast.warning(this.$t('toast.warning.imageFileFormat'));
      }

      this.$emit('company-logo', file);
    },
  },
};
</script>

<style></style>
