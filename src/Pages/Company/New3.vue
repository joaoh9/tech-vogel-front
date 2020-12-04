<template>
  <div>
    <form-input :title="$t('company.new.webpage')" />
    <v-text-field
      outlined
      v-model="webpage"
      @input="$emit('webpage', webpage)"
      :rules="rules.max(200, webpage)"
    />
    <form-input :title="$t('company.new.linkedin')" />
    <v-text-field
      outlined
      v-model="linkedin"
      @input="$emit('linkedin', linkedin)"
      :rules="rules.max(200, linkedin)"
    />
    <form-input :title="$t('company.new.instagram')" />
    <v-text-field
      outlined
      v-model="instagram"
      @input="$emit('instagram', instagram)"
      :rules="rules.max(200, instagram)"
    />
    <form-input :title="$t('company.new.twitter')" />
    <v-text-field
      outlined
      v-model="twitter"
      @input="$emit('twitter', twitter)"
      :rules="rules.max(200, twitter)"
    />
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
      rules: {
        max: () => true,
      },
    };
  },
};
</script>
