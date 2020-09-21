<template>
  <div class="d-flex justify-center mx-12 mt-6 mb-6" style="flex-direction: column; min-height: 40vh">
    <h4 class="h4-bold align-self-center">{{ title }}</h4>
    <span class="caption align-self-center" style="color: #A1A1AC">{{ description || '' }}</span>
    <slot name="content" />
  </div>
</template>

<script>
export default {
  name: 'g-card-header',
  props: {
    title: String,
    description: String,
  },
};
</script>

<style></style>
