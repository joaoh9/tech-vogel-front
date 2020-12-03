<template>
  <div class="d-flex align-center flex-column ma-12">
    <h2 v-if="$vuetify.breakpoint.mobile" class="h2-bold">{{ $t('common.FAQ') }}</h2>
    <h2 v-else class="h2-bold">{{ $t('FAQ.title') }}</h2>
    <FAQ :items="$t('FAQ.items')" />
  </div>
</template>

<script>
import FAQ from 'Components/Static/FAQ';

export default {
  name: 'FAQPage',
  mounted() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
  },
  props: {
    items: Array,
  },
  components: {
    FAQ,
  },
};

</script>
<style></style>
