<template>
  <div>
    <form-input :title="$t('company.new.companyName')" />
    <v-text-field
      outlined
      :rules="[rules.min(3, name)]"
      v-model="name"
      @input="$emit('company-name', name)"
      data-cy="register-company-name"
    />
    <form-input :title="$t('company.new.aboutYourCompany.title')" />
    <v-textarea
      outlined
      :placeholder="$t('company.new.aboutYourCompany.placeholder')"
      :rules="[rules.required(description)]"
      v-model="description"
      data-cy="register-company-desc"
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
  },
  watch: {
    description() {
      this.$emit('company-description', this.description);
    },
  },
};
</script>
