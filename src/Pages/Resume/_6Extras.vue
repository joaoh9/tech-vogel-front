<template>
  <div>
    <CardTemplate
      :title="$t('CV.register.extras.title')"
      :description="$t('CV.register.extras.description')"
    >
    <template v-slot:content="{}">
    </template>
    </CardTemplate>
  </div>
</template>

<script>
import CardTemplate from './CardTemplate';

export default {
  name: 'Extras',
  components: {
    CardTemplate,
  },
};
</script>

<style></style>
