<template>
  <div>
    <div v-if="skills.length">
      <h6 class="color-dark">
        <span class="font-weight-medium"> {{ skillTitle }}</span>
      </h6>
      <v-simple-table class="bg-color-bg">
        <thead>
          <tr>
            <th>
              <overline>{{ $t('user.skills') }}</overline>
            </th>
            <th>
              <overline>{{ $t('user.yearsExperience') }}</overline>
            </th>
            <!-- <th v-if="skillTitle === 'Tech Skills'"><overline>Github Projects</overline></th> -->
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in skills" :key="index">
            <td>
              <bdy-1 class="text-center mr-4" color="secondary">
                {{ $t(`skills.dictionary.${skillType}.${item.skillId}`) }}
              </bdy-1>
            </td>
            <td>
              <bdy-1 class="text-center" color="secondary">{{ item.experienceLevel }} </bdy-1>
            </td>
            <!-- <td> -->
            <!-- <bdy-1 v-if="skillTitle === 'Tech Skills'" class="text-center" color="secondary"> -->
            <!-- {{ githubLanguages[item.skillId] }} -->
            <!-- </bdy-1> -->
            <!-- </td> -->
          </tr>
        </tbody>
      </v-simple-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  props: {
    skillTitle: String,
    skills: Array,
    skillType: String,
    githubLanguages: Object,
  },
};
</script>

<style scoped>
.theme--light.v-data-table {
  background-color: transparent !important;
}
span {
  border-bottom: 1px solid #ff9200;
}
</style>
