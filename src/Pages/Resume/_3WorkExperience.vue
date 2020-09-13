<template>
  <div>
    <CardTemplate
      :title="$t('CV.register.workExperience.title')"
      :description="$t('CV.register.workExperience.description')"
    >
      <template v-slot:content="{}">
        <form-input class="mt-6" :title="$t('CV.register.workExperience.company.title')" />
        <v-text-field v-model="company.title" v-on:input="$emit('company', company)" outlined />
        <form-input class="mt-6" :title="$t('CV.register.workExperience.position')" />
        <v-text-field v-model="position" v-on:input="$emit('position', position)" outlined />
        <v-row>
          <v-col>
            <form-input class="mt-4" :title="$t('Common.from')" />
            <v-row>
              <v-col cols="12" md="6">
                <v-combobox
                  v-model="from.month"
                  v-on:input="$emit('from', from)"
                  :placeholder="$t('Common.month')"
                  outlined
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-combobox
                  v-model="from.year"
                  v-on:input="$emit('from', from)"
                  :placeholder="$t('Common.year')"
                  outlined
                />
              </v-col>
            </v-row>
          </v-col>
          <v-col>
            <form-input class="mt-4" :title="$t('Common.to')" />
            <v-row>
              <v-col cols="12" md="6">
                <v-combobox
                  v-model="to.month"
                  v-on:input="$emit('to', to)"
                  :placeholder="$t('Common.month')"
                  outlined
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-combobox
                  v-model="to.year"
                  v-on:input="$emit('to', to)"
                  :placeholder="$t('Common.year')"
                  outlined
                />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <div class="d-flex justify-space-between mt-n12">
          <v-checkbox
            v-model="currentJob"
            v-on:input="$emit('current-job', currentJob)"
            v-for="(options, index) in $t('CV.register.workExperience.myJob.options')"
            :label="options"
            :key="index"
          />
        </div>
        <form-input :title="$t('CV.register.workExperience.jobDescription')" />
        <v-textarea
          v-model="jobDescription"
          v-on:input="$emit('job-description', jobDescription)"
          height="100"
          outlined
        />
      </template>
    </CardTemplate>
  </div>
</template>

<script>
import CardTemplate from './CardTemplate';

export default {
  name: 'WorkExperience',
  components: {
    CardTemplate,
  },
  data() {
    return {
      company: {
        title: '',
      },
      position: '',
      from: {
        month: '',
        year: '',
      },
      to: {
        month: '',
        year: '',
      },
      jobDescription: '',
      currentJob: '',
    };
  },
};
</script>

<style></style>
