<template>
  <div class="">
    <form-input
      position="left"
      :title="$t('Job.new.techSkills.title')"
      :description="$t('Job.new.techSkills.description')"
    />
    <v-autocomplete
      :hint="$t('Job.new.techSkills.inputHint')"
      v-model="rawSkills"
      :items="$t('Data.allSkills')"
      hide-details
      hide-selected
      outlined
      multiple
      small-chips
      deletable-chips
      item-text="text"
      item-value="value"
      :key="skillsUpdated"
    />
    <v-row justify="center" align="center" v-for="(skill, i) in skills" :key="i" class="mt-n6">
      <v-col class="d-flex" cols="12" md="4">
        <v-icon @click="deleteSkills(i)" class="align-self-center mr-2">
          mdi-close
        </v-icon>
        <div class="body-1 align-self-center" style="line-height: 100% !important">
          {{ skill.id }}
        </div>
      </v-col>
      <v-col cols="12" md="8" class="mt-n6 mt-md-0 mb-4 mb-md-0">
        <v-radio-group :row="$vuetify.breakpoint.mdAndUp" v-model="skills[i]['priority']">
          <v-radio
            color="primary"
            class="mx-md-6 mx-0 my-2 my-md-0"
            v-for="(check, j) in getSkillsPriorities()"
            :key="j"
            :label="check.text"
            :value="check.value"
          />
        </v-radio-group>
      </v-col>
    </v-row>
    <h5 class="mt-4">{{ $t('Job.new.otherSkills.title') }}</h5>
    <span class="color-cinza-lighten-1 caption">{{ $t('Job.new.otherSkills.description') }}</span>
    <form-input v-if="false" class="mt-4" :title="$t('Job.new.softSkills.title')" />
    <v-autocomplete
      v-if="false"
      :hint="$t('Job.new.softSkills.inputHint')"
      hide-selected
      v-model="softSkills"
      item-text="text"
      item-value="value"
      :items="$t('Data.softSkillsFlat')"
      @change="softSkillsChange"
      outlined
      multiple
      small-chips
      deletable-chips
      hide-details
    />
  </div>
</template>

<script>
export default {
  name: 'NewJob3',
  data() {
    return {
      rawSkills: [],
      skills: [],
      previousStateRawSkill: [],
      softSkills: [],
      skillsUpdated: false,
    };
  },
  methods: {
    getSkillsPriorities() {
      return this.$t('skills.priorities');
    },
    treatSkillInput(e) {
      alert(e);
      this.skills.push({ id: e, priority: 0 });
    },
    deleteSkills(index) {
      this.rawSkills.splice(index, 1);
    },
  },
  watch: {
    rawSkills(e) {
      const stringify = el => `${el}`;
      const newRawSkills = arr => new Set(arr.map(stringify));

      let result = e.filter(el => !newRawSkills(this.previousStateRawSkill).has(stringify(el)));
      if (!result.length && !this.skills.length) {
        this.skills.push({ id: e[0], priority: 0 });
        return;
      }
      if (!result.length) {
        result = this.previousStateRawSkill.filter(el => !newRawSkills(e).has(stringify(el)));
        this.skills.splice(this.skills.indexOf(result[0]), 1);
        return;
      }
      this.skills.push({ id: result[0], priority: 0 });
      this.previousStateRawSkill = e;
    },
    skills() {
      this.$emit('skills', this.skills);
    },
  },
};
</script>

<style>
.theme--light.v-chip:not(.v-chip--active) {
  background: #ffe8cb;
}
</style>
