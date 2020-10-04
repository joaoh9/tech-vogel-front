<template>
  <div>
    <form-input
      class="mt-6"
      tooltip="teste"
      position="left"
      :title="$t('CV.register.personalInfo.fullName.title')"
    />
    <v-text-field
      v-model="fullName"
      v-on:input="$emit('full-name', fullName)"
      outlined
    />
    <form-input
      class="mt-6"
      tooltip="teste"
      position="left"
      :title="$t('CV.register.main.title')"
    />
    <v-text-field
      :placeholder="$t('CV.register.main.placeholder')"
      v-model="mainRole"
      v-on:input="$emit('main-role', mainRole)"
      outlined
    />
    <form-input class="mt-6" :title="$t('CV.register.personalInfo.location.title')" />
    <v-row>
      <v-col cols="12" md="8">
        <v-text-field
          v-model="location.city"
          v-on:input="$emit('location', location)"
          class="mt-n3"
          outlined
          :placeholder="$t('CV.register.personalInfo.location.city')"
        />
      </v-col>
      <v-col cols="12" md="4">
        <v-text-field
          v-model="location.country"
          v-on:input="$emit('location', location)"
          class="mt-n3"
          outlined
          :placeholder="$t('CV.register.personalInfo.location.country')"
        />
      </v-col>
    </v-row>
    <slot />
  </div>
</template>

<script>
import StorageHelper from 'Helpers/storage';
import JwtHelper from 'Helpers/jwt';

export default {
  name: 'ResumePersonalInfo',
  mounted() {
    this.getUserInfo();
  },
  data() {
    return {
      fullName: '',
      mainRole: '',
      location: {
        city: '',
        country: '',
      },
    };
  },
  methods: {
    getUserInfo() {
      try {
        const userToken = StorageHelper.loadState('user');
        const jwtHelper = new JwtHelper();
        const user = jwtHelper.decodeToken(userToken);
        this.fullName = user.name;
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style></style>
