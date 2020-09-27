<template>
  <div>
    <form-input :title="$t('Company.new.companyName')" />
    <v-text-field tile outlined v-model="companyName" @input="$emit('company-name', companyName)" />
    <form-input :title="$t('Company.new.representativeName')" />
    <v-text-field
      tile
      outlined
      v-model="representativeName"
      @input="$emit('representative-name', representativeName)"
    />
    <form-input :title="$t('Company.new.representativeEmail')" />
    <v-text-field
      tile
      outlined
      v-model="representativeEmail"
      @input="$emit('representative-email', representativeEmail)"
    />
    <v-row>
      <v-col cols="12" md="6">
        <form-input :title="$t('Company.new.password')" />
        <v-text-field
          tile
          outlined
          v-model="password"
          @input="$emit('password', password)"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showPassword ? 'text' : 'password'"
          @click:append="showPassword = !showPassword"
        />
      </v-col>
      <v-col cols="12" md="6">
        <form-input :title="$t('Company.new.confirmPassword')" />
        <v-text-field
          tile
          outlined
          :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showConfirmPassword ? 'text' : 'password'"
          @click:append="showConfirmPassword = !showConfirmPassword"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'New',
  data() {
    return {
      showPassword: false,
      showConfirmPassword: false,
      profilePhoto: null,
      profilePhotURL: null,
      companyName: '',
      representativeName: '',
      representativeEmail: '',
      password: '',
    };
  },
};
</script>
