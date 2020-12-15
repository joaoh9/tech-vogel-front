<template>
  <div class="d-flex justify-center mt-12">
    <g-card :lg="600" :md="500">
      <template v-slot:card-header>
        <g-card-header
          class="px-n10"
          :title="$t('user.getAccessCode.title')"
          :description="$t('user.getAccessCode.description')"
        />
      </template>

      <template v-slot:card-content>
        <form-input class="mt-6" :title="$t('common.email.label')" />
        <v-text-field
          v-model="user.email"
          :rules="[rules.required(user.email), rules.email(user.email)]"
          outlined
          autofocus
        />
      </template>

       <template v-slot:buttons>
        <div class="d-flex justify-space-between my-6">
          <v-btn @click="$router.go(-1)" color="secondary" tile outlined text large>
            {{ $t('common.back') }}
          </v-btn>
          <g-btn
            type="primary"
            large
            :loading="loading"
            :label="$t('common.confirm')"
            @click="getButtonAction()"
          />
        </div>
      </template>
    </g-card>
  </div>
</template>

<script>
import RulesHelper from 'Helpers/rules';
// import StorageHelper from 'Helpers/storage';
// import UserController from 'Controllers/user';

export default {
  name: 'GetAccessCode',
  mounted() {
    this.rules = new RulesHelper(this.$i18n.messages[this.$i18n.locale]);
  },
  data() {
    return {
      user: {
        email: '',
      },
      rules: {
        required: () => true,
        email: () => true,
      },
    }
  },
  methods: {
  },
};
</script>

<style></style>
