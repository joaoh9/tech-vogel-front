<template>
  <div>
    <g-card-header
      :title="$t('CV.register.workExperience.title')"
      :description="$t('CV.register.workExperience.description')"
    >
      <template v-slot:content="{}">
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
      </template>
    </g-card-header>
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
      rules: {
        year: value => {
          const reg = /[^\d]/g;
          const s = value.replace(reg, '');
          return s.length === 4;
        },
      },
    };
  },
};
</script>

<style></style>
