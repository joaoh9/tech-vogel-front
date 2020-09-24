<template>
  <div>
   <g-card-header
      :title="$t('CV.register.extras.title')"
      :description="$t('CV.register.extras.description')"
    >
      <template v-slot:content="{}"> </template>
      <slot/>
    </g-card-header>
  </div>
</template>

<script>

export default {
  name: 'Extras',
};
</script>

<style></style>
