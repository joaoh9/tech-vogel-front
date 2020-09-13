<template>
  <div>
    <div>
      <h2 class="mb-12">{{ $t('Company.new._3.pageTitle') }}</h2>
      <form-input :title="$t('Company.new._3.webpage')" />
      <v-text-field
        tile
        outlined
        v-model="webpage"
        @input="$emit('webpage', webpage)"
      />
      <form-input :title="$t('Company.new._3.linkedin')" />
      <v-text-field
        tile
        outlined
        v-model="linkedin"
        @input="$emit('linkedin', linkedin)"
      />
      <form-input :title="$t('Company.new._3.instagram')" />
      <v-text-field
        tile
        outlined
        v-model="instagram"
        @input="$emit('instagram', instagram)"
      />
      <form-input :title="$t('Company.new._3.twitter')" />
      <v-text-field
        tile
        outlined
        v-model="twitter"
        @input="$emit('twitter', twitter)"
      />
    </div>
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
