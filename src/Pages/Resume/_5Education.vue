<template>
  <div>
    <div v-for="(edu, i) in education" :key="i">
      <EducationItem
        v-on:degree="
          e => {
            education[i].degree = e;
            $emit('update-item', education);
          }
        "
        v-on:institution-type="
          e => {
            education[i].institutionType = e;
            $emit('update-item', education);
          }
        "
        v-on:name="
          e => {
            education[i].name = e;
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
      />
      <v-divider v-if="i < education.length - 1" />
    </div>
    <div class="d-flex justify-center">
      <g-btn
        type="outlined"
        color="primary"
        label="Add more"
        @click="
          education.push({
            degree: '',
            institutionType: 'COLLEGE',
            description: '',
            name: '',
            startDate: '',
            endDate: '',
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
  data() {
    return {
      educationComponent: EducationItem,
      education: [
        {
          degree: '',
          institutionType: 'COLLEGE',
          description: '',
          name: '',
          startDate: '',
          endDate: '',
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
