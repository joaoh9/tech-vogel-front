<template>
  <div>
    <h2 class="mb-12">{{ $t('Job.new._1.pageTitle') }}</h2>

    <v-row>
      <v-tooltip left>
        <template v-slot:activator="{ on, attrs }">
          <h1 v-on="on" v-bind="attrs" class="body-1 ml-3">{{ $t('Job.new._1.jobTitle') }}</h1>
        </template>
        <span>{{ $t('Job.new._1.tooltips.jobTitle') }}</span>
      </v-tooltip>
      <v-col cols="12">
        <v-text-field v-model="title" @input="$emit('title', title)" outlined></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-tooltip left>
          <template v-slot:activator="{ on, attrs }">
            <p v-on="on" v-bind="attrs" class="body-1 d-flex">
              {{ $t('Job.new._1.experienceLevel') }}
            </p>
          </template>
          <span>{{ $t('Job.new._1.tooltips.experienceLevel') }}</span>
        </v-tooltip>
        <v-combobox
          :items="$t('data.experienceLevel')"
          v-model="experienceLevel"
          @input="$emit('experience-level', experienceLevel)"
          outlined
        ></v-combobox>
      </v-col>
      <v-col>
        <v-tooltip left>
          <template v-slot:activator="{ on, attrs }">
            <p v-on="on" v-bind="attrs" class="body-1">{{ $t('Job.new._1.contractType') }}</p>
          </template>
          <span>{{ $t('Job.new._1.tooltips.contractType') }}</span>
        </v-tooltip>
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
        <v-btn elevation="0" @click="$emit('advance')" large color="primary" class="ml-2">{{
          $t('Common.next')
        }}</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'NewJob1',
  components: {},
  data() {
    return {
      title: '',
      experienceLevel: '',
      contractType: '',
    };
  },
};
</script>

<style></style>
