<template>
  <div class="container mb-8 mt-4">
    <!-- <v-row>
    <v-col cols=3>-->
    <!-- <ResumeDashboard :items="$t('Resume.sidePannel')"></ResumeDashboard> -->
    <!-- </v-col>
    <v-col cols=9>-->
    <v-card tile elevation="16">
      <v-card-text>
        <v-form>
          <div id="personal-information">
            <v-card flat>
              <v-card-title>
                <h4>{{ $t('Resume.personalInformation._title') }}</h4>
              </v-card-title>
              <v-card-text>
                <v-text-field
                  dense
                  required
                  outlined
                  name="fullName"
                  :label="$t('Resume.personalInformation.fullName')"
                ></v-text-field>
                <DatePicker
                  dense
                  name="birthDate"
                  :label="$t('Resume.personalInformation.birthDate')"
                />
                <v-textarea
                  dense
                  auto-grow
                  rows="3"
                  tile
                  outlined
                  name="personalBio"
                  :label="$t('Resume.personalInformation.personalBio')"
                ></v-textarea>
                <v-textarea
                  dense
                  auto-grow
                  rows="3"
                  tile
                  outlined
                  name="businessBio"
                  :label="$t('Resume.personalInformation.businessBio')"
                ></v-textarea>
                <v-textarea
                  dense
                  auto-grow
                  rows="3"
                  tile
                  outlined
                  name="lookingFor"
                  :label="$t('Resume.personalInformation.lookingFor')"
                ></v-textarea>
              </v-card-text>
            </v-card>
          </div>
          <div id="education">
            <v-card flat>
              <v-card-title>
                <h4>{{ $t('Resume.education._title') }}</h4>
              </v-card-title>
              <v-card-text>
                <h3>{{ $t('Resume.education.academicFormation._title') }}</h3>
                <CardList editMode>
                  <template v-slot:default="{ item }">
                    <v-card-text>
                      <v-text-field
                        dense
                        tile
                        outlined
                        name="institution"
                        :value="item.institution"
                        :label="$t('Resume.education.academicFormation.institution')"
                      ></v-text-field>
                      <v-text-field
                        dense
                        tile
                        outlined
                        name="typeOfFormation"
                        :value="item.typeOfFormation"
                        :label="$t('Resume.education.academicFormation.typeOfFormation')"
                      ></v-text-field>
                      <v-text-field
                        dense
                        tile
                        outlined
                        name="studyArea"
                        :value="item.studyArea"
                        :label="$t('Resume.education.academicFormation.studyArea')"
                      ></v-text-field>
                      <h4>{{ $t('Resume.education.academicFormation.period._title') }}</h4>
                      <v-row>
                        <v-col cols="12" md="6">
                          <DatePicker
                            dense
                            name="startDate"
                            :value="item.startDate"
                            :label="$t('Resume.education.academicFormation.period.startDate')"
                          />
                        </v-col>
                        <v-col cols="12" md="6">
                          <DatePicker
                            dense
                            name="endDate"
                            :value="item.endDate"
                            :label="$t('Resume.education.academicFormation.period.endDate')"
                          />
                        </v-col>
                      </v-row>
                      <v-text-field
                        dense
                        tile
                        outlined
                        name="grade"
                        :value="item.grade"
                        :label="$t('Resume.education.academicFormation.grade')"
                      ></v-text-field>
                      <v-textarea
                        dense
                        auto-grow
                        rows="3"
                        tile
                        outlined
                        name="description"
                        :value="item.description"
                        :label="$t('Resume.education.academicFormation.description')"
                      ></v-textarea>
                      <v-textarea
                        dense
                        auto-grow
                        rows="3"
                        tile
                        outlined
                        name="activities"
                          :value="item.activities"
                        :label="$t('Resume.education.academicFormation.activities')"
                      ></v-textarea>
                    </v-card-text>
                  </template>
                </CardList>
                <h3>{{ $t('Resume.education.ressearches._title') }}</h3>
                <CardList editMode>
                  <template>
                    <v-card-text>
                      <v-text-field
                        dense
                        required
                        tile
                        outlined
                        :label="$t('Resume.education.ressearches.paperTitle')"
                      ></v-text-field>
                      <v-textarea
                        dense
                        auto-grow
                        rows="3"
                        required
                        tile
                        outlined
                        :label="$t('Resume.education.ressearches.abstract')"
                      ></v-textarea>
                      <v-text-field
                        dense
                        required
                        tile
                        outlined
                        :label="$t('Resume.education.ressearches.link')"
                      ></v-text-field>
                    </v-card-text>
                  </template>
                </CardList>
                <h3>{{ $t('Resume.education.courses._title') }}</h3>
                <CardList editMode :items="[]">
                  <template>
                    <v-card-text>
                      <v-text-field
                        dense
                        required
                        tile
                        outlined
                        :label="$t('Resume.education.courses.courseTitle')"
                      ></v-text-field>
                      <v-textarea
                        dense
                        auto-grow
                        rows="3"
                        required
                        tile
                        outlined
                        :label="$t('Resume.education.courses.courseDescription')"
                      ></v-textarea>
                      <v-text-field
                        dense
                        required
                        tile
                        outlined
                        :label="$t('Resume.education.courses.platform')"
                      ></v-text-field>
                    </v-card-text>
                  </template>
                </CardList>
              </v-card-text>
            </v-card>
          </div>
          <div id="workHistory">
            <v-card flat>
              <v-card-title>
                <h4>{{ $t('Resume.workHistory._title') }}</h4>
              </v-card-title>
              <v-card-text>
                <CardList editMode v-model="work">
                  <template v-slot:default="{ item }">
                    <v-card-text>
                      <v-text-field
                        dense
                        tile
                        outlined
                        name="companyName"
                        :value="item.companyName"
                        :label="$t('Resume.workHistory.companyName')"
                      ></v-text-field>
                      <v-text-field
                        dense
                        tile
                        outlined
                        name="role"
												:value="item.role"
                        :label="$t('Resume.workHistory.role')"
                      ></v-text-field>
                      <v-text-field
                        dense
                        tile
                        outlined
                        name="location"
												:value="item.location"
                        :label="$t('Resume.workHistory.location')"
                      ></v-text-field>
                      <v-textarea
                        dense
                        auto-grow
                        rows="3"
                        tile
                        outlined
                        name="description"
												:value="item.description"
                        :label="$t('Resume.workHistory.description')"
                      ></v-textarea>
                      <h4>{{ $t('Resume.workHistory.period._title') }}</h4>
                      <v-row>
                        <v-col cols="12" md="6">
                          <DatePicker
                            dense
                            name="startDate"
												:value="item.startDate"
                            :label="$t('Resume.workHistory.period.startDate')"
                          />
                        </v-col>
                        <v-col cols="12" md="6">
                          <DatePicker
                            dense
                            name="endDate"
												:value="item.endDate"
                            :label="$t('Resume.workHistory.period.endDate')"
                          />
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </template>
                </CardList>
              </v-card-text>
            </v-card>
          </div>
          <!-- <div id="skills">
            <v-card flat>
              <v-card-title>
                <h4>{{ $t('Resume.skills._title') }}</h4>
              </v-card-title>
              <v-card-text cols="12" md="9">
                <Combobox
                  dense
                  :items="$t('data.softSkills')"
                  multiple
                  :label="$t('Resume.skills.softSkills')"
                ></Combobox>
                <Combobox
                  dense
                  :items="$t('data.knowledgeAreas')"
                  multiple
                  :label="$t('Resume.skills.knowledgeAreas')"
                ></Combobox>
                <Combobox
                  dense
                  :items="$t('data.frameworks')"
                  multiple
                  :label="$t('Resume.skills.frameworks')"
                ></Combobox>
                <Combobox
                  dense
                  :items="$t('data.programmingLanguages')"
                  multiple
                  :label="$t('Resume.skills.programmingLanguages')"
                ></Combobox>
                <Combobox
                  dense
                  :items="$t('data.customSkills')"
                  multiple
                  :label="$t('Resume.skills.customSkills')"
                ></Combobox>
              </v-card-text>
            </v-card>
          </div> -->
        </v-form>
      </v-card-text>
    </v-card>
    <!-- </v-col>
    </v-row>-->
  </div>
</template>

<script>
import DatePicker from 'Interface/DatePicker';
// import Combobox from 'Interface/Combobox';
import CardList from 'Components/Card/CardList';
// import ResumeDashboard from 'Components/LeftPannel/NavigationDrawer';

export default {
  name: 'AddResume',
  components: {
    DatePicker,
    // Combobox,
    CardList,
    // ResumeDashboard,
  },
  data() {
    return {
      work: [{
        companyName: 'A',
        role: 'Developer',
      }],
    };
  },
};
</script>

<style>
</style>
