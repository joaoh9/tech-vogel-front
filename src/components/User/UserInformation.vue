<template>
  <div>
    <div v-if="type === 'work'">
      <div class="mt-4">
        <capt-1 color="primary"> {{ data.startDate }} {{ data.endDate }} </capt-1>
      </div>
      <h6 class="my-2 font-weight-regular">{{ data.role }}</h6>
      <div class="mb-2">
        <sub-2 color="dark">{{ $t('common.at') }} {{ data.companyName }}</sub-2>
      </div>
      <bdy-1 color="dark">{{ data.description }}</bdy-1>
    </div>
    <div v-else>
      <div class="mt-4">
        <capt-1 color="primary"> {{ data.startDate }} {{ data.endDate }} </capt-1>
        <capt-1 class="ml-6">{{ data.degree }}</capt-1>
      </div>
      <h6 class="my-2">{{ data.courseTitle }}</h6>
      <div class="mb-2">
        <sub-2 color="dark"> {{ $t('common.at') }} {{ data.institutionId }} </sub-2>
      </div>
      <bdy-1 color="dark" v-html="data.description" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserInformation',
  props: {
    title: String,
    type: {
      type: String,
    },
    data: Object,
    company: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
capt-1 {
  display: inline;
}
</style>
