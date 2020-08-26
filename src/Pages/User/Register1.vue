<template>
  <div>
    <h2 class="mb-12">{{$t('User.register._1.pageTitle')}}</h2>
    <FormInput :label="$t('User.register._1.fullName')">
      <v-text-field
        tile
        outlined
        v-model="fullName"
        @input="$emit('full-name', fullName)"
      ></v-text-field>
    </FormInput>
    <FormInput :label="$t('User.register._1.email')">
      <v-text-field
        tile
        outlined
        v-model="email"
        @input="$emit('email', email)"
      ></v-text-field>
    </FormInput>
    <FormInput :label="$t('User.register._1.username')">
      <v-text-field
        tile
        outlined
        v-model="username"
        @input="$emit('username', username)"
      ></v-text-field>
    </FormInput>
    <v-row>
      <v-col cols="12" md="6">
        <FormInput :label="$t('User.register._1.password')">
          <v-text-field
            tile
            outlined
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPassword ? 'text' : 'password'"
            @click:append="showPassword = !showPassword"
            v-model="password"
            @input="$emit('password', password)"
          ></v-text-field>
        </FormInput>
      </v-col>
      <v-col cols="12" md="6">
        <FormInput :label="$t('User.register._1.confirmPassword')">
          <v-text-field
            tile
            outlined
            :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showConfirmPassword ? 'text' : 'password'"
            @click:append="showConfirmPassword = !showConfirmPassword"
            v-model="confirmPassword"
            @input="$emit('confirm-password', confirmPassword)"
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
      fullName: '',
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
      currentStep: 1,
      showPassword: false,
      showConfirmPassword: false,
    };
  },
};
</script>

