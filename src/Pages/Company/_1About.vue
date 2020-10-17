<template>
  <div>
    <form-input :title="$t('company.new.companyName')" />
    <v-text-field
      tile
      outlined
      :rules="[rules.min(3, name)]"
      v-model="name"
      @input="$emit('company-name', name)"
    />
    <form-input :title="$t('company.new.representativeName')" />
    <v-text-field
      tile
      outlined
      :rules="[rules.min(3, representative)]"
      v-model="representative"
      @input="$emit('representative-name', representative)"
    />
    <form-input :title="$t('company.new.representativeEmail')" />
    <v-text-field
      tile
      disabled
      outlined
      :rules="[rules.email(representativeEmail)]"
      v-model="representativeEmail"
      @input="$emit('representative-email', representativeEmail)"
      :error-messages="localRules.emailAlreadyRegistered"
    />
    <form-input :title="$t('company.new.aboutYourCompany.title')" />
    <vue-editor
      :placeholder="$t('company.new.aboutYourCompany.placeholder')"
      :editorToolbar="$t('quill.defaultToolbar')"
      v-model="companyDescription"
    />
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor';
import RulesHelper from 'Helpers/rules';
import StorageHelper from 'Helpers/storage';
import JwtHelper from 'Helpers/jwt';

export default {
  name: 'New',
  components: {
    VueEditor,
  },
  mounted() {
    this.rules = new RulesHelper(this.$i18n.messages[this.$i18n.locale]);
    this.loadUserFromStorage();
  },
  data() {
    return {
      showPassword: false,
      showConfirmPassword: false,
      profilePhoto: null,
      profilePhotURL: null,
      name: '',
      companyDescription: '',
      representative: '',
      ownerId: '',
      representativeEmail: '',
      localRules: {
        emailAlreadyRegistered: null,
        lessThanXCharacters: null,
        usernameUnavaliable: null,
      },
      rules: {
        min: () => true,
        equalPassword: () => true,
        email: () => true,
      },
    };
  },
  methods: {
    loadUserFromStorage() {
      const jwtHelper = new JwtHelper();

      const userInfo = jwtHelper.decodeToken(StorageHelper.loadState('user'));
      this.ownerId = userInfo.username;
      this.representative = userInfo.name;
      this.representativeEmail = userInfo.email;
    },
  },
  watch: {
    ownerId() {
      this.$emit('owner-id', this.ownerId);
    },
    companyDescription() {
      this.$emit('company-description', this.companyDescription);
    },
    representative() {
      this.$emit('representative-name', this.representative);
    },
  },
};
</script>
