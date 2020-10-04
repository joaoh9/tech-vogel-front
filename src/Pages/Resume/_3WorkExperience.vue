<template>
  <div>
    <Wrapper
      :component="workComponent"
      v-on:update-items="
        e => {
          job = e;
          $emit('job', job);
        }
      "
    ></Wrapper>
    <slot />
  </div>
</template>

<script>
import WorkItem from './WorkItem';
import Wrapper from 'Components/Interface/Wrapper';

export default {
  name: 'WorkExperience',
  components: {
    Wrapper,
  },
  data() {
    return {
      workComponent: WorkItem,
      job: [],
    };
  },
};
</script>

<style></style>
