<template>
  <div>
    <CardTemplate :title="$t('Company.new._2.pageTitle')">
      <template v-slot:content="{}">
        <form-input :title="$t('Company.new._2.location')" />
        <v-text-field tile outlined v-model="location" @input="$emit('location', location)" />
        <form-input :title="$t('Company.new._2.aboutYourCompany')" />
        <v-textarea
          auto-grow
          rows="3"
          tile
          outlined
          v-model="about"
          @input="$emit('about', about)"
        ></v-textarea>
      </template>
    </CardTemplate>
  </div>
</template>

<script>
import CardTemplate from 'Components/Interface/CardTemplate';

export default {
  name: 'New2',
  components: {
    CardTemplate,
  },
  data() {
    return {
      location: '',
      about: '',
    };
  },
};
</script>
