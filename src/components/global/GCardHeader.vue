<template>
  <div class="d-flex justify-center mt-6 mt-sm-6 mb-6 flex-column">
    <h4 class="h4-bold align-self-center text-center mb-3">{{ title }}</h4>
    <span class="sub-1 align-self-center text-center color-cinza-lighten-1">
      {{ description || '' }}
    </span>
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
