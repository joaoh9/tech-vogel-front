<template>
  <div class="mb-12">
    <form-input position="left" :title="$t('Job.new.aboutTheRole.title')" />
    <vue-editor
      :placeholder="$t('Job.new.aboutTheRole.placeholder')"
      :editorToolbar="$t('Quill.defaultToolbar')"
      v-model="about"
    />
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
