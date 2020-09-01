<template>
  <div>
    <div>
      <h2 class="mb-12">{{$t('Company.new._3.pageTitle')}}</h2>
      <FormInput :label="$t('Company.new._3.webpage')">
        <v-text-field tile outlined v-model="webpage" @input="$emit('webpage', webpage)"></v-text-field>
      </FormInput>
      <FormInput :label="$t('Company.new._3.linkedin')">
        <v-text-field tile outlined v-model="linkedin" @input="$emit('linkedin', linkedin)"></v-text-field>
      </FormInput>
      <FormInput :label="$t('Company.new._3.instagram')">
        <v-text-field tile outlined v-model="instagram" @input="$emit('instagram', instagram)"></v-text-field>
      </FormInput>
      <FormInput :label="$t('Company.new._3.twitter')">
        <v-text-field tile outlined v-model="twitter" @input="$emit('twitter', twitter)"></v-text-field>
      </FormInput>
    </div>
  </div>
</template>

<script>
import FormInput from 'Components/Interface/FormInput';

export default {
  name: 'New',
  props: {},
  components: {
    FormInput,
  },
  data() {
    return {
      webpage: '',
      linkedin: '',
      instagram: '',
      twitter: '',
    };
  },
};
</script>

