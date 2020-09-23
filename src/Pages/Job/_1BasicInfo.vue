<template>
  <g-card-header :title="$t('Job.new.page1.title')">
    <template v-slot:content="{}">
      <div style="word-wrap: break-word;">
        <v-row>
          <v-col>
            <form-input
              position="left"
              :title="$t('Job.new.jobTitle.title')"
              :tooltip="$t('Job.new.jobTitle.tooltip')"
            />
            <v-text-field
              :rules="[rules.required]"
              v-model="title"
              @input="$emit('title', title)"
              outlined
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <form-input
              position="right"
              :title="$t('Job.new.experienceLevel.title')"
              :tooltip="$t('Job.new.experienceLevel.tooltip')"
            ></form-input>
            <v-combobox
              class="border-lg"
              multiple
              :rules="[rules.required]"
              :items="$t('data.experienceLevel')"
              v-model="experienceLevel"
              @input="$emit('experience-level', experienceLevel)"
              outlined
            ></v-combobox>
          </v-col>
          <v-col cols="12">
            <form-input
              position="right"
              :title="$t('Job.new.contractType.title')"
              :tooltip="$t('Job.new.contractType.tooltip')"
            />
            <v-combobox
              :items="$t('data.contractType')"
              v-model="contractType"
              @input="$emit('contract-type', contractType)"
              outlined
            ></v-combobox>
          </v-col>
        </v-row>
      </div>
    </template>
  </g-card-header>
</template>

<script>
export default {
  name: 'NewJob1',
  data() {
    return {
      title: '',
      experienceLevel: '',
      contractType: '',
      rules: {
        required: t => t.length > 3 || 'Please write something',
      },
    };
  },
};
</script>

<style></style>
