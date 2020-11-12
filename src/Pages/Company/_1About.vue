<template>
  <div>
    <form-input :title="$t('company.new.companyName')" />
    <v-text-field
      outlined
      :rules="[rules.min(3, name)]"
      v-model="name"
      @input="$emit('company-name', name)"
    />
    <form-input :title="$t('company.new.representativeName')" />
    <v-text-field
      outlined
      :rules="[rules.min(3, representative)]"
      v-model="representative"
      @input="$emit('representative-name', representative)"
    />
    <form-input :title="$t('company.new.representativeEmail')" />
    <v-text-field
      disabled
      outlined
      :rules="[rules.email(representativeEmail)]"
      v-model="representativeEmail"
      @input="$emit('representative-email', representativeEmail)"
      :error-messages="localRules.emailAlreadyRegistered"
    />
    <form-input :title="$t('company.new.aboutYourCompany.title')" />
    <v-textarea
      outlined
      :placeholder="$t('company.new.aboutYourCompany.placeholder')"
      :rules="[rules.required(companyDescription)]"
      v-model="companyDescription"
    />
  </div>
</template>

<script>
import RulesHelper from 'Helpers/rules';
import StorageHelper from 'Helpers/storage';

export default {
  name: 'New',
  components: {
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
      const userInfo = StorageHelper.loadState('user');
      if (!userInfo) {
        this.$toast.error(this.$t('toast.error.retrieveUser'));
        this.$router.push({
          path: '/login',
        });
      }
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
