<template>
  <div>
    <form-input :title="$t('Company.new.companyName')" />
    <v-text-field
      tile
      outlined
      :rules="[rules.min(3, name)]"
      v-model="name"
      @input="$emit('company-name', name)"
    />
    <form-input :title="$t('Company.new.representativeName')" />
    <v-text-field
      tile
      outlined
      :rules="[rules.min(3, representative)]"
      v-model="representative"
      @input="$emit('representative-name', representative)"
    />
    <form-input :title="$t('Company.new.representativeEmail')" />
    <v-text-field
      tile
      disabled
      outlined
      :rules="[rules.email(representativeEmail)]"
      v-model="representativeEmail"
      @input="$emit('representative-email', representativeEmail)"
      :error-messages="localRules.emailAlreadyRegistered"
    />
    <form-input :title="$t('Company.new.aboutYourCompany.title')" />
    <vue-editor
      :placeholder="$t('Company.new.aboutYourCompany.placeholder')"
      :editorToolbar="$t('Quill.defaultToolbar')"
      v-model="companyDescription"
    />
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor';
import RulesHelper from 'Helpers/rules';
import UserController from 'Controllers/user';
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
    async validEmail() {
      this.$t('Rules.emailAlreadyRegistered');
      this.$t('Rules.lessThanXCharacters');
      this.$t('Rules.usernameUnavaliable');
    },
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
      this.$emit('owner-id', this.companyDescription);
    },
  },
};
</script>
