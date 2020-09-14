<template>
  <div>
    <CardTemplate :title="$t('Company.new._3.pageTitle')">
      <template v-slot:content="{}">
        <div>
          <form-input :title="$t('Company.new._3.webpage')" />
          <v-text-field tile outlined v-model="webpage" @input="$emit('webpage', webpage)" />
          <form-input :title="$t('Company.new._3.linkedin')" />
          <v-text-field tile outlined v-model="linkedin" @input="$emit('linkedin', linkedin)" />
          <form-input :title="$t('Company.new._3.instagram')" />
          <v-text-field tile outlined v-model="instagram" @input="$emit('instagram', instagram)" />
          <form-input :title="$t('Company.new._3.twitter')" />
          <v-text-field tile outlined v-model="twitter" @input="$emit('twitter', twitter)" />
        </div>
      </template>
    </CardTemplate>
  </div>
</template>

<script>
import CardTemplate from 'Components/Interface/CardTemplate';

export default {
  name: 'New3',
  components: {
    CardTemplate,
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
