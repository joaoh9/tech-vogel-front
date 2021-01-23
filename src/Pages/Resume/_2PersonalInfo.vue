<template>
  <div>
    <!-- <form-input :title="$t('resume.register.personalInfo.profilePicture.title')" /> -->

    <ImageUploader
      :message="$t('resume.register.personalInfo.profilePicture.title')"
      v-on:image-data="e => (profilePicture = e)"
    />

    <form-input class="mt-4" :title="$t('resume.register.personalInfo.mainRole.title')" required />
    <v-text-field
      autofocus
      :placeholder="$t('resume.register.personalInfo.mainRole.placeholder')"
      v-model="resume.mainRole"
      @input="$emit('updates', resume)"
      outlined
      :rules="[rules.required(resume.mainRole), rules.max(200, resume.mainRole)]"
    />

    <form-input class="mt-0" :title="$t('resume.register.personalInfo.location.title')" required />
    <v-row>
      <v-col cols="12" md="8">
        <v-text-field
          v-model="resume.location.city"
          @input="$emit('updates', resume)"
          class="mt-n3"
          outlined
          :placeholder="$t('resume.register.personalInfo.location.city')"
          :rules="[rules.required(resume.location.city), rules.max(200, resume.location.city)]"
        />
      </v-col>

      <v-col cols="12" md="4">
        <v-text-field
          v-model="resume.location.country"
          @input="$emit('updates', resume)"
          class="mt-n3"
          outlined
          :placeholder="$t('resume.register.personalInfo.location.country')"
          :rules="[
            rules.required(resume.location.country),
            rules.max(200, resume.location.country),
          ]"
        />
      </v-col>
    </v-row>
    <form-input required :title="$t('resume.register.personalInfo.personalBio.title')" />
    <vue-editor
      :editorToolbar="$t('quill.defaultToolbar')"
      v-model="resume.personalBio"
      :rules="[rules.required(resume.personalBio), rules.max(20000, resume.personalBio)]"
    />

    <form-input class="mt-7" :title="$t('common.links.website.title')" />
    <v-text-field
      :placeholder="$t('common.links.website.placeholder')"
      v-model="resume.links.website"
      @input="$emit('updates', resume)"
      outlined
      :rules="[rules.max(200, resume.links.website)]"
    />

    <form-input
      :description="$t('resume.register.important')"
      :title="$t('common.links.github.title')"
    />
    <v-text-field
      :placeholder="$t('common.links.github.placeholder')"
      v-model="resume.links.github"
      @input="$emit('updates', resume)"
      outlined
      :rules="[rules.max(200, resume.links.github)]"
    />

    <form-input
      :description="$t('resume.register.important')"
      :title="$t('common.links.linkedin.title')"
    />
    <v-text-field
      :placeholder="$t('common.links.linkedin.placeholder')"
      v-model="resume.links.linkedin"
      @input="$emit('updates', resume)"
      outlined
      :rules="[rules.max(200, resume.links.linkedin)]"
    />

    <form-input :title="$t('common.links.behance.title')" />
    <v-text-field
      :placeholder="$t('common.links.behance.placeholder')"
      v-model="resume.links.behance"
      @input="$emit('updates', resume)"
      outlined
      :rules="[rules.max(200, resume.links.behance)]"
    />
    <slot />
  </div>
</template>

<script>
import UserController from 'Controllers/user';
import ResumeController from 'Controllers/resume';
import { VueEditor } from 'vue2-editor';
import StorageHelper from 'Helpers/storage';
import ImageUploader from 'Components/Interface/ImageUploader';


export default {
  name: 'ResumePersonalInfo',
  components: {
    VueEditor,
    ImageUploader,
  },
  mounted() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;

    this.getUserInfo();
    this.getResumeInfo();
  },
  data() {
    return {
      profilePicture: {},
      resume: {
        mainRole: '',
        personalBio: '',
        location: {
          city: '',
          country: '',
        },
        links: {
          website: '',
          github: '',
          linkedin: '',
          behance: '',
        },
      },
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
    async getResumeInfo() {
      const userController = new UserController();
      const resumeController = new ResumeController();

      try {
        const data = await resumeController.getCurrentResume();
        const { profilePicture } = await userController.getProfilePicture();

        this.profilePicture = profilePicture || { name: '' };
        this.resume.mainRole = data.mainRole || '';
        this.resume.personalBio = data.personalBio || '';
        this.resume.location.city = data.location.city || '';
        this.resume.location.country = data.location.country || '';
        this.resume.links.website = data.links.website || '';
        this.resume.links.github = data.links.github || '';
        this.resume.links.linkedin = data.links.linkedin || '';
        this.resume.links.instagram = data.links.instagram || '';
      } catch (e) {
        this.$toast.error(this.$t('toast.error.retrieveUserResume'));
      }

      this.$emit('updates', this.resume);
      this.$emit('profile-picture', this.profilePicture);
    },
  },
  watch: {
    personalBio() {
      this.$emit('updates', this.resume);
    },
    profilePicture() {
      this.$emit('profile-picture', this.profilePicture);
    },
  },
};
</script>

<style>
.ql-editor {
  min-height: 300px !important;
}
</style>
