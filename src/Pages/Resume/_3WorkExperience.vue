<template>
  <div>
    <CardTemplate
      :title="$t('CV.register.workExperience.title')"
      :description="$t('CV.register.workExperience.description')"
    >
      <template v-slot:content="{}">
        <form-input class="mt-6" :title="$t('CV.register.workExperience.company.title')" />
        <v-text-field v-model="job.company.title" v-on:input="$emit('job', job)" outlined />
        <form-input class="mt-6" :title="$t('CV.register.workExperience.position')" />
        <v-text-field v-model="job.position" v-on:input="$emit('job', job)" outlined />
        <v-row>
          <v-col>
            <form-input class="mt-4" :title="$t('Common.from')" />
            <v-row>
              <v-col cols="12" md="6">
                <v-combobox
                  v-model="job.from.month"
                  v-on:input="$emit('job', job)"
                  :placeholder="$t('Common.month')"
                  :items="months"
                  outlined
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="job.from.year"
                  v-on:input="$emit('job', job)"
                  :placeholder="$t('Common.year')"
                  outlined
                  :rules="[rules.year]"
                />
              </v-col>
            </v-row>
          </v-col>
          <v-col>
            <form-input class="mt-4" :title="$t('Common.to')" />
            <v-row>
              <v-col cols="12" md="6">
                <v-combobox
                  v-model="job.to.month"
                  v-on:input="$emit('job', job)"
                  :placeholder="$t('Common.month')"
                  :items="months"
                  outlined
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="job.to.year"
                  v-on:input="$emit('job', job)"
                  :placeholder="$t('Common.year')"
                  outlined
                  :rules="[rules.year]"
                />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <div class="d-flex justify-space-between mt-n12">
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
          v-on:input="$emit('job', job)"
          height="100"
          outlined
        />
      </template>
    </CardTemplate>
  </div>
</template>

<script>
import CardTemplate from 'Components/Interface/CardTemplate';

export default {
  name: 'WorkExperience',
  components: {
    CardTemplate,
  },
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
        currentJob: '',
      },
      months: [
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12',
      ],
      rules: {
        year: (value) => {
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
