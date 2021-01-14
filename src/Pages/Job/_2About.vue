<template>
  <div class="mb-12">
    <form-input :title="$t('job.new.aboutTheRole.title2')" required />
    <vue-editor
      v-model="description"
      :editorToolbar="$t('quill.defaultToolbar')"
      :rules="[rules.required(description), rules.max(20000, description)]"
      :placeholder="$t('job.new.aboutTheRole.placeholder')"
    />
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor';
import RulesHelper from 'Helpers/rules';
export default {
  name: 'NewJob2',
  props: {
    job: Object,
  },
  components: {
    VueEditor,
  },
  mounted() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
    this.rules = new RulesHelper(this.$i18n.messages[this.$i18n.locale]);
    this.description = this.job.description;
  },
  data() {
    return {
      description: '',
      rules: {
        required: () => true,
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
