<template>
  <div class="container">
    <v-card tile>
      <v-card-text>
        <v-form>
          <div id="personal-information" v-intersect.quiet="onIntersect">
            <v-card flat>
              <v-card-title>
                <h4>{{ $t('Resume.personalInformation._title') }}</h4>
              </v-card-title>
              <v-card-text>
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
              </v-card-text>
            </v-card>
          </div>
          <div id="education" v-intersect.quiet="onIntersect">
            <v-card flat>
              <v-card-title>
                <h4>{{ $t('Resume.education._title') }}</h4>
              </v-card-title>
              <v-card-text>
                <h3>{{ $t('Resume.education.academicFormation._title') }}</h3>
                <CardList
                  items="[]"
                >
                <v-card-text>

                  <v-text-field
                    tile
                    outlined
                    name="institution"
                    :label="$t('Resume.education.academicFormation.institution')"
                  ></v-text-field>
                  <v-text-field
                    tile
                    outlined
                    name="typeOfFormation"
                    :label="$t('Resume.education.academicFormation.typeOfFormation')"
                  ></v-text-field>
                  <v-text-field
                    tile
                    outlined
                    name="studyArea"
                    :label="$t('Resume.education.academicFormation.studyArea')"
                  ></v-text-field>
                  <h4>{{ $t('Resume.education.academicFormation.period._title') }}</h4>
                  <v-row>
                    <v-col cols=12 md=6>
                      <DatePicker
                        name="startDate"
                        :label="$t('Resume.education.academicFormation.period.startDate')"
                      />
                    </v-col>
                    <v-col cols=12 md=6>
                      <DatePicker
                        name="endDate"
                        :label="$t('Resume.education.academicFormation.period.endDate')"
                      />
                    </v-col>
                  </v-row>
                  <v-text-field
                    tile
                    outlined
                    name="grade"
                    :label="$t('Resume.education.academicFormation.grade')"
                  ></v-text-field>
                  <v-textarea
                    tile
                    outlined
                    name="description"
                    :label="$t('Resume.education.academicFormation.description')"
                  ></v-textarea>
                  <v-textarea
                    tile
                    outlined
                    name="activities"
                    :label="$t('Resume.education.academicFormation.activities')"
                  ></v-textarea>
                </v-card-text>
                </CardList>
                <h3>{{ $t('Resume.education.ressearches._title') }}</h3>
                <CardList
                  items="[]"
                >
                  <v-card-text>
                    <v-text-field
                    required
                    tile
                    outlined
                    :label="$t('Resume.education.ressearches.paperTitle')"
                    ></v-text-field>
                    <v-textarea
                    required
                    tile
                    outlined
                    :label="$t('Resume.education.ressearches.abstract')"
                    ></v-textarea>
                    <v-text-field
                    required
                    tile
                    outlined
                    :label="$t('Resume.education.ressearches.link')"
                    ></v-text-field>
                  </v-card-text>
                </CardList>
                <h3>{{ $t('Resume.education.courses._title') }}</h3>
                <CardList
                  items="[]"
                >
                  <v-card-text>
                    <v-text-field
                    required
                    tile
                    outlined
                    :label="$t('Resume.education.courses.courseTitle')"
                    ></v-text-field>
                    <v-textarea
                    required
                    tile
                    outlined
                    :label="$t('Resume.education.courses.courseDescription')"
                    ></v-textarea>
                    <v-text-field
                    required
                    tile
                    outlined
                    :label="$t('Resume.education.courses.platform')"
                    ></v-text-field>
                  </v-card-text>
                </CardList>
              </v-card-text>
            </v-card>
          </div>
          <div id="workHistory" v-intersect.quiet="onIntersect">
            <v-card flat>
              <v-card-title>
                <h4>{{ $t('Resume.workHistory._title') }}</h4>
              </v-card-title>
              <v-card-text>
                <CardList
                  items="[]"
                >
                <v-card-text>

                  <v-text-field
                    tile
                    outlined
                    name="companyName"
                    :label="$t('Resume.workHistory.companyName')"
                  ></v-text-field>
                  <v-text-field
                    tile
                    outlined
                    name="role"
                    :label="$t('Resume.workHistory.role')"
                  ></v-text-field>
                  <v-text-field
                    tile
                    outlined
                    name="location"
                    :label="$t('Resume.workHistory.location')"
                  ></v-text-field>
                  <v-textarea
                    tile
                    outlined
                    name="description"
                    :label="$t('Resume.workHistory.description')"
                  ></v-textarea>
                  <h4>{{ $t('Resume.workHistory.period._title') }}</h4>
                  <v-row>
                    <v-col cols=12 md=6>
                      <DatePicker
                        name="startDate"
                        :label="$t('Resume.workHistory.period.startDate')"
                      />
                    </v-col>
                    <v-col cols=12 md=6>
                      <DatePicker
                        name="endDate"
                        :label="$t('Resume.workHistory.period.endDate')"
                      />
                    </v-col>
                  </v-row>
                </v-card-text>
                </CardList>
              </v-card-text>
            </v-card>
          </div>
          <div id="skills" v-intersect.quiet="onIntersect">
            <v-card flat>
              <v-card-title>
                <h4>{{ $t('Resume.skills._title') }}</h4>
              </v-card-title>
              <v-card-text cols=12 md=9>
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
              </v-card-text>
            </v-card>
          </div>
        </v-form>
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
import CardList from '../Card/CardList.vue';

export default {
  name: 'AddResume',
  components: {
    DatePicker,
    Combobox,
    CardList,
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
