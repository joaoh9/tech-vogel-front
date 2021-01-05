<template>
  <div>
    <form-input :title="$t('company.new.logo.title')" />
    <v-file-input
      outlined
      :placeholder="$t('company.new.logo.placeholder')"
      v-model="logo"
      @change="handleFileUpload"
    >
    </v-file-input>

    <form-input :title="$t('company.new.companyName')" required />
    <v-text-field
      outlined
      :rules="[rules.min(3, name), rules.required(name), rules.max(200, name)]"
      v-model="name"
      @input="$emit('company-name', name)"
      data-cy="register-company-name"
    />

    <form-input :title="$t('company.new.aboutYourCompany.title')" required />
    <v-textarea
      v-model="description"
      outlined
      :rules="[
        rules.min(10, description),
        rules.max(5000, description),
        rules.required(description),
      ]"
    />

    <form-input required :title="$t('common.links.webpage.title')" />
    <v-text-field
      :placeholder="$t('common.links.webpage.placeholder')"
      v-model="website"
      @input="$emit('website', website)"
      outlined
      :rules="[rules.max(200, website)]"
    />

    <form-input :title="$t('common.links.linkedin.title')" />
    <v-text-field
      :placeholder="$t('common.links.linkedin.placeholder')"
      v-model="linkedin"
      @input="$emit('linkedin', linkedin)"
      outlined
      :rules="[rules.max(200, linkedin)]"
    />

    <form-input :title="$t('common.links.instagram.title')" />
    <v-text-field
      :placeholder="$t('common.links.instagram.placeholder')"
      v-model="instagram"
      @input="$emit('instagram', instagram)"
      outlined
      :rules="[rules.max(200, instagram)]"
    />

    <form-input :title="$t('common.links.twitter.title')" />
    <v-text-field
      :placeholder="$t('common.links.twitter.placeholder')"
      v-model="twitter"
      @input="$emit('twitter', twitter)"
      outlined
      data-cy="register-company-desc"
      :rules="[rules.max(200, twitter)]"
    />
  </div>
</template>

<script>
import RulesHelper from 'Helpers/rules';

import config from '@config';

const MB = 1000 * 1000;

export default {
  name: 'New',
  components: {},
  mounted() {
    this.rules = new RulesHelper(this.$i18n.messages[this.$i18n.locale]);
  },
  data() {
    return {
      logo: null,
      name: '',
      description: '',
      website: '',
      linkedin: this.$t('common.links.linkedin.placeholder'),
      instagram: this.$t('common.links.instagram.placeholder'),
      twitter: this.$t('common.links.twitter.placeholder'),
      rules: {
        min: () => true,
        max: () => true,
        required: () => true,
      },
    };
  },
  methods: {
    getBase64(file) {
      return new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
      });
    },
    async handleFileUpload() {
      if (this.logo.size > config.maxFileSize) {
        this.$toast.error(
          this.$t('toast.error.fileExceeds', {
            filename: this.logo.name,
            fileSize: config.maxFileSize / MB,
          }),
        );
        this.logo = null;
        return;
      }
      const data64 = await this.getBase64(this.logo);
      const file = {
        data64,
        name: this.logo.name,
        size: this.logo.size,
        type: this.logo.type,
      };

      if (!config.imageFileFormats.find(el => el === this.logo.type)) {
        this.logo = {};
        return this.$toast.warning(this.$t('toast.warning.imageFileFormat'));
      }

      this.$emit('company-logo', file);
    },
  },
  watch: {
    description() {
      this.$emit('company-description', this.description);
    },
  },
};
</script>
