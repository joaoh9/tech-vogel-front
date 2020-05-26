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
                      {{ $t('Resume.personalInformation.title') }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item href="#education">
                  <v-list-item-content>
                    <v-list-item-title>
                      {{ $t('Resume.education.title') }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item href="#work-history">
                  <v-list-item-content>
                    <v-list-item-title>
                      {{ $t('Resume.workHistory.title') }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item href="#skills">
                  <v-list-item-content>
                    <v-list-item-title>
                      {{ $t('Resume.skills.title') }}
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
                        outlined
                        name="fullName"
                        :label="$t('Resume.personalInformation.fullName')"
                    ></v-text-field>
                    <v-combobox
                        required
                        tile
                        outlined
                        name="gender"
                        :label="$t('Resume.personalInformation.gender')"
                        :items="genders"
                    ></v-combobox>
                    <DatePicker
                      name="birthDate"
                      :label="$t('Resume.personalInformation.birthDate')"
                    />
                    <v-textarea
                      tile
                      outlined
                      name="personalBio"
                      :label="$t('Resume.personalInformation.personalBio')"
                    ></v-textarea>
                    <v-textarea
                      tile
                      outlined
                      name="businessBio"
                      :label="$t('Resume.personalInformation.businessBio')"
                    ></v-textarea>
                    <v-textarea
                      tile
                      outlined
                      name="lookingFor"
                      :label="$t('Resume.personalInformation.lookingFor')"
                    ></v-textarea>
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
                    <Combobox
                      :items='technologies'
                      multiple
                      title='Skills'
                    ></Combobox>
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
import bird1 from '../../assets/bird1.png';
import bird2 from '../../assets/bird2.png';
import bird3 from '../../assets/bird3.png';
import bird4 from '../../assets/bird4.png';
import DatePicker from '../Interface/DatePicker.vue';
import Combobox from '../Interface/Combobox.vue';

export default {
  name: 'AddResume',
  components: {
    DatePicker,
    Combobox,
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
