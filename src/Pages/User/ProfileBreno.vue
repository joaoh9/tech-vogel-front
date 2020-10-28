<template>
  <g-bootstrap>
    <template template v-slot:first-col>
      <g-card minWidth="0" maxWidth="100%">
        <template v-slot:card-content>
          <div class="d-flex flex-column justify-space-between align-center text-center">
            <v-avatar size="144" color="primary" class="my-5">
              <v-img :src="user_.profilePhoto" alt="Profile photo" />
            </v-avatar>
            <h4 class="mt-2">{{ user_.name }}</h4>
            <h6 class="my-2">{{ resume_.mainRole }}</h6>
            <IconText
              class="my-5"
              icon="fa-map-marker-alt"
              color="secondary"
              :text="resume_.location.city + ', ' + resume_.location.country"
            />
          </div>
        </template>
      </g-card>
    </template>
    <template template v-slot:second-col>
      <section>
        <h5 class="font-weight-bold my-5">Work experience</h5>
        <div v-for="(work, index) in resume_.workHistory" v-bind:key="index">
          <div class="d-flex flex-column">
            <p>{{ work.startDate }} - {{ work.endDate }}</p>
            <h5>{{ work.role }}</h5>
            <h6>at {{ work.companyName }}</h6>
            <p>{{ work.description }}</p>
          </div>
        </div>
      </section>
      <v-divider color="secondary" class="my-5"></v-divider>
      <section>
        <h5 class="font-weight-bold my-5">Skills</h5>

        <p class="font-weight-bold my-5 subtitle">Tech Skills</p>
        <table class="text-left">
          <thead>
            <tr>
              <th style="min-width:20vw">Skill</th>
              <th>Years of Experience</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(skill, index) in resume_.skills.techSkills" v-bind:key="index">
              <td>{{ $t(`skills.dictionary.techSkills.${skill.skillId}`) }}</td>
              <td>{{ skill.experienceLevel }}</td>
            </tr>
          </tbody>
        </table>
        <p class="font-weight-bold my-5 subtitle">Soft Skills</p>
        <table class="text-left">
          <thead>
            <tr>
              <th style="min-width:20vw">Skill</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(skill, index) in resume_.skills.softSkills" v-bind:key="index">
              <td>{{ $t(`skills.dictionary.softSkills.${skill.skillId}`) }}</td>
            </tr>
          </tbody>
        </table>
        <p class="font-weight-bold my-5 subtitle">Language Skills</p>
        <table class="text-left">
          <thead>
            <tr>
              <th style="min-width:20vw">Skill</th>
              <th>Fluency Level</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(skill, index) in resume_.skills.languages" v-bind:key="index">
              <td>{{ $t(`skills.dictionary.languages.${skill.skillId}`) }}</td>
              <td>{{ skill.experienceLevel }}</td>
            </tr>
          </tbody>
        </table>
      </section>
      <v-divider color="secondary" class="my-5"></v-divider>
      <section>
        <h5 class="font-weight-bold my-5">Education</h5>

        <div
          v-for="(education, index) in resume_.education.educationInstitutions"
          v-bind:key="index"
        >
          <div class="d-flex flex-column">
            <p>
              {{ education.startDate }} - {{ education.endDate }} {{ education.institutionType }}
            </p>
            <h5>{{ education.degree }}</h5>
            <h6>at {{ education.name }}</h6>
            <p>{{ education.description }}</p>
          </div>
        </div>
      </section>
    </template>
  </g-bootstrap>
</template>

<script>
import IconText from 'Components/Interface/IconText';

import UserController from 'Controllers/user';
import ResumeController from 'Controllers/resume';

export default {
  name: 'UserProfile',
  components: {
    IconText,
  },
  mounted() {
    this.user = UserController.getByUsername('brenoam');
    if (!this.user) {
      this.$toast.error('Could not retrieve user info.');
    }
    this.resume = ResumeController.getByUsername('brenoam');
    if (!this.resume) {
      this.$toast.error('Could not retrieve user info.');
    }
  },
  data() {
    return {
      user_: {
        name: 'Paulo Souza',
      },
      resume_: {
        workFieldId: 'it',
        jobInterests: [ 'startups', 'smallAndMedium', 'large' ],
        contractType: [ 'FULL_TIME', 'HOURLY', 'PART_TIME' ],
        mainRole: 'Full Stack Developer',
        location: {
          city: 'Belo Horizonte',
          country: 'Brazil',
        },
        workHistory: [
          {
            companyName: 'company',
            role: 'Full stack',
            startDate: 2020,
            endDate: 2020,
            description: '',
            currentJob: true,
          },
        ],
        skills: {
          techSkills: [
            {
              skillId: 'javaScript',
              experienceLevel: 1,
            },
          ],
          softSkills: [
            {
              skillId: 'listening',
              experienceLevel: 0,
            },
          ],
          languages: [
            {
              skillId: 'ENG',
              experienceLevel: 2,
            },
            {
              skillId: 'SPN',
              experienceLevel: 0,
            },
            {
              skillId: 'POR',
              experienceLevel: 3,
            },
          ],
        },
        education: {
          educationInstitutions: [
            {
              degree: 'Computer Science',
              institutionType: 'COLLEGE',
              description: '',
              name: 'UFMG',
              startDate: 2016,
              endDate: 2020,
              location: {
                city: 'Belo Horizonte',
                country: 'BRA',
              },
            },
          ],
          researches: [],
          courses: [],
        },
        username: 'brenoam',
      },
    };
  },
};
</script>

<style>
.subtitle {
  border-bottom: 1px solid red;
  line-height: 66px;
  font-size: 20px;
}
th,
td {
  padding: 15px;
  text-align: left;
}
</style>
