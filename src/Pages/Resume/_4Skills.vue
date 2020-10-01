<template>
  <div>
    <VerticalWrapper
      :component="skillComponent"
      v-on:update-items="
        e => {
          skills = e;
          $emit('skills', skills);
        }
      "
    ></VerticalWrapper>
    <slot />
  </div>
</template>

<script>
import VerticalWrapper from 'Components/Interface/VerticalWrapper';
import SkillItem from './SkillItem';

export default {
  name: 'Skills',
  components: {
    VerticalWrapper,
  },
  data() {
    return {
      skillComponent: SkillItem,
      skills: [],
    };
  },
};
</script>

<style></style>
