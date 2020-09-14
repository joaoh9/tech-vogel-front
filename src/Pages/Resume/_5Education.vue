<template>
  <div>
    <CardTemplate
      :title="$t('CV.register.education.title')"
      :description="$t('CV.register.education.description')"
    >
      <template v-slot:content="{}">
        <v-row>
          <v-col cols="12" md="8">
            <form-input class="mt-6" :title="$t('CV.register.education.degree')" />
            <v-text-field
              v-model="education.degree"
              v-on:input="$emit('education', education)"
              outlined
            />
          </v-col>
          <v-col cols="12" md="4">
            <form-input class="mt-6" :title="$t('CV.register.education.type')" />
            <v-text-field
              v-model="education.type"
              v-on:input="$emit('education', education)"
              outlined
            />
          </v-col>
        </v-row>

        <form-input :title="$t('CV.register.education.institution')" />
        <v-text-field
          v-model="education.institution"
          v-on:input="$emit('education', education)"
          outlined
        />

        <v-row>
          <v-col cols="12" md="3">
            <form-input :title="$t('CV.register.education.from')" />
            <v-text-field
              v-model="education.from.year"
              v-on:input="$emit('education', education)"
              outlined
              :placeholder="$t('Common.year')"
              :rules="[rules.year]"
            />
          </v-col>
          <v-col cols="12" md="3">
            <form-input :title="$t('CV.register.education.to')" />
            <v-text-field
              v-model="education.to.year"
              v-on:input="$emit('education', education)"
              outlined
              :placeholder="$t('Common.year')"
              :rules="[rules.year]"
            />
          </v-col>
        </v-row>
      </template>
    </CardTemplate>
  </div>
</template>

<script>
import CardTemplate from 'Components/Interface/CardTemplate';

export default {
  name: 'Education',
  components: {
    CardTemplate,
  },
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
