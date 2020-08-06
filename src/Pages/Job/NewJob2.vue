<template>
  <div>
    <h2 class="mb-12">{{$t('Job.new._2.pageTitle')}}</h2>

    <p class="body-1">{{$t('Job.new._2.about')}}</p>
    <v-textarea
      v-model="about"
      @input="$emit('about', about)"
      outlined
    ></v-textarea>
    <p class="body-1">{{$t('Job.new._2.languages')}}</p>
    <v-combobox
      v-model="languages"
      :items="$t('data.languages')"
      item-text="label"
      item-value="code"
      multiple
      @input="$emit('languages', languages)"
      outlined
    >
      <template v-slot:selection="{ attrs, item, parent, selected }">
        <v-chip
          v-if="item === Object(item)"
          v-bind="attrs"
          :color="color || `primary-lighten-2`"
          :input-value="selected"
        >
          <span class="pr-2">{{ item.label }}</span>
          <v-icon small @click="parent.selectItem(item)">mdi-close</v-icon>
        </v-chip>
      </template>
    </v-combobox>
    <v-row>
      <v-col>
        <v-btn elevation="0" @click="$emit('back')" large color="secondary-lighten-2">{{$t('Common.back')}}</v-btn>
      </v-col>
      <v-spacer></v-spacer>
      <v-col class="text-right">
        <v-btn elevation="0" @click="$emit('advance')" large color="primary">{{$t('Common.next')}}</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'NewJob2',
  data() {
    return {
      about: '',
      languages: '',
    };
  },
  methods: {},
};
</script>

<style>
.v-icon.v-icon {
  margin-right: 0px;
}

h6 {
  color: black
}
</style>
