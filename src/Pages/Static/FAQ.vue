<template>
  <div class="d-flex align-center flex-column ma-12">
    <v-row justify="center" align="center">
      <v-col cols="0" sm="1"> </v-col>
      <v-col cols="12" sm="10">
        <h2 v-if="!$vuetify.breakpoint.smAndUp" class="h2-bold text-center">{{ $t('common.FAQ') }}</h2>
        <h2 v-else class="text-center h2-bold">{{ $t('FAQ.title') }}</h2>
        <FAQ :items="$t('FAQ.items')" />
      </v-col>
      <v-col cols="0" sm="1"> </v-col>
    </v-row>
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
