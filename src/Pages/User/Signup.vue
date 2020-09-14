<template>
  <div class="d-flex justify-center mt-12">
    <v-card
      class="primary-card"
      :elevation="$vuetify.breakpoint.mdAndUp ? 6 : 0"
      color="bg"
      max-width="600"
      :min-width="$vuetify.breakpoint.mdAndUp ? 500 : 320"
    >
      <card-template :title="$t('Common.signup')" :description="$t('Signup.description')">
        <template v-slot:content="{}">
          <form-input class="mt-6" :title="$t('Signup.username.title')" />
          <v-text-field outlined v-model="user.username" />
          <form-input :title="$t('Signup.email.title')" />
          <v-text-field outlined v-model="user.email" />
          <form-input :title="$t('Common.password.label')" />
          <v-text-field
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
            :type="showPassword ? 'text' : 'password'"
            outlined
            v-model="user.password"
          />
          <form-input :title="$t('Common.confirmPassword.label')" />
          <v-text-field
            :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showConfirmPassword = !showConfirmPassword"
            :type="showConfirmPassword ? 'text' : 'password'"
            outlined
            v-model="user.confirmPassword"
          />
          <v-row class="mt-6">
            <v-col cols="6" md="6" class="text-left">
              <v-btn color="secondary" tile outlined text large>
                {{ $t('Common.login') }}
              </v-btn>
            </v-col>
            <v-col cols="6" md="6" class="text-right">
              <v-btn color="primary" elevation="0" large> {{ $t('Common.signup') }} </v-btn>
            </v-col>
          </v-row>
        </template>
      </card-template>
    </v-card>
  </div>
</template>

<script>
import CardTemplate from 'Components/Interface/CardTemplate';
export default {
  name: 'Login',
  components: {
    CardTemplate,
  },
  data() {
    return {
      showPassword: false,
      showConfirmPassword: false,
      user: {
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
      },
    };
  },
};
</script>

<style></style>
