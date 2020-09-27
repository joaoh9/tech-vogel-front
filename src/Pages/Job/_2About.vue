<template>
  <div>
    <form-input
      position="left"
      :title="$t('Job.new.about.title')"
      :tooltip="$t('Job.new.about.title')"
    />
    <vue-editor
      :placeholder="$t('Job.new.about.placeholder')"
      :editorToolbar="$t('Quill.defaultToolbar')"
      v-model="about"
    />
    <form-input
      class="mt-4"
      position="left"
      :title="$t('Job.new.languages.title')"
      :tooltip="$t('Job.new.languages.tooltip')"
    />
    <v-combobox
      v-model="languages"
      :items="$t('Data.languages')"
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
          :color="color || `tag2`"
          :input-value="selected"
        >
          <span class="pr-2">{{ item.label }}</span>
          <v-icon small @click="parent.selectItem(item)">mdi-close</v-icon>
        </v-chip>
      </template>
    </v-combobox>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor';

export default {
  name: 'NewJob2',
  components: {
    VueEditor,
  },
  data() {
    return {
      about: '',
      languages: '',
      content: '',
    };
  },
};
</script>

<style>
.v-icon.v-icon {
  margin-right: 0px;
}

h6 {
  color: black;
}
</style>
