<template>
  <div>
    <form-input :title="$t('resume.register.links.github.title')" />
    <v-text-field
      autofocus
      :placeholder="$t('resume.register.links.github.placeholder')"
      v-model="github"
      @input="$emit('github', github)"
      outlined
    />

    <form-input :title="$t('resume.register.links.linkedin.title')" />
    <v-text-field
      :placeholder="$t('resume.register.links.linkedin.placeholder')"
      v-model="linkedin"
      @input="$emit('linkedin', linkedin)"
      outlined
    />

    <form-input :title="$t('resume.register.links.behance.title')" />
    <v-text-field
      :placeholder="$t('resume.register.links.behance.placeholder')"
      v-model="behance"
      @input="$emit('behance', behance)"
      outlined
    />

    <form-input :title="$t('resume.register.links.website.title')" />
    <v-text-field
      :placeholder="$t('resume.register.links.website.placeholder')"
      v-model="website"
      @input="$emit('website', website)"
      outlined
    />

    <form-input :title="$t('resume.register.links.instagram.title')" />
    <v-text-field
      :placeholder="$t('resume.register.links.instagram.placeholder')"
      v-model="instagram"
      @input="$emit('instagram', instagram)"
      outlined
    />

    <form-input :title="$t('resume.register.links.twitter.title')" />
    <v-text-field
      :placeholder="$t('resume.register.links.twitter.placeholder')"
      v-model="twitter"
      @input="$emit('twitter', twitter)"
      outlined
    />

    <form-input :title="$t('resume.register.links.facebook.title')" />
    <v-text-field
      :placeholder="$t('resume.register.links.facebook.placeholder')"
      v-model="facebook"
      @input="$emit('facebook', facebook)"
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
      instagram: '',
      twitter: '',
      facebook: '',
    }
  },
};
</script>

<style></style>
