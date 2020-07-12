<template>
  <fieldset class="checkbox">
    <div class="vs-checkbox-con vs-checkbox-primary">
      <input type="checkbox" v-model="check" />
      <span class="vs-checkbox">
        <span class="vs-checkbox--check">
          <i class="vs-icon feather icon-check"></i>
        </span>
      </span>
      <span >{{ title }}</span>
    </div>
  </fieldset>
</template>

<script>
export default {
  name: 'Checkbox',
  props: {
    title: String,
  },
  data() {
    return {
      check: false,
    };
  },
  watch: {
    check(value) {
      this.$emit('input', value);
    },
  },
};
</script>
