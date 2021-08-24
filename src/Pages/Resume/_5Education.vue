<template>
  <div>
    <div v-for="(edu, i) in education" :key="i">
      <EducationItem
        :key="updatedData"
        :_education="education[i]"
        v-on:update="
          e => {
            education[i] = e;
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
            institutionId: '',
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
  props: {
    _education: Array,
  },
  components: {
    EducationItem,
  },
  mounted() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;

    if (this._education && this._education.length > 0) {
      this.education = this._education;
      this.updatedData = !this.updatedData;
    }
  },
  data() {
    return {
      educationComponent: EducationItem,
      education: [
        {
          courseTitle: '',
          degree: '',
          description: '',
          institutionId: '',
          startDate: 0,
          endDate: 0,
        },
      ],
      updatedData: false,
    };
  },
  methods: {},
};
</script>

<style scoped>
.v-divider {
  border: 0.9px solid #3b3973;
}
</style>
