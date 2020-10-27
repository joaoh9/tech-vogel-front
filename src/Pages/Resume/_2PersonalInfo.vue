<template>
  <div>
    <v-file-input
      v-model="profilePicture"
      :placeholder="$t('resume.register.personalInfo.profilePicture.title')"
      @change="handleFileUpload"
    >
      <template v-slot:selection="{ text }">
        <v-chip color="primary" dark label small pill>
          {{ text }}
        </v-chip>
      </template>
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
import StorageHelper from 'Helpers/storage';
import { VueEditor } from 'vue2-editor';

export default {
  name: 'ResumePersonalInfo',
  components: {
    VueEditor,
  },
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
      personalBio: '',
      profilePicture: [],
    };
  },
  methods: {
    getUserInfo() {
      const user = StorageHelper.loadState('user');
      if (!user) {
        this.$toast.error('Could not retrieve user info. Please login again');
        this.$router.push({
          path: '/login',
        });
      }
      this.fullName = user.name;
    },
    async handleFileUpload() {
      this.profilePicture.data64 = await this.getBase64(this.profilePicture);
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
    profilePicture() {},
  },
};
</script>

<style></style>
