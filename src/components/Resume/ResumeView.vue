<template>
  <div class="container">
    <v-card
      tile
    >
      <v-card-text>
        <v-row>
          <v-col cols=12 md=3>
            <div class="d-flex flex-column align-center flex-fill">
              <v-avatar size="164">
                <v-img
                  src='https://cdn.vuetifyjs.com/images/cards/cooking.png'
                />
              </v-avatar>
              <h3 class="mt-2">
                {{resume.personalInformation.fullName}}
              </h3>
              <v-card
                flat
              >
                <v-card-text>
                  <h4 class="font-weight-normal">Bio</h4>
                  <v-divider class="mb-2"></v-divider>
                  <p class="text-justify">{{resume.personalInformation.businessBio}}</p>
                </v-card-text>
              </v-card>
            </div>
          </v-col>
          <v-col cols=12 md=1 v-if="this.$vuetify.breakpoint.mdAndUp">
            <v-divider vertical></v-divider>
          </v-col>
          <v-col cols=12 md=8>
             <v-card
              flat
            >
              <v-card-text>
                <h4 class="font-weight-normal">Work History</h4>
                <v-divider class="mb-2"></v-divider>
                <Timeline
                  :items="resume.workHistory"
                >
                  <template v-slot:opposite-side="{ item }">{{item.startDate}} - {{item.endDate}}</template>
                  <template v-slot:card="{ item }">
                    <v-card-text>
                      <b>{{item.companyName}}</b><br/>
                      {{item.role}}
                    </v-card-text>
                  </template>
                  <template v-slot:dialog="{ item }">
                    <v-card-title>{{item.companyName}}</v-card-title>
                    <v-card-subtitle>{{item.role}}</v-card-subtitle>
                    <v-card-text>
                      {{item.description}} <br>
                      {{item.location}}
                    </v-card-text>
                  </template>
                </Timeline>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import Timeline from '../Interface/Timeline';

export default {
  name: 'ResumeView',
  components: {
    Timeline,
  },
  data() {
    return {
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
      resume: {
        personalInformation: {
          _title: 'Personal information',
          fullName: 'Full name',
          gender: 'Gender',
          birthDate: 'Birth date',
          personalBio: 'Personal bio Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n Morbi scelerisque egestas odio.\n Integer commodo purus ornare elit placerat consequat.',
          businessBio: 'Business Bio Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n Morbi scelerisque egestas odio.\n Integer commodo purus ornare elit placerat consequat.',
          lookingFor: 'What I\'m looking for',
        },
        education: {
          _title: 'Education',
          academicFormation: [
            {
              institution: 'Institution',
              typeOfFormation: 'Formation',
              studyArea: 'Study area',
              period: {
                _title: 'Period',
                startDate: 'Start date',
                endDate: 'End date',
              },
              grade: 'Grade',
              description: 'Description',
              activities: 'Activities and groups',
            },
          ],
          ressearches: [
            {
              paperTitle: 'Paper title',
              abstract: 'Abstract',
              link: 'Link',
            },
          ],
          courses: [
            {
              courseTitle: 'Course title',
              courseDescription: 'Description',
              platform: 'Platform',
            },
          ],
          certificates: 'Certificates',
        },
        workHistory: [
          {
            _title: 'Work History',
            companyName: 'Company name',
            role: 'Role',
            description: 'Description',
            location: 'Location',
            startDate: '2016',
            endDate: 'now',
          },
        ],
        skills: {
          _title: 'Skills',
          softSkills: 'Soft skills',
          knowledgeAreas: 'Knowledge Areas',
          frameworks: 'Frameworks',
          programmingLanguages: 'Programming languages',
          customSkills: 'Custom skills',
        },
      },
    };
  },
};
</script>

<style>
</style>
