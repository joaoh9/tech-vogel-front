<template>
  <div>
    <h2 class="mb-12">{{ $t('Job.new.page1.title') }}</h2>

    <v-row>
      <v-col>
        <v-tooltip left>
          <template v-slot:activator="{ on, attrs }">
            <p v-on="on" v-bind="attrs" class="body-1 d-flex">
              {{ $t('Job.new.jobTitle.title') }} *
            </p>
          </template>
          <span>{{ $t('Job.new.jobTitle.tooltip') }}</span>
        </v-tooltip>
        <v-text-field
          :rules="[rules.required]"
          v-model="title"
          @input="$emit('title', title)"
          outlined
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-tooltip left>
          <template v-slot:activator="{ on, attrs }">
            <p v-on="on" v-bind="attrs" class="body-1 d-flex">
              {{ $t('Job.new.experienceLevel.title') }}
            </p>
          </template>
          <span>{{ $t('Job.new.experienceLevel.tooltip') }}</span>
        </v-tooltip>
        <v-combobox
          :rules="[rules.required]"
          :items="$t('data.experienceLevel')"
          v-model="experienceLevel"
          @input="$emit('experience-level', experienceLevel)"
          outlined
        ></v-combobox>
      </v-col>
      <v-col>
        <v-tooltip left>
          <template v-slot:activator="{ on, attrs }">
            <p v-on="on" v-bind="attrs" class="body-1">{{ $t('Job.new.contractType.title') }}</p>
          </template>
          <span>{{ $t('Job.new.contractType.tooltip') }}</span>
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
  components: {},
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
