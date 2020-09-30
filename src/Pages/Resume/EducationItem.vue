<template>
  <div>
    <v-row>
      <v-col cols="12" md="8">
        <form-input class="mt-6" :title="$t('CV.register.education.degree.title')" />
        <v-text-field
          v-model="education.degree"
          :placeholder="$t('CV.register.education.placeholders.degree')"
          v-on:input="$emit('update-item', education)"
          outlined
        />
      </v-col>
      <v-col cols="12" md="4">
        <form-input class="mt-6" :title="$t('CV.register.education.type')" />
        <v-text-field
          v-model="education.type"
          :placeholder="$t('CV.register.education.placeholders.type')"
          v-on:input="$emit('update-item', education)"
          outlined
        />
      </v-col>
    </v-row>

    <form-input :title="$t('CV.register.education.institution')" />
    <v-text-field
      v-model="education.institution"
      :placeholder="$t('CV.register.education.placeholders.institution')"
      v-on:input="$emit('update-item', education)"
      outlined
    />

    <v-row>
      <v-col cols="6" md="3">
        <form-input :title="$t('CV.register.education.from')" />
        <v-text-field
          v-model="education.from.year"
          v-on:input="$emit('update-item', education)"
          outlined
          :placeholder="$t('Common.year')"
          :rules="[rules.year]"
        />
      </v-col>
      <v-col cols="6" md="3">
        <form-input :title="$t('CV.register.education.to')" />
        <v-text-field
          v-model="education.to.year"
          v-on:input="$emit('update-item', education)"
          outlined
          :placeholder="$t('Common.year')"
          :rules="[rules.year]"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'EducationItem',
  data() {
    return {
      education: {
        degree: '',
        type: '',
        description: '',
        institution: '',
        from: {
          year: '',
        },
        to: {
          year: '',
        },
      },
      rules: {
        year: value => {
          const reg = /[^\d]/g;
          const s = value.replace(reg, '');
          return s.length === 4;
        },
      },
    };
  },
};
</script>

<style></style>
