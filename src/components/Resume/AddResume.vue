<template>
  <div class="container">
    <v-card
      tile
    >
      <v-card-title>
        Resumé
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols=12 md=3>
            <v-list flat dense>
              <v-list-item-group v-model="item" color="primary">
                <v-list-item :href="'#personal-information'">
                  <v-list-item-content>
                    <v-list-item-title>
                      Personal Information
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item href="#about-me">
                  <v-list-item-content>
                    <v-list-item-title>
                      About me
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item href="#education">
                  <v-list-item-content>
                    <v-list-item-title>
                      Education
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item href="#skills">
                  <v-list-item-content>
                    <v-list-item-title>
                      Skills
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item href="#contact-info">
                  <v-list-item-content>
                    <v-list-item-title>
                      Contact Info
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-col>
          <v-col cols=12 md=9>
            <v-form>
              <div id="personal-information" v-intersect.quiet="onIntersect">
                <v-row>
                  <v-col cols=12 md=3>
                    <v-subheader>Personal Information</v-subheader>
                  </v-col>
                  <v-col cols=12 md=9>
                    <v-text-field
                        required
                        tile
                        name="fullName"
                        label="Full name"
                    ></v-text-field>
                    <v-combobox
                        required
                        tile
                        name="gender"
                        label="Gender"
                        :items="genders"
                    ></v-combobox>
                    <DatePicker
                      name="Birth date"
                    />
                  </v-col>
                </v-row>
              </div>
              <div id="about-me" v-intersect.quiet="onIntersect">
                <v-row>
                  <v-col cols=12 md=3>
                    <v-subheader>About me</v-subheader>
                  </v-col>
                  <v-col cols=12 md=9>
                    <Editor
                      mode="preview"
                      ref="editor"
                      hint="Hint"
                      :outline="false"
                      :render-config="renderConfig"
                      v-model="text"
                    />
                  </v-col>
                </v-row>
              </div>
              <div id="education" v-intersect.quiet="onIntersect">
                <v-row>
                  <v-col cols=12 md=3>
                    <v-subheader>Education</v-subheader>
                  </v-col>
                  <v-col cols=12 md=9>
                    <v-text-field></v-text-field>
                  </v-col>
                </v-row>
              </div>
              <div id="skills" v-intersect.quiet="onIntersect">
                <v-row>
                  <v-col cols=12 md=3>
                    <v-subheader>Skills</v-subheader>
                  </v-col>
                  <v-col cols=12 md=9>
                    <v-combobox
                      v-model="technologiesSelect"
                      :items="technologies"
                      label="Technologies"
                      multiple
                      chips
                    >
                      <template v-slot:selection="{ attrs, item, parent, selected }">
                        <v-chip
                          v-if="item === Object(item)"
                          :key="JSON.stringify(item)"
                          v-bind="attrs"
                          :input-value="selected"
                          @click:close="parent.selectItem(item)"
                        >
                          <v-avatar
                            class="accent white--text"
                            left
                          >
                            <i :class="item.icon" style="font-size: 18px"></i>
                          </v-avatar>
                          <span class="pr-2">
                            {{ item.name }}
                          </span>
                          <v-icon
                            small
                            @click="parent.selectItem(item)"
                          >fa-times</v-icon>
                        </v-chip>
                      </template>
                      <template v-slot:item="{ index, item }">
                          {{ item.name }}
                      </template>
                    </v-combobox>
                  </v-col>
                </v-row>
              </div>
              <div id="contact-info" v-intersect.quiet="onIntersect">
                <v-row>
                  <v-col cols=12 md=3>
                    <v-subheader>Contact Info</v-subheader>
                  </v-col>
                  <v-col cols=12 md=9>
                    <v-text-field></v-text-field>
                  </v-col>
                </v-row>
              </div>
            </v-form>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { Editor } from 'vuetify-markdown-editor';

import bird1 from '../../assets/bird1.png';
import bird2 from '../../assets/bird2.png';
import bird3 from '../../assets/bird3.png';
import bird4 from '../../assets/bird4.png';
import DatePicker from '../Interface/DatePicker.vue';

export default {
  name: 'AddResume',
  components: {
    DatePicker,
    Editor,
  },
  data() {
    return {
      bird1,
      bird2,
      bird3,
      bird4,
      genders: [
        'Male',
        'Female',
        'Other',
      ],
      technologiesSelect: [],
      technologies: [
        {
          name: 'Angular',
          icon: 'devicon-angularjs-plain',
        },
        {
          name: 'Node',
          icon: 'devicon-nodejs-plain',
        },
        {
          name: 'Vue',
          icon: 'devicon-vuejs-plain',
        },
      ],
      text: '',
      renderConfig: {
        // Mermaid config
        mermaid: {
          theme: 'dark',
        },
      },

      // "currentView": null,
    };
  },
  mounted() {
    // Access properties or methods using $refs
    // this.$refs.editor.focus();
    // this.$refs.editor.upload();
    // Dark theme
    // this.$vuetify.theme.dark = true;
  },
  methods: {
    onIntersect(entries, observer) {
      // alert(JSON.stringify(observer));
      // alert(JSON.stringify(entries[0].id));
      console.log(entries);
      console.log(observer);
    },
  },
};
</script>

<style>
</style>
