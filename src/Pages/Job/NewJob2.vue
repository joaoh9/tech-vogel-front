<template>
  <div>
    <h2 class="mb-12">{{ $t('Job.new.page2.title') }}</h2>
    <v-row>
      <v-col cols="12">
        <form-input
          position="left"
          :title="$t('Job.new.about.title')"
          :tooltip="$t('Job.new.about.title')"
        />
      </v-col>
      <v-col cols="12">
        <vue-editor
          :placeholder="$t('Job.new.about.placeholder')"
          :editorToolbar="$t('Quill.defaultToolbar')"
          v-model="about"
        >
        </vue-editor>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <form-input
          class="mt-4"
          position="left"
          :title="$t('Job.new.languages.title')"
          :tooltip="$t('Job.new.languages.tooltip')"
        />
      </v-col>
      <v-col cols="12">
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
      </v-col>
    </v-row>
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
import FormInput from 'Components/FormInput.vue';

export default {
  name: 'NewJob2',
  components: {
    VueEditor,
    FormInput,
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
