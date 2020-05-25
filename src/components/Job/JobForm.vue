<template>
  <v-row class="justify-content-center text-center mt-6">
    <v-col lg="2" sm="0"></v-col>
    <v-col lg="2" sm="4">
      <job-dashboard />
    </v-col>
    <v-col lg="6" sm="6" class="text-center">
      <v-form class="mt-3">
        <v-row @mouseenter="tooltips.title = true" @mouseleave="tooltips.title = false">
          <v-col class="text-left">
            <h3>Job Title</h3>
          </v-col>
        </v-row>
        <v-row>
          <v-col @mouseenter="tooltips.title = true" @mouseleave="tooltips.title = false">
            <v-text-field label="Title" counter="100" outlined v-model="title"></v-text-field>
          </v-col>
        </v-row>

        <v-row @mouseenter="tooltips.description = true" @mouseleave="tooltips.description = false">
          <v-col class="text-left">
            <h3>Job Description</h3>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-textarea
              @mouseenter="tooltips.description = true"
              @mouseleave="tooltips.description = false"
              label="Description"
              counter="1000"
              outlined
              v-model="description"
            ></v-textarea>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-autocomplete
              v-model="jobType"
              label="Job Type"
              title="Job Type"
              outlined
              :items="['full time', 'part time', 'hourly']"
            ></v-autocomplete>
          </v-col>

          <v-col>
            <v-autocomplete
              v-model="category"
              label="Category"
              title="Category"
              outlined
              :items="['Blockchain', 'Data Mining', 'Web Development']"
            ></v-autocomplete>
          </v-col>
        </v-row>

        <v-row
          @mouseenter="tooltips.requirements = true"
          @mouseleave="tooltips.requirements = false"
          class="mt-n4"
        >
          <v-col class="text-left">
            <h3>{{this.requiredSkillsTitle}}</h3>
          </v-col>
          <v-col>
            <v-autocomplete
              v-model="requiredSkillsTitle"
              label="Change section title"
              title="Change section title"
              outlined
              :items="$t('data.preMadePhrases.requiredSkills')"
            ></v-autocomplete>
          </v-col>
        </v-row>
        <v-row
          @mouseenter="tooltips.requiredSkills = true"
          @mouseleave="tooltips.requiredSkills = false"
        >
          <v-col>
            <v-combobox
              v-model="technologies"
              :items="$t('data.technologies')"
              label="Technologies"
              multiple
              outlined
              chips
            >
              <template v-slot:selection="data">
                {{data}}
                <v-chip
                  :key="JSON.stringify(data.item)"
                  v-bind="data.attrs"
                  :input-value="data.selected"
                  :disabled="data.disabled"
                  @click:close="data.parent.selectItem(data.item)"
                >
                  <v-avatar
                    class="accent white--text"
                    left
                    v-text="data.item.slice(0, 1).toUpperCase()"
                  ></v-avatar>
                  {{ data.item }}
                </v-chip>
              </template>
            </v-combobox>
          </v-col>
        </v-row>

        <v-row class="mt-n4">
          <v-col class="text-left">
            <h3>{{this.desiredSkillsTitle}}</h3>
          </v-col>
          <v-col>
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
            <v-textarea label="Desired Skills" v-model="desiredSkills" counter="800" outlined></v-textarea>
          </v-col>
        </v-row>

        <v-row class="mt-n4">
          <v-col class="text-left">
            <h3>{{this.responsabilitiesTitle}}</h3>
          </v-col>
          <v-col>
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
              v-model="responsabilities"
              counter="800"
              outlined
            ></v-textarea>
          </v-col>
        </v-row>

        <div :key="index" v-for="(customField, index) of customFields">
          <v-row>
            <v-col class="text-left">
              <v-text-field
                label="Field Title"
                counter="100"
                outlined
                v-model="customFields[index].title"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-textarea
                label="Field Description"
                counter="1000"
                outlined
                v-model="customFields[index].description"
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
              v-model="salary.currency"
              label="Curency"
              title="Payment Curency"
              outlined
              :items="['USD', 'GBP', 'EUR']"
            ></v-autocomplete>
          </v-col>
          <v-col>
            <v-autocomplete
              v-model="salary.timeFrame"
              label="Time Frame"
              title="Time Frame"
              outlined
              :items="['Monthly', 'Yearly', 'Hourly']"
            ></v-autocomplete>
          </v-col>
          <v-col>
            <v-text-field
              v-model="salary.min"
              :label="range ? 'From' : 'Price'"
              :title="range ? 'From' : 'Price'"
              outlined
            ></v-text-field>
          </v-col>
          <v-col v-if="range">
            <v-text-field
              v-model="salary.max"
              :label="range ? 'To' : 'Price'"
              :title="range ? 'To' : 'Price'"
              outlined
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row class="mt-n12">
          <v-col class="text-left">
            <v-checkbox v-model="range" label="Set salary range"></v-checkbox>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-combobox
              v-model="technologies"
              :items="$t('data.technologies')"
              label="Technologies"
              multiple
              outlined
              chips
            >
              <template v-slot:selection="data">
                <v-chip
                  :key="JSON.stringify(data.item)"
                  v-bind="data.attrs"
                  :input-value="data.selected"
                  :disabled="data.disabled"
                  @click:close="data.parent.selectItem(data.item)"
                >
                  <v-avatar
                    class="accent white--text"
                    left
                    v-text="data.item.slice(0, 1).toUpperCase()"
                  ></v-avatar>
                  {{ data.item }}
                </v-chip>
              </template>
            </v-combobox>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="text-left">
            <v-btn color="success">Preview</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
import JobDashboard from './JobDashboard.vue';

export default {
  name: 'New Job',
  components: {
    JobDashboard,
  },
  data() {
    return {
      title: '',
      description: '',
      jobType: '',
      category: '',
      requirements: '',
      responsabilities: '',
      salary: {
        currency: '',
        min: '',
        max: '',
        timeFrame: '',
      },
      range: false,
      customFields: [],
      technologies: [],
      tooltips: {
        title: false,
        description: false,
        jobType: false,
        category: false,
        requirements: false,
        responsabilities: false,
      },
      responsabilitiesTitle: 'Responsabilities',
      requiredSkillsTitle: 'Required Skills',
      desiredSkillsTitle: 'Desired Skills',
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

    validateForm() {
      return (
        this.title.length < 100
        && this.description.length < 1000
        && this.jobType
        && this.requirements
        && this.responsabilities
        && this.salary.currency
        && this.salary.min
        && this.salary.timeFrame
        && this.min
      );
    },
  },
};
</script>

<style>
</style>
