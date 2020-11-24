<template>
  <div class="mb-12">
    <form-input :title="$t('job.new.aboutTheRole.title')" required />
    <vue-editor
      :placeholder="$t('job.new.aboutTheRole.placeholder')"
      :editorToolbar="$t('quill.defaultToolbar')"
      v-model="description"
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
