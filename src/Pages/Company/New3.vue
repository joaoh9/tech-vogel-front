<template>
  <div>
    <form-input :title="$t('company.new.webpage')" />
    <v-text-field tile outlined v-model="webpage" @input="$emit('webpage', webpage)" />
    <form-input :title="$t('company.new.linkedin')" />
    <v-text-field tile outlined v-model="linkedin" @input="$emit('linkedin', linkedin)" />
    <form-input :title="$t('company.new.instagram')" />
    <v-text-field tile outlined v-model="instagram" @input="$emit('instagram', instagram)" />
    <form-input :title="$t('company.new.twitter')" />
    <v-text-field tile outlined v-model="twitter" @input="$emit('twitter', twitter)" />
  </div>
</template>

<script>
export default {
  name: 'New3',
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
