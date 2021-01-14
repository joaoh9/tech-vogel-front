<template>
  <div>
    <form-input :title="$t('company.new.logo.title')" />
    <v-file-input
      outlined
      :placeholder="$t('company.new.logo.placeholder')"
      v-model="company.logo"
      @change="handleFileUpload"
    >
    </v-file-input>

    <form-input :title="$t('company.new.companyName')" />
    <v-text-field
      outlined
      :rules="[rules.min(3, company.name), rules.max(200, company.name)]"
      v-model="company.name"
      @input="$emit('updates', company)"
      data-cy="register-company-name"
    />

    <form-input :title="$t('company.new.aboutYourCompany.title')" />
    <v-textarea
      v-model="company.description"
      outlined
      :rules="[rules.min(10, company.description), rules.max(5000, company.description)]"
      @input="$emit('updates', company)"
    />

    <form-input :title="$t('common.links.webpage.title')" />
    <v-text-field
      :placeholder="$t('common.links.webpage.placeholder')"
      v-model="company.links.website"
      @input="$emit('updates', company)"
      outlined
      :rules="[rules.max(200, company.links.website)]"
    />

    <form-input :title="$t('common.links.linkedin.title')" />
    <v-text-field
      :placeholder="$t('common.links.linkedin.placeholder')"
      v-model="company.links.linkedin"
      @input="$emit('updates', company)"
      outlined
      :rules="[rules.max(200, company.links.linkedin)]"
    />

    <form-input :title="$t('common.links.instagram.title')" />
    <v-text-field
      :placeholder="$t('common.links.instagram.placeholder')"
      v-model="company.links.instagram"
      @input="$emit('updates', company)"
      outlined
      :rules="[rules.max(200, company.links.instagram)]"
    />

    <form-input :title="$t('common.links.twitter.title')" />
    <v-text-field
      :placeholder="$t('common.links.twitter.placeholder')"
      v-model="company.links.twitter"
      @input="$emit('updates', company)"
      outlined
      data-cy="register-company-desc"
      :rules="[rules.max(200, company.links.twitter)]"
    />
  </div>
</template>

<script>
import RulesHelper from 'Helpers/rules';
import config from '@config';
import CompanyController from 'Controllers/company';

const MB = 1000 * 1000;

export default {
  name: 'Personal',
  mounted() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;

    this.rules = new RulesHelper(this.$i18n.messages[this.$i18n.locale]);
    this.getCompanyInfo();
  },
  data() {
    return {
      company: {
        logo: null,
        name: '',
        description: '',
        links: {
          website: '',
          linkedin: this.$t('common.links.linkedin.placeholder'),
          instagram: this.$t('common.links.instagram.placeholder'),
          twitter: this.$t('common.links.twitter.placeholder'),
        },
      },
      rules: {
        min: () => true,
        max: () => true,
      },
    };
  },
  methods: {
    async getCompanyInfo() {
      const companyController = new CompanyController();

      try {
        const data = await companyController.getByCurrentUser();
        this.company = data;
      } catch (e) {
        this.$toast.error(this.$t('toast.error.retrieveCompany'));
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
