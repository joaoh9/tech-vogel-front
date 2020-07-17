<template>
  <div>
    <h6>{{ label }}</h6>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'FormInput',
  props: {
    label: String,
  },
  data() {
    return {
    };
  },
};
</script>
