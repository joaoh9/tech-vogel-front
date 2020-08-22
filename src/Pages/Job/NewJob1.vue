<template>
  <div>
    <h2 class="mb-12">{{$t('Job.new._1.pageTitle')}}</h2>

    <v-row>
      <h1 class="body-1 ml-3">{{$t('Job.new._1.jobTitle')}}</h1>
      <v-icon class="ml-2">mdi-information-outline</v-icon>
      <v-col cols="12">
      <v-text-field v-model="title" @input="$emit('title', title)" outlined></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <p class="body-1">{{$t('Job.new._1.category')}}</p>
        <v-text-field v-model="category" @input="$emit('category', category)" outlined></v-text-field>
      </v-col>
      <v-col>
        <p class="body-1">{{$t('Job.new._1.contractType')}}</p>
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
        <v-btn
          elevation="0"
          @click="$emit('advance')"
          large
          color="primary"
          class="ml-2"
        >{{$t('Common.next')}}</v-btn>
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
