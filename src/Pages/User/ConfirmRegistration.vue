<template>
  <div class="d-flex justify-center mt-12">
    <v-card
      class="primary-card"
      :elevation="$vuetify.breakpoint.mdAndUp ? 6 : 0"
      color="bg"
      max-width="600"
      :min-width="$vuetify.breakpoint.mdAndUp ? 500 : 320"
    >
      <div class="d-flex justify-center ma-12" style="flex-direction: column">
        <h4 class="h4-bold align-self-center">{{ $t('Signup.confirmEmail.title') }}</h4>
        <span class="caption align-self-center" style="color: #A1A1AC">
          {{ $t('Signup.confirmEmail.description') }}
        </span>
        <div class="d-flex justify-center">
          <v-btn large color="primary" elevation="0" max-width="100" class="float-right mt-6">
            {{ $t('Common.login') }}
          </v-btn>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Login',
  components: {},
  data() {
    return {
      showPassword: false,
      user: {
        username: '',
        password: '',
      },
    };
  },
};
</script>

<style></style>
