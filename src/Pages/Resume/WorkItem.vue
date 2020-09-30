<template>
  <div>
    <form-input class="mt-6" :title="$t('CV.register.workExperience.company.title')" />
    <v-text-field
      v-model="job.company.title"
      v-on:input="$emit('update-item', job)"
      :placeholder="$t('CV.register.workExperience.placeholders.company.title')"
      outlined
    />
    <form-input class="mt-6" :title="$t('CV.register.workExperience.position')" />
    <v-text-field
      v-model="job.position"
      v-on:input="$emit('update-item', job)"
      :placeholder="$t('CV.register.workExperience.placeholders.position')"
      outlined
    />
    <v-row>
      <v-col cols="12" md="6">
        <form-input class="mt-4" :title="$t('Common.from')" />
        <v-row>
          <v-col>
            <v-combobox
              v-model="job.from.month"
              v-on:input="$emit('update-item', job)"
              :placeholder="$t('Common.month')"
              :items="$t('Data.monthCount')"
              outlined
            />
          </v-col>
          <v-col>
            <v-text-field
              v-model="job.from.year"
              v-on:input="$emit('update-item', job)"
              :placeholder="$t('Common.year')"
              outlined
              :rules="[rules.year]"
            />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="6">
        <form-input class="mt-4" :title="$t('Common.to')" />
        <v-row>
          <v-col>
            <v-combobox
              v-model="job.to.month"
              v-on:input="$emit('update-item', job)"
              :placeholder="$t('Common.month')"
              :items="months"
              outlined
              :disabled="job.currentJob"
            />
          </v-col>
          <v-col>
            <v-text-field
              v-model="job.to.year"
              v-on:input="$emit('update-item', job)"
              :placeholder="$t('Common.year')"
              outlined
              :rules="[rules.year]"
              :disabled="job.currentJob"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <div class="d-flex justify-space-between mt-12">
      <v-checkbox
        v-model="job.currentJob"
        v-on:input="$emit('job', job)"
        v-for="(options, index) in $t('CV.register.workExperience.myJob.options')"
        :label="options"
        :key="index"
      />
    </div>
    <form-input :title="$t('CV.register.workExperience.jobDescription')" />
    <v-textarea
      v-model="job.jobDescription"
      v-on:input="$emit('update-item', job)"
      height="100"
      outlined
      counter="500"
    />
  </div>
</template>

<script>
export default {
  name: 'WorkItem',
  data() {
    return {
      job: {
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
        currentJob: false,
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
