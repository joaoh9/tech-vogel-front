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

    <form-input class="mt-0" :title="$t('resume.register.personalInfo.fullName.title')" required />
    <v-text-field
      autofocus
      v-model="fullName"
      @input="$emit('full-name', fullName)"
      outlined
      :rules="[rules.required(fullName), rules.max(200, fullName)]"
    />

    <form-input class="mt-0" :title="$t('resume.register.personalInfo.mainRole.title')" required />
    <v-text-field
      :placeholder="$t('resume.register.personalInfo.mainRole.placeholder')"
      v-model="mainRole"
      @input="$emit('main-role', mainRole)"
      outlined
      :rules="[rules.required(mainRole), rules.max(200, mainRole)]"
    />

    <form-input class="mt-0" :title="$t('resume.register.personalInfo.location.title')" required />
    <v-row>
      <v-col cols="12" md="8">
        <v-text-field
          v-model="location.city"
          @input="$emit('location', location)"
          class="mt-n3"
          outlined
          :placeholder="$t('resume.register.personalInfo.location.city')"
          :rules="[rules.required(location.city), rules.max(200, location.city)]"
        />
      </v-col>

      <v-col cols="12" md="4">
        <v-text-field
          v-model="location.country"
          @input="$emit('location', location)"
          class="mt-n3"
          outlined
          :placeholder="$t('resume.register.personalInfo.location.country')"
          :rules="[rules.required(location.country), rules.max(200, location.country)]"
        />
      </v-col>
    </v-row>
    <form-input required :title="$t('resume.register.personalInfo.personalBio.title')" />
    <vue-editor
      :editorToolbar="$t('quill.defaultToolbar')"
      v-model="personalBio"
      :rules="[rules.required(personalBio), rules.max(20000, personalBio)]"
    />

    <form-input class="mt-7" :title="$t('common.links.website.title')" />
    <v-text-field
      autofocus
      :placeholder="$t('common.links.website.placeholder')"
      v-model="website"
      @input="$emit('website', website)"
      outlined
      :rules="[rules.max(200, website)]"
    />

    <form-input :title="$t('common.links.github.title')" />
    <v-text-field
      :placeholder="$t('common.links.github.placeholder')"
      v-model="github"
      @input="$emit('github', github)"
      outlined
      :rules="[rules.max(200, github)]"
    />

    <form-input :title="$t('common.links.linkedin.title')" />
    <v-text-field
      :placeholder="$t('common.links.linkedin.placeholder')"
      v-model="linkedin"
      @input="$emit('linkedin', linkedin)"
      outlined
      :rules="[rules.max(200, linkedin)]"
    />

    <form-input :title="$t('common.links.behance.title')" />
    <v-text-field
      :placeholder="$t('common.links.behance.placeholder')"
      v-model="behance"
      @input="$emit('behance', behance)"
      outlined
      :rules="[rules.max(200, behance)]"
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
      fullName: '',
      mainRole: '',
      github: '',
      linkedin: '',
      behance: '',
      website: '',
      rules: {
        required: () => true,
        max: () => true,
      },
    };
  },
  methods: {
    getUserInfo() {
      const user = StorageHelper.loadState('userToken');

      if (!user) {
        this.$router.push({
          path: '/login',
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
