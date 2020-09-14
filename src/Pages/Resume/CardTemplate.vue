<template>
  <div class="d-flex justify-center ma-12" style="flex-direction: column; min-height: 40vh">
    <h4 class="h4-bold align-self-center">{{ title }}</h4>
    <span class="caption align-self-center" style="color: #A1A1AC">{{ description || '' }}</span>
    <slot name="content" />
  </div>
</template>

<script>
export default {
  name: 'tab-item-card-template',
  props: {
    title: String,
    description: String,
  },
};
</script>

<style></style>
