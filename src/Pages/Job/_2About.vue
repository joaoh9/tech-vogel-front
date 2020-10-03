<template>
  <div class="mb-12">
    <form-input position="left" :title="$t('Job.new.aboutTheRole.title')" />
    <vue-editor
      :placeholder="$t('Job.new.aboutTheRole.placeholder')"
      :editorToolbar="$t('Quill.defaultToolbar')"
      v-model="about"
    />
    <form-input
      class="mt-4"
      position="left"
      :title="$t('Job.new.languages.title')"
      :tooltip="$t('Job.new.languages.tooltip')"
    />

    <VerticalWrapper
      :component="languageComponent"
      v-on:update-items="
        e => {
          skills = e;
          $emit('languages', languages);
        }
      "
    ></VerticalWrapper>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor';
import VerticalWrapper from 'Components/Interface/VerticalWrapper';
import LanguageItem from './LanguageItem';

export default {
  name: 'NewJob2',
  components: {
    VueEditor,
    VerticalWrapper,
  },
  data() {
    return {
      about: '',
      languages: [],
      content: '',
      languageComponent: LanguageItem,
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
