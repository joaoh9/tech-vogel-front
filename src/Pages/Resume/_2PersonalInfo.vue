<template>
  <div>
    <form-input :title="$t('resume.register.personalInfo.profilePicture.title')" />
    <v-file-input
      outlined
      :placeholder="$t('resume.register.personalInfo.profilePicture.placeholder')"
      v-model="profilePicture"
      @change="handleFileUpload"
    >
    </v-file-input>
    <form-input required class="mt-0" :title="$t('resume.register.mainRole.title')" />
    <v-text-field
      :placeholder="$t('resume.register.mainRole.placeholder')"
      v-model="mainRole"
      @input="$emit('main-role', mainRole)"
      outlined
    />
    <form-input class="mt-0" :title="$t('resume.register.personalInfo.location.title')" />
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
    <form-input required :title="$t('resume.register.personalInfo.personalBio.title')" />
    <vue-editor
      placeholder="TODO"
      :editorToolbar="$t('quill.defaultToolbar')"
      v-model="personalBio"
    />
    <slot />
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor';

import StorageHelper from 'Helpers/storage';

export default {
  name: 'ResumePersonalInfo',
  props: {
    _personalBio: {
      type: String,
      default: () => '',
    },
    _locationCountry: {
      type: String,
      default: () => '',
    },
    _locationCity: {
      type: String,
      default: () => '',
    },
  },
  components: {
    VueEditor,
  },
  mounted() {
    this.personalBio = this._personalBio || '';
    this.location.country = this._locationCountry || '';
    this.location.city = this._locationCity || '';
    this.getUserInfo();
  },
  data() {
    return {
      location: {
        city: '',
        country: '',
      },
      personalBio: '',
      profilePicture: null,
      mainRole: '',
    };
  },
  methods: {
    getUserInfo() {
      const user = StorageHelper.loadState('user');
      if (!user) {
        this.$router.push({
          path: '/resume/new',
        });
      }
    },
    async handleFileUpload() {
      const data64 = await this.getBase64(this.profilePicture);
      const file = {
        data64,
        name: this.profilePicture.name,
        size: this.profilePicture.size,
        type: this.profilePicture.type,
      };

      this.$emit('profile-picture', file);
    },
    getBase64(file) {
      return new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
      });
    },
  },
  watch: {
    personalBio() {
      this.$emit('personal-bio', this.personalBio);
    },
  },
};
</script>

<style></style>
