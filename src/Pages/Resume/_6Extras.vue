<template>
  <div>
   <g-card-header
      :title="$t('resume.register.extras.title')"
      :description="$t('resume.register.extras.description')"
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
