<template>
  <div>
    <Wrapper
      :component="educationComponent"
      v-on:update-items="
        e => {
          education = e;
          $emit('education', education);
        }
      "
    ></Wrapper>
    <slot />
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
