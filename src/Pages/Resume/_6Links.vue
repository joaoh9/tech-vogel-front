<template>
  <div>
    <form-input :title="$t('common.links.website.title')" />
    <v-text-field
      :placeholder="$t('common.links.website.placeholder')"
      v-model="website"
      @input="$emit('website', website)"
      outlined
    />

    <form-input :title="$t('common.links.github.title')" />
    <v-text-field
      autofocus
      :placeholder="$t('common.links.github.placeholder')"
      v-model="github"
      @input="$emit('github', github)"
      outlined
    />

    <form-input :title="$t('common.links.linkedin.title')" />
    <v-text-field
      :placeholder="$t('common.links.linkedin.placeholder')"
      v-model="linkedin"
      @input="$emit('linkedin', linkedin)"
      outlined
    />

    <form-input :title="$t('common.links.behance.title')" />
    <v-text-field
      :placeholder="$t('common.links.behance.placeholder')"
      v-model="behance"
      @input="$emit('behance', behance)"
      outlined
    />
  </div>
</template>

<script>
export default {
  name: 'Links',
  data() {
    return {
      github: '',
      linkedin: '',
      behance: '',
      website: '',
    };
  },
};
</script>

<style></style>
