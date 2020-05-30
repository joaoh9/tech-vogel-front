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
                      {{ $t('Resume.personalInformation._title') }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item href="#education">
                  <v-list-item-content>
                    <v-list-item-title>
                      {{ $t('Resume.education._title') }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item href="#work-history">
                  <v-list-item-content>
                    <v-list-item-title>
                      {{ $t('Resume.workHistory._title') }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item href="#skills">
                  <v-list-item-content>
                    <v-list-item-title>
                      {{ $t('Resume.skills._title') }}
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
                    <v-subheader>{{ $t('Resume.personalInformation._title') }}</v-subheader>
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
                    <v-subheader>{{ $t('Resume.education._title') }}</v-subheader>
                  </v-col>
                  <v-col cols=12 md=9>
                    <div class="outline-border p-1 mb-5">
                      <h1><span>{{ $t('Resume.education.highSchool._title') }}</span></h1>
                      <div class="my-1 p-1">
                        <v-text-field
                          tile
                          outlined
                          name="highSchoolName"
                          :label="$t('Resume.education.highSchool.name')"
                        ></v-text-field>
                        <div class="outline-border p-1">
                          <h1><span>{{ $t('Resume.education.location._title') }}</span></h1>
                          <div class="my-1 p-1">
                            <v-text-field
                              tile
                              outlined
                              name="highSchoolCity"
                              :label="$t('Resume.education.location.city')"
                            ></v-text-field>
                            <v-text-field
                              tile
                              outlined
                              name="highSchoolState"
                              :label="$t('Resume.education.location.state')"
                            ></v-text-field>
                            <v-text-field
                              tile
                              outlined
                              name="highSchoolCountry"
                              :label="$t('Resume.education.location.country')"
                            ></v-text-field>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="outline-border p-1 mb-5">
                      <h1><span>{{ $t('Resume.education.college._title') }}</span></h1>
                      <div class="my-1 p-1">
                        <v-text-field
                          tile
                          outlined
                          name="collegeName"
                          :label="$t('Resume.education.college.name')"
                        ></v-text-field>
                        <div class="outline-border p-1">
                          <h1><span>{{ $t('Resume.education.location._title') }}</span></h1>
                          <div class="my-1 p-1">
                            <v-text-field
                              tile
                              outlined
                              name="collegeCity"
                              :label="$t('Resume.education.location.city')"
                            ></v-text-field>
                            <v-text-field
                              tile
                              outlined
                              name="collegeState"
                              :label="$t('Resume.education.location.state')"
                            ></v-text-field>
                            <v-text-field
                              tile
                              outlined
                              name="collegeCountry"
                              :label="$t('Resume.education.location.country')"
                            ></v-text-field>
                          </div>
                        </div>
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </div>
              <div id="skills" v-intersect.quiet="onIntersect">
                <v-row>
                  <v-col cols=12 md=3>
                    <v-subheader>{{ $t('Resume.skills._title') }}</v-subheader>
                  </v-col>
                  <v-col cols=12 md=9>
                    <Combobox
                      :items='technologies'
                      multiple
                      :label="$t('Resume.skills.softSkills')"
                    ></Combobox>
                    <Combobox
                      :items='technologies'
                      multiple
                      :label="$t('Resume.skills.knowledgeAreas')"
                    ></Combobox>
                    <Combobox
                      :items='technologies'
                      multiple
                      :label="$t('Resume.skills.frameworks')"
                    ></Combobox>
                    <Combobox
                      :items='technologies'
                      multiple
                      :label="$t('Resume.skills.programmingLanguages')"
                    ></Combobox>
                    <Combobox
                      :items='technologies'
                      multiple
                      :label="$t('Resume.skills.customSkills')"
                    ></Combobox>
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
.outline-border{
  border: 1px solid #B8C2CC;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 4px;
}

.outline-border span {
  background-color: white;
  font-weight:normal;
}
.outline-border h1 {
  text-align: left;
  margin-top: -10px;
  margin-left: 5px;
  height: 20px;
  line-height: 20px;
  font-size: 15px;
  font-family: inherit;
}
</style>
