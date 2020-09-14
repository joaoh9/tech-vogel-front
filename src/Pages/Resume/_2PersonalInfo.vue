<template>
  <div>
    <CardTemplate
      :title="$t('CV.register.personalInfo.title')"
      :description="$t('CV.register.personalInfo.description')"
    >
      <template v-slot:content="{}">
        <form-input class="mt-6" :title="$t('CV.register.personalInfo.fullName.title')" />
        <v-text-field
          v-model="fullName"
          v-on:input="$emit('full-name', fullName)"
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
      </template>
    </CardTemplate>
  </div>
</template>

<script>
import CardTemplate from './CardTemplate';

export default {
  name: 'ResumePersonalInfo',
  components: {
    CardTemplate,
  },
  data() {
    return {
      fullName: '',
      location: {
        city: '',
        country: '',
      },
    };
  },
};
</script>

<style></style>
