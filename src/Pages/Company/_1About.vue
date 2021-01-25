<template>
  <div>
    <ImageUploader
      :message="$t('company.new.logo.placeholder')"
      v-on:image-data="e => (logo = e)"
    />

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
import ImageUploader from 'Components/Interface/ImageUploader';

import 'cropperjs/dist/cropper.css';

export default {
  name: 'New',
  components: {
    ImageUploader,
  },
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
  watch: {
    description() {
      this.$emit('company-description', this.description);
    },
    logo() {
      this.$emit('company-logo', this.logo);
    },
  },
};
</script>
