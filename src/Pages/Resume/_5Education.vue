<template>
  <div>
    <div v-for="(edu, i) in education" :key="i">
      <EducationItem
        v-on:course-title="
          e => {
            education[i].courseTitle = e;
            $emit('update-item', education);
          }
        "
        v-on:institution-type="
          e => {
            education[i].institutionType = e;
            $emit('update-item', education);
          }
        "
        v-on:institution-name="
          e => {
            education[i].institutionName = e;
            $emit('update-item', education);
          }
        "
        v-on:start-date="
          e => {
            education[i].startDate = e;
            $emit('update-item', education);
          }
        "
        v-on:end-date="
          e => {
            education[i].endDate = e;
            $emit('update-item', education);
          }
        "
        v-on:degree="
          e => {
            education[i].degree = e;
            $emit('update-item', education);
          }
        "
        v-on:description="
          e => {
            education[i].description = e;
            $emit('update-item', education);
          }
        "
      />
      <v-divider v-if="i < education.length - 1" />
    </div>
    <div class="d-flex justify-center">
      <g-btn
        type="outlined"
        color="primary"
        :label="$t('common.addMore')"
        @click="
          education.push({
            courseTitle: '',
            degree: '',
            description: '',
            institutionName: '',
            startDate: 0,
            endDate: 0,
          })
        "
      />
    </div>
  </div>
</template>

<script>
import EducationItem from './EducationItem';

export default {
  name: 'Education',
  components: {
    EducationItem,
  },
  mounted() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
  },
  data() {
    return {
      educationComponent: EducationItem,
      education: [
        {
          courseTitle: '',
          degree: '',
          description: '',
          institutionName: '',
          startDate: 0,
          endDate: 0,
        },
      ],
    };
  },
};
</script>

<style scoped>
.v-divider {
  border: 0.9px solid #3b3973;
}
</style>
