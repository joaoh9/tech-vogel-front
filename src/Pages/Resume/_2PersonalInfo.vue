<template>
  <div>
    <ImageUploader
      :message="$t('resume.register.personalInfo.profilePicture.title')"
      :_data64="_data64"
      v-on:image-data="e => (profilePicture = e)"
    />

    <form-input class="mt-4" :title="$t('resume.register.personalInfo.mainRole.title')" required />
    <v-text-field
      autofocus
      :placeholder="$t('resume.register.personalInfo.mainRole.placeholder')"
      data-cy="main-role"
      v-model="resume.mainRole"
      @input="$emit('main-role', resume.mainRole)"
      outlined
      :rules="[rules.required(resume.mainRole), rules.max(200, resume.mainRole)]"
    />

    <form-input class="mt-0" :title="$t('resume.register.personalInfo.location.title')" required />
    <v-row>
      <v-col cols="12" md="4">
        <v-autocomplete
          v-model="resume.location.country"
          data-cy="location-country"
          @input="$emit('location', resume.location)"
          class="mt-n3"
          outlined
          :items="locationData.countries"
          :loading="!locationData.countries.length"
          :placeholder="$t('resume.register.personalInfo.location.country')"
          :rules="[
            rules.required(resume.location.country),
            rules.max(200, resume.location.country),
          ]"
        />
      </v-col>

      <v-col cols="12" md="4">
        <v-autocomplete
          v-model="resume.location.state"
          @input="$emit('location', resume.location)"
          data-cy="location-state"
          class="mt-n3"
          :items="locationData.states"
          :loading="!locationData.states.length"
          outlined
          :placeholder="$t('resume.register.personalInfo.location.state')"
          :rules="[rules.required(resume.location.state)]"
        />
      </v-col>

      <v-col cols="12" md="4">
        <v-autocomplete
          v-model="resume.location.city"
          @input="$emit('location', resume.location)"
          data-cy="location-city"
          class="mt-n3"
          :items="locationData.cities"
          :loading="!locationData.cities.length"
          outlined
          :placeholder="$t('resume.register.personalInfo.location.city')"
          :rules="[rules.required(resume.location.city)]"
        />
      </v-col>
    </v-row>
    <form-input required :title="$t('resume.register.personalInfo.personalBio.title')" />
    <vue-editor
      data-cy="personal-bio"
      class="mb-16"
      :editorToolbar="$t('quill.defaultToolbar')"
      v-model="resume.personalBio"
      :rules="[rules.required(resume.personalBio)]"
    />

    <form-input class="" :title="$t('common.links.website.title')" />
    <v-text-field
      :placeholder="$t('common.links.website.placeholder')"
      data-cy="links-website"
      v-model="resume.links.website"
      @input="$emit('links', resume.links)"
      outlined
      :rules="[rules.max(200, resume.links.website)]"
    />

    <form-input
      :description="$t('resume.register.important')"
      :title="$t('common.links.linkedin.title')"
    />
    <v-text-field
      :placeholder="$t('common.links.linkedin.placeholder')"
      data-cy="links-linkedin"
      v-model="resume.links.linkedin"
      @input="$emit('links', resume.links)"
      outlined
      :rules="[rules.max(200, resume.links.linkedin)]"
    />
    <slot />
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor';
import StorageHelper from 'Helpers/storage';
import ImageUploader from 'Components/Interface/ImageUploader';
import LocationController from 'Controllers/location';

export default {
  name: 'ResumePersonalInfo',
  props: {
    _mainRole: String,
    _personalBio: String,
    _data64: String,
    _location: Object,
    _links: Object,
  },
  components: {
    VueEditor,
    ImageUploader,
  },
  mounted() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
    if (this._mainRole) {
      this.resume.mainRole = this._mainRole;
    }
    if (this._personalBio.length) {
      this.resume.personalBio = this._personalBio;
    }
    if (this._location) {
      this.resume.location = this._location;
    }
    if (this._links) {
      this.resume.links = this._links;
    }
    this.getAllCountriesInfo();
  },
  data() {
    return {
      profilePicture: {},
      resume: {
        mainRole: '',
        personalBio: '',
        location: {
          country: '',
          state: '',
          city: '',
        },
        links: {
          website: '',
          linkedin: '',
          behance: '',
        },
      },
      rules: {
        required: () => true,
        max: () => true,
      },
      locationData: {
        countries: [],
        states: [],
        cities: [],
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
    async getAllCountriesInfo() {
      const locationController = new LocationController();
      this.locationData.countries = await locationController.getAllCountriesInfo();
    },

    async getStatesInfoFromCountry(countryId) {
      const locationController = new LocationController();
      this.locationData.states = await locationController.getStatesInfoFromCountry(countryId);
    },

    async getCitiesInfoFromState(stateId) {
      const locationController = new LocationController();
      this.locationData.cities = await locationController.getCitiesInfoFromState(stateId);
    },
  },
  watch: {
    'resume.location.country'() {
      this.getStatesInfoFromCountry(this.resume.location.country);
    },
    'resume.location.state'() {
      this.getCitiesInfoFromState(this.resume.location.state);
    },
    'resume.personalBio'() {
      this.$emit('personal-bio', this.resume.personalBio);
    },
    profilePicture() {
      this.$emit('profile-picture', this.profilePicture);
    },
  },
};
</script>

<style>
.ql-editor {
  min-height: 400px !important;
}

</style>
