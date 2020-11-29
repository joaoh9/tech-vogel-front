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
      :rules="[rules.min(3, name), rules.required(name)]"
      v-model="name"
      @input="$emit('company-name', name)"
    />

    <form-input :title="$t('company.new.aboutYourCompany.title')" required />
    <v-textarea outlined :rules="[rules.required(description)]" v-model="description" />

    <form-input :title="$t('common.links.webpage.title')" />
    <v-text-field
      :placeholder="$t('common.links.webpage.placeholder')"
      v-model="website"
      @input="$emit('website', website)"
      outlined
    />

    <form-input :title="$t('common.links.linkedin.title')" />
    <v-text-field
      :placeholder="$t('common.links.linkedin.placeholder')"
      v-model="linkedin"
      @input="$emit('linkedin', linkedin)"
      outlined
    />

    <form-input :title="$t('common.links.instagram.title')" />
    <v-text-field
      :placeholder="$t('common.links.instagram.placeholder')"
      v-model="instagram"
      @input="$emit('instagram', instagram)"
      outlined
    />

    <form-input :title="$t('common.links.twitter.title')" />
    <v-text-field
      :placeholder="$t('common.links.twitter.placeholder')"
      v-model="twitter"
      @input="$emit('twitter', twitter)"
      outlined
    />
  </div>
</template>

<script>
import RulesHelper from 'Helpers/rules';

import UserController from 'Controllers/user';

export default {
  name: 'New',
  components: {},
  mounted() {
    this.rules = new RulesHelper(this.$i18n.messages[this.$i18n.locale]);
    this.loadUserFromStorage();
  },
  data() {
    return {
      logo: null,
      name: '',
      description: '',
      website: this.$t('common.links.webpage.placeholder'),
      linkedin: this.$t('common.links.linkedin.placeholder'),
      instagram: this.$t('common.links.instagram.placeholder'),
      twitter: this.$t('common.links.twitter.placeholder'),
      rules: {
        min: () => true,
        required: () => true,
      },
    };
  },
  methods: {
    loadUserFromStorage() {
      const userController = new UserController();
      const userInfo = userController.decodeUserToken();

      if (!userInfo) {
        this.$toast.error(this.$t('toast.error.retrieveUser'));
        this.$router.push({
          path: '/login',
        });
      }
    },
    getBase64(file) {
      return new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
      });
    },
    async handleFileUpload() {
      const data64 = await this.getBase64(this.logo);
      const file = {
        data64,
        name: this.logo.name,
        size: this.logo.size,
        type: this.logo.type,
      };

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
