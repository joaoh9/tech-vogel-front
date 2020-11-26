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
    <form-input :title="$t('company.new.companyName')" />
    <v-text-field
      outlined
      :rules="[rules.min(3, name)]"
      v-model="name"
      @input="$emit('company-name', name)"
    />
    <form-input :title="$t('company.new.aboutYourCompany.title')" />
    <v-textarea
      outlined
      :placeholder="$t('company.new.aboutYourCompany.placeholder')"
      :rules="[rules.required(description)]"
      v-model="description"
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

      this.$emit('profile-picture', file);
    },
  },
  watch: {
    description() {
      this.$emit('company-description', this.description);
    },
  },
};
</script>
