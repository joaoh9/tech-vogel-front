<template>
  <div>
    <h2 class="mb-12">{{ $t('Job.new.page2.title') }}</h2>

    <v-tooltip left>
      <template v-slot:activator="{ on, attrs }">
        <p v-on="on" v-bind="attrs" class="body-1">{{ $t('Job.new.about.title') }}</p>
      </template>
      <span>{{ $t('Job.new.about.title') }}</span>
    </v-tooltip>
    <vue-editor
      :placeholder="$t('Job.new.about.placeholder')"
      :editorToolbar="$t('Quill.defaultToolbar')"
      v-model="about"
    >
    </vue-editor>
    <v-tooltip left>
      <template v-slot:activator="{ on, attrs }">
        <p v-on="on" v-bind="attrs" class="body-1 mt-3">{{ $t('Job.new.languages.title') }}</p>
      </template>
      <span>{{ $t('Job.new.about.tooltip') }}</span>
    </v-tooltip>
    <v-combobox
      v-model="languages"
      :items="$t('data.languages')"
      item-text="label"
      item-value="code"
      multiple
      @input="$emit('languages', languages)"
      outlined
    >
      <template v-slot:selection="{ attrs, item, parent, selected }">
        <v-chip
          v-if="item === Object(item)"
          v-bind="attrs"
          :color="color || `tag2`"
          :input-value="selected"
        >
          <span class="pr-2">{{ item.label }}</span>
          <v-icon small @click="parent.selectItem(item)">mdi-close</v-icon>
        </v-chip>
      </template>
    </v-combobox>
    <v-row>
      <v-col>
        <v-btn :class="getABTestClass('btn-back')" elevation="0" @click="$emit('back')" large>
          {{ $t('Common.back') }}
        </v-btn>
      </v-col>
      <v-spacer></v-spacer>
      <v-col class="text-right">
        <v-btn elevation="0" @click="$emit('advance')" large color="primary">
          {{ $t('Common.next') }}
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor';

export default {
  name: 'NewJob2',
  components: {
    VueEditor,
  },
  data() {
    return {
      about: '',
      languages: '',
      content: '',
    };
  },
  mounted() {},
  methods: {
    getABTestClass(test) {
      return 'secondary-ligten-2 v-btn--outlined';

      /*
      const random = Math.random();
      switch (test) {
        case 'back-btn':
          if (random < 1 / 6) {
            return 'secondary-ligten-2 v-btn--outlined';
          } else if (random < 2 / 6) {
            return 'secondary-ligten-2';
          } else if (random < 2 / 3) {
            return 'cinza-lighten-1 v-btn--outlined';
          } else {
            return 'v-btn--outlined primary';
          }
      }
      */
    },
  },
};
</script>

<style>
.v-icon.v-icon {
  margin-right: 0px;
}

h6 {
  color: black;
}
</style>
