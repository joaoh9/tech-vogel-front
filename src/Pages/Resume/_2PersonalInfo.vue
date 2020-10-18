<template>
  <div>
    <form-input class="mt-6" :title="$t('resume.register.personalInfo.fullName.title')" />
    <v-text-field v-model="fullName" @input="$emit('full-name', fullName)" outlined />
    <form-input class="mt-6" :title="$t('resume.register.main.title')" />
    <v-text-field
      :placeholder="$t('resume.register.main.placeholder')"
      v-model="mainRole"
      @input="$emit('main-role', mainRole)"
      outlined
    />
    <form-input class="mt-6" :title="$t('resume.register.personalInfo.location.title')" />
    <v-row>
      <v-col cols="12" md="8">
        <v-text-field
          v-model="location.city"
          @input="$emit('location', location)"
          class="mt-n3"
          outlined
          :placeholder="$t('resume.register.personalInfo.location.city')"
        />
      </v-col>
      <v-col cols="12" md="4">
        <v-text-field
          v-model="location.country"
          @input="$emit('location', location)"
          class="mt-n3"
          outlined
          :placeholder="$t('resume.register.personalInfo.location.country')"
        />
      </v-col>
    </v-row>
    <slot />
  </div>
</template>

<script>
import StorageHelper from 'Helpers/storage';

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
        const user = StorageHelper.loadState('user');
        this.fullName = user.name;
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style></style>
