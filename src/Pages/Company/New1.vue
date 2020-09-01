<template>
  <div>
    <h2 class="mb-12">{{$t('Company.new._1.pageTitle')}}</h2>
    <FormInput :label="$t('Company.new._1.companyName')">
      <v-text-field tile outlined v-model="companyName" @input="$emit('company-name', companyName)"></v-text-field>
    </FormInput>
    <FormInput :label="$t('Company.new._1.representativeName')">
      <v-text-field
        tile
        outlined
        v-model="representativeName"
        @input="$emit('representative-name', representativeName)"
      ></v-text-field>
    </FormInput>
    <FormInput :label="$t('Company.new._1.representativeEmail')">
      <v-text-field
        tile
        outlined
        v-model="representativeEmail"
        @input="$emit('representative-email', representativeEmail)"
      ></v-text-field>
    </FormInput>
    <v-row>
      <v-col cols="12" md="6">
        <FormInput :label="$t('Company.new._1.password')">
          <v-text-field
            tile
            outlined
            v-model="password"
            @input="$emit('password', password)"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPassword ? 'text' : 'password'"
            @click:append="showPassword = !showPassword"
          ></v-text-field>
        </FormInput>
      </v-col>
      <v-col cols="12" md="6">
        <FormInput :label="$t('Company.new._1.confirmPassword')">
          <v-text-field
            tile
            outlined
            :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showConfirmPassword ? 'text' : 'password'"
            @click:append="showConfirmPassword = !showConfirmPassword"
          ></v-text-field>
        </FormInput>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import FormInput from 'Components/Interface/FormInput';

export default {
  name: 'New',
  props: {},
  components: {
    FormInput,
  },
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

