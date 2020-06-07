<template>
  <v-row class="justify-content-center text-center mt-6">
    <v-col class="ml-6" lg="2" md="2">
      <job-dashboard />
    </v-col>
    <v-col lg="6" md="8" class="text-center">
      <v-form class="mt-3">
        <v-row>
          <v-col class="text-left">
            <h3>Job Title</h3>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field label="Title" dense counter="100" flat v-model="job.title"></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col class="text-left">
            <h3>Job Description</h3>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-textarea label="Description" counter="1000" outlined v-model="job.description"></v-textarea>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-autocomplete
              v-model="job.type"
              label="Job Type"
              title="Job Type"
              outlined
              :items="['full time', 'part time', 'hourly']"
            ></v-autocomplete>
          </v-col>
        </v-row>

        <v-row class="mt-n4">
          <v-col class="text-left">
            <h3>{{this.requiredSkillsTitle}}</h3>
          </v-col>
          <v-col v-if="changeSectionTitle">
            <v-autocomplete
              v-model="requiredSkillsTitle"
              label="Change section title"
              title="Change section title"
              outlined
              :items="$t('data.preMadePhrases.requiredSkills')"
            ></v-autocomplete>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-textarea label="Required Skills" v-model="job.requiredSkills" counter="800" outlined></v-textarea>
          </v-col>
        </v-row>

        <v-row class="mt-n4">
          <v-col class="text-left">
            <h3>{{this.desiredSkillsTitle}}</h3>
          </v-col>
          <v-col v-if="changeSectionTitle">
            <v-autocomplete
              v-model="desiredSkillsTitle"
              label="Change section title"
              title="Change section title"
              outlined
              :items="$t('data.preMadePhrases.desiredSkills')"
            ></v-autocomplete>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-textarea label="Desired Skills" v-model="job.desiredSkills" counter="800" outlined></v-textarea>
          </v-col>
        </v-row>

        <v-row class="mt-n4">
          <v-col class="text-left">
            <h3>{{this.responsabilitiesTitle}}</h3>
          </v-col>
          <v-col v-if="changeSectionTitle">
            <v-autocomplete
              v-model="responsabilitiesTitle"
              label="Change section title"
              title="Change section title"
              outlined
              :items="$t('data.preMadePhrases.responsabilities')"
            ></v-autocomplete>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-textarea
              label="Job Responsabilities"
              v-model="job.responsabilities"
              counter="800"
              outlined
            ></v-textarea>
          </v-col>
        </v-row>

        <div :key="index" v-for="(customField, index) of job.customFields">
          <v-row>
            <v-col class="text-left">
              <v-text-field
                label="Field Title"
                counter="100"
                outlined
                v-model="job.customFields[index].title"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-textarea
                label="Field Description"
                counter="1000"
                outlined
                v-model="job.customFields[index].description"
              ></v-textarea>
            </v-col>
          </v-row>
        </div>

        <v-row class="mt-n4">
          <v-col class="text-left">
            <v-btn class="primary" @click="addField">Add field</v-btn>
          </v-col>
        </v-row>

        <v-row>
          <v-col class="text-left">
            <h3>Salary</h3>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-autocomplete
              v-model="job.salary.currency"
              label="Curency"
              title="Payment Curency"
              outlined
              :items="['USD', 'GBP', 'EUR']"
            ></v-autocomplete>
          </v-col>
          <v-col>
            <v-autocomplete
              v-model="job.salary.timeFrame"
              label="Time Frame"
              title="Time Frame"
              outlined
              :items="['Monthly', 'Yearly', 'Hourly']"
            ></v-autocomplete>
          </v-col>
          <v-col>
            <v-text-field
              v-model="job.salary.min"
              :label="range ? 'From' : 'Price'"
              :title="range ? 'From' : 'Price'"
              outlined
            ></v-text-field>
          </v-col>
          <v-col v-if="job.range">
            <v-text-field
              v-model="job.salary.max"
              :label="range ? 'To' : 'Price'"
              :title="range ? 'To' : 'Price'"
              outlined
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row class="mt-n12">
          <v-col class="text-left">
            <v-checkbox v-model="job.range" label="Set salary range"></v-checkbox>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-autocomplete
              v-model="job.category"
              label="Category"
              title="Category"
              outlined
              :items="['Blockchain', 'Data Mining', 'Web Development']"
            ></v-autocomplete>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <Combobox2
              label="Knowledge Areas"
              items="data.knowledgeAreas"
              v-model="job.skills.knowledgeAreas"
            ></Combobox2>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <Combobox2
              label="Pogramming Languages"
              items="data.programmingLanguages"
              v-model="job.skills.programmingLanguages"
            ></Combobox2>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <Combobox2 label="Frameworks" items="data.frameworks" v-model="job.skills.frameworks"></Combobox2>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <Combobox2 label="Soft Skills" items="data.softSkills" v-model="job.skills.softSkills"></Combobox2>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="text-left">
            <v-btn @click="send" color="success">Preview</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-col>
    <v-col lg="2" md="1"></v-col>
  </v-row>
</template>

<script>
import JobDashboard from './JobDashboard';
import Combobox2 from 'Interface/Combobox-2';
import JobController from 'Controllers/job-controller'

export default {
  name: 'New Job',
  components: {
    JobDashboard,
    Combobox2,
  },
  data() {
    return {
      job: {
        title: '',
        description: '',
        type: '',
        category: '',
        requiredSkills: '',
        desiredSkills: '',
        responsabilities: '',
        salary: {
          currency: '',
          min: '',
          max: '',
          timeFrame: '',
        },
        customFields: [],
        skills: {
          knowledgeAreas: [],
          programmingLanguages: [],
          frameworks: [],
          softSkills: [],
        },
        range: false,
      },
      tooltips: {
        title: false,
        description: false,
        type: false,
        category: false,
        requirements: false,
        responsabilities: false,
      },
      responsabilitiesTitle: 'Responsabilities',
      requiredSkillsTitle: 'Required Skills',
      desiredSkillsTitle: 'Desired Skills',
      items: [ 'js', 'vue' ],
      changeSectionTitle: false,
    };
  },
  methods: {
    addField() {
      if (this.customFields.length === 4) {
        alert('You can only add up to 4 custom fields!');
        return;
      }

      this.customFields.push({ title: '', description: '' });
    },

    send() {
      if (this.validateForm()) {
        const jobController = JobController()
        jobController.registerJob(this.job)

        this.$router.push({
          name: 'Job Description',
          params: { job: this.job },
        });
      }
    },

    validateForm() {
      return (
        this.job.title
        && this.job.title.length < 100
        && this.job.description
        && this.job.description.length < 1000
        && this.job.type
        && this.job.requiredSkills
        && this.job.requiredSkills.length < 1000
        && this.job.desiredSkills
        && this.job.desiredSkills.length < 1000
        && this.job.responsabilities
        && this.job.responsabilities.length < 1000
        && this.job.salary.currency
        && this.job.salary.min
        && (this.job.range ? this.job.salary.max : true)
        && this.job.salary.timeFrame
        && this.job.category
        && this.job.skills.knowledgeAreas.length >= 1
        && this.job.skills.knowledgeAreas.length < 5
        && this.job.skills.programmingLanguages.length >= 1
        && this.job.skills.programmingLanguages.length < 5
        && this.job.skills.frameworks.length >= 1
        && this.job.skills.frameworks.length < 5
      );
    },
  },
};
</script>

<style>
</style>
