<template>
  <div>
    <div class="d-flex justify-center mt-12">
      <v-card
        class="primary-card"
        :elevation="$vuetify.breakpoint.smAndUp ? 6 : 0"
        color="bg"
        max-width="600"
        :min-width="$vuetify.breakpoint.smAndUp ? 500 : 320"
      >
        <card-template :title="$t('Common.login')" :description="$t('login.subtitle')">
          <template v-slot:content="{}">
            <form-input class="mt-6" :title="$t('Common.username.label')" />
            <v-text-field
              :rules="[v => !!v || $t('Rules.requiredField')]"
              outlined
              v-model="user.username"
            />
            <form-input :title="$t('Common.password.label')" />
            <v-text-field
              :rules="[v => !!v || $t('Rules.requiredField')]"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword = !showPassword"
              :type="showPassword ? 'text' : 'password'"
              outlined
              v-model="user.password"
            />
            <div class="d-flex justify-start ">
              <p
                color="secondary"
                class="button-text align-self-center body-2 color-cinza-lighten-1"
              >
                {{ $t('login.forgotPassword') }}
              </p>
            </div>
            <v-row class="mt-6">
              <v-col cols="6" md="6" class="text-left">
                <v-btn to="/signup" color="secondary" tile outlined text large>
                  {{ $t('Common.signup') }}
                </v-btn>
              </v-col>
              <v-col cols="6" md="6" class="text-right">
                <v-btn
                  :loading="loading.login"
                  color="primary"
                  elevation="0"
                  large
                  @click="login()"
                >
                  {{ $t('login.title') }}
                </v-btn>
              </v-col>
            </v-row>
          </template>
        </card-template>
      </v-card>
    </div>
    <g-alert
      :errorMessage="$t('login.error')"
      v-on:error="s => (requestError = s)"
      :errorVar="requestError"
    />
  </div>
</template>

<script>
import CardTemplate from 'Components/Interface/CardTemplate';
import UserController from 'Controllers/user';
import RulesHelper from 'Helpers/rules';

export default {
  name: 'Login',
  components: {
    CardTemplate,
  },
  mounted() {
    this.rules = new RulesHelper(this.$i18n.messages[this.$i18n.locale]);
    this.rulesLoaded = true;
  },
  data() {
    return {
      showPassword: false,
      user: {
        username: '',
        password: '',
      },
      loading: {
        login: false,
      },
      requestError: false,
    };
  },
  methods: {
    async login() {
      const userController = new UserController();
      if (!this.user.username || !this.user.password) {
        return;
      }
      this.loading.login = true;
      try {
        await userController.login({
          username: this.user.username,
          password: this.user.password,
        });

        this.loading.login = false;

        this.$router.push({
          path: '/dashboard',
        });
      } catch (e) {
        alert(e);
        this.loading.login = false;
        this.requestError = true;
      }
      this.loading.login = false;
    },
  },
};
</script>

<style></style>
