<template>
  <div style="word-wrap: break-word;">
    <h2 class="mb-12" style="word-wrap: break-word">{{ $t('Job.new.page1.title') }}</h2>

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
      <v-col cols="12" md="6" style="max-width: 70%">
        <form-input
          position="left"
          :title="$t('Job.new.experienceLevel.title')"
          :tooltip="$t('Job.new.experienceLevel.tooltip')"
        ></form-input>
        <v-combobox
          :rules="[rules.required]"
          :items="$t('data.experienceLevel')"
          v-model="experienceLevel"
          @input="$emit('experience-level', experienceLevel)"
          outlined
        ></v-combobox>
      </v-col>
      <v-col cols="12" md="6">
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
    <v-row>
      <v-col></v-col>
      <v-spacer></v-spacer>
      <v-col class="text-right">
        <v-btn elevation="0" @click="$emit('advance')" large color="primary" class="ml-2">
          {{ $t('Common.next') }}
        </v-btn>
      </v-col>
    </v-row>
  </div>
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
