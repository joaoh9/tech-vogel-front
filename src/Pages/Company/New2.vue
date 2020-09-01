<template>
  <div>
    <h2 class="mb-12">{{$t('Company.new._2.pageTitle')}}</h2>
    <FormInput :label="$t('Company.new._2.location')">
      <v-text-field tile outlined v-model="location" @input="$emit('location', location)"></v-text-field>
    </FormInput>
    <FormInput :label="$t('Company.new._2.aboutYourCompany')">
      <v-textarea auto-grow rows="3" tile outlined v-model="about" @input="$emit('about', about)"></v-textarea>
    </FormInput>
  </div>
</template>

<script>
import FormInput from 'Components/Interface/FormInput';

export default {
  name: 'New2',
  props: {},
  components: {
    FormInput,
  },
  data() {
    return {
      location: '',
      about: '',
    };
  },
};
</script>

