<template>
  <div>
    <h2 class="mb-12">{{ $t('Company.new._2.pageTitle') }}</h2>
    <form-input :title="$t('Company.new._2.location')" />
      <v-text-field
        tile
        outlined
        v-model="location"
        @input="$emit('location', location)"
      />
    <form-input :title="$t('Company.new._2.aboutYourCompany')" />
      <v-textarea
        auto-grow
        rows="3"
        tile
        outlined
        v-model="about"
        @input="$emit('about', about)"
      ></v-textarea>
  </div>
</template>

<script>
export default {
  name: 'New2',
  data() {
    return {
      location: '',
      about: '',
    };
  },
};
</script>
