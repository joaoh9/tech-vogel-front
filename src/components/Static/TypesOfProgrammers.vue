<template>
  <div class="d-flex align-center flex-column flex-wrap mx-sm-16 mx-4 mt-16">
    <h4 :class="`text-center color-secondary ${$vuetify.breakpoint.smAndUp ? 'mt-16' : 'mt-0'}`">
      {{ $t('typesOfProgrammers.title') }}
    </h4>
    <div class="d-flex justify-center flex-wrap mt-6">
      <h6 v-for="(item, i) in $t('typesOfProgrammers.data')" :key="i" class="ma-6 color-secondary">
        <v-icon x-small color="primary">mdi-brightness-1</v-icon> {{ item }}
      </h6>
    </div>
  </div>
</template>

<script>
export default {
  name: 'typesOfProgrammers',
};
</script>

<style></style>
