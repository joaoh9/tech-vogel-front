<template>
  <div>
    <form-input :title="$t('common.links.website.title')" />
    <v-text-field
      autofocus
      :placeholder="$t('common.links.website.placeholder')"
      v-model="website"
      @input="$emit('website', website)"
      outlined
      :rules="rules.max(200, website)"
    />

    <form-input :title="$t('common.links.github.title')" />
    <v-text-field
      :placeholder="$t('common.links.github.placeholder')"
      v-model="github"
      @input="$emit('github', github)"
      outlined
      :rules="rules.max(200, github)"
    />

    <form-input :title="$t('common.links.linkedin.title')" />
    <v-text-field
      :placeholder="$t('common.links.linkedin.placeholder')"
      v-model="linkedin"
      @input="$emit('linkedin', linkedin)"
      outlined
      :rules="rules.max(200, linkedin)"
    />

    <form-input :title="$t('common.links.behance.title')" />
    <v-text-field
      :placeholder="$t('common.links.behance.placeholder')"
      v-model="behance"
      @input="$emit('behance', behance)"
      outlined
      :rules="rules.max(200, behance)"
    />
  </div>
</template>

<script>
export default {
  name: 'Links',
  mounted() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
  },
  data() {
    return {
      github: '',
      linkedin: '',
      behance: '',
      website: '',
      rules: {
        max: () => true,
      },
    };
  },
};
</script>

<style></style>
