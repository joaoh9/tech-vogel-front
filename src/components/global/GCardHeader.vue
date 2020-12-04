<template>
  <div class="d-flex justify-center mx-2 mx-md-12 mt-6 mt-md-6 mb-6 flex-column">
    <h4 class="h4-bold align-self-center text-center">{{ title }}</h4>
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
