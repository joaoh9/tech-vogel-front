<template>
  <div>
    <form-input :title="$t('company.new.location')" />
    <v-text-field
      outlined
      v-model="location"
      @input="$emit('location', location)"
      :rules="rules.max(200, location)"
    />
    <form-input :title="$t('company.new.aboutYourCompany')" />
    <v-textarea
      auto-grow
      rows="3"
      outlined
      v-model="about"
      @input="$emit('about', about)"
      :rules="rules.max(5000, about)"
    />
  </div>
</template>

<script>
export default {
  name: 'New2',
  data() {
    return {
      location: '',
      about: '',
      rules: {
        max: () => true,
      },
    };
  },
};
</script>
