<template>
  <div>
    <h2 class="mb-12">{{$t('Job.new._1.pageTitle')}}</h2>

    <h6>{{$t('Job.new._1.jobTitle')}}</h6>
    <v-text-field v-model="title" @input="$emit('title', title)" outlined></v-text-field>
    <v-row>
      <v-col>
        <h6>{{$t('Job.new._1.category')}}</h6>
        <v-text-field v-model="category" @input="$emit('category', category)" outlined></v-text-field>
      </v-col>
      <v-col>
        <h6>{{$t('Job.new._1.contractType')}}</h6>
        <v-combobox
          :items="$t('data.contractType')"
          v-model="contractType"
          @input="$emit('contractType', contractType)"
          outlined
        ></v-combobox>
      </v-col>
    </v-row>
    <v-row>
      <v-col></v-col>
      <v-spacer></v-spacer>
      <v-col class="text-right">
        <v-btn elevation="0" @click="$emit('advance')" large color="primary" class="ml-2">{{$t('Common.next')}}</v-btn>
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
      category: '',
      contractType: '',
    };
  },
};
</script>

<style>
</style>
