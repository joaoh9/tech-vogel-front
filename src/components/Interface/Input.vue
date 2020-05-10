<template>
  <fieldset :class="['form-label-group position-relative', icon ? 'has-icon-left' : '']">
    <textarea
      v-if="type === 'textarea'"
      v-model="text"
      rows="6"
      cols="100"
      class="form-control round"
    >
    </textarea>
    <input
      v-else
      :type="type"
      class="form-control round"
      v-model="text"
      :placeholder="placeholder"
      :required="required ? true : false"
    />
    <div class="form-control-position">
      <i :class="icon ? `feather icon-${icon}` : ''"></i>
    </div>
    <label>{{ label }}</label>
  </fieldset>
</template>

<script>
export default {
  name: 'Input',
  props: {
    type: String,
    label: String,
    icon: String,
    placeholder: String,
    dataCy: String,
    required: Boolean,
  },
  data() {
    return {
      text: undefined,
    };
  },
  watch: {
    text(value) {
      this.$emit('input', value);
    },

    data(value) {
      this.$emit('input', value);
    },

    value(newData) {
      this.data = newData;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
