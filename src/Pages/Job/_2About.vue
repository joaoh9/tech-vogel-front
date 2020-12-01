<template>
  <div class="mb-12">
    <form-input :title="$t('job.new.aboutTheRole.title')" required />
    <vue-editor
      v-model="description"
      :placeholder="$t('job.new.aboutTheRole.placeholder')"
      :editorToolbar="$t('quill.defaultToolbar')"
      :rules="[
        rules.required(description),
        rules.min(10, description),
        rules.max(1000, description),
      ]"
    />
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor';

export default {
  name: 'NewJob2',
  props: {
    job: Object,
  },
  components: {
    VueEditor,
  },
  mounted() {
    this.description = this.job.description;
  },
  data() {
    return {
      description: '',
      rules: {
        required: () => true,
        min: () => true,
        max: () => true,
      },
    };
  },
  watch: {
    description() {
      this.$emit('description', this.description);
    },
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
