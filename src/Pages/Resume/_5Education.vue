<template>
  <div>
    <g-card-header
      :title="$t('CV.register.education.title')"
      :description="$t('CV.register.education.description')"
    >
      <template v-slot:content="{}">
        <Wrapper
          :component="educationComponent"
          v-on:update-items="
            e => {
              education = e;
              $emit('education', education);
            }
          "
        ></Wrapper>
        <slot></slot>
      </template>
    </g-card-header>
  </div>
</template>

<script>
import EducationItem from './EducationItem';
import Wrapper from 'Components/Interface/Wrapper';

export default {
  name: 'Education',
  components: {
    Wrapper,
  },
  data() {
    return {
      educationComponent: EducationItem,
      education: [],
    };
  },
};
</script>

<style></style>
