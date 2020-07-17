<template>
  <div class="container">
    <v-card class="primary-card">
      <v-row>
        <v-col cols="1"></v-col>
        <v-col cols="10">
          <v-form>
            <v-stepper v-model="currentStep">
              <v-stepper-items>
                <v-stepper-content step="1">
                  <div>
                    <h2 class="mb-12">{{$t('Company.new._1.pageTitle')}}</h2>
                    <FormInput :label="$t('Company.new._1.companyName')">
                      <v-text-field tile outlined></v-text-field>
                    </FormInput>
                    <FormInput :label="$t('Company.new._1.representativeName')">
                      <v-text-field tile outlined></v-text-field>
                    </FormInput>
                    <FormInput :label="$t('Company.new._1.representativeEmail')">
                      <v-text-field tile outlined></v-text-field>
                    </FormInput>
                    <v-row>
                      <v-col cols="12" md="6">
                        <FormInput :label="$t('Company.new._1.password')">
                          <v-text-field
                            tile
                            outlined
                            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="showPassword ? 'text' : 'password'"
                            @click:append="showPassword = !showPassword"
                          ></v-text-field>
                        </FormInput>
                      </v-col>
                      <v-col cols="12" md="6">
                        <FormInput :label="$t('Company.new._1.confirmPassword')">
                          <v-text-field
                            tile
                            outlined
                            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="showPassword ? 'text' : 'password'"
                            @click:append="showPassword = !showPassword"
                          ></v-text-field>
                        </FormInput>
                      </v-col>
                    </v-row>
                  </div>
                  <div class="d-flex justify-end flex-fill m-3">
                    <v-btn large color="primary" @click="currentStep += 1">Next</v-btn>
                  </div>
                </v-stepper-content>
                <v-stepper-content step="2">
                  <div>
                    <h2 class="mb-12">{{$t('Company.new._2.pageTitle')}}</h2>
                    <v-avatar color="light-gray" size="96">
                      <img src alt="Company" />
                    </v-avatar>
                    <FormInput :label="$t('Company.new._2.location')">
                      <v-text-field tile outlined></v-text-field>
                    </FormInput>
                    <FormInput :label="$t('Company.new._2.aboutYourCompany')">
                      <v-textarea auto-grow rows="3" tile outlined></v-textarea>
                    </FormInput>
                  </div>
                  <div class="d-flex justify-space-between">
                    <v-btn large color="secondary" @click="currentStep -= 1">Back</v-btn>
                    <v-btn large color="primary" @click="currentStep += 1" class="align-self-end">Next</v-btn>
                  </div>
                </v-stepper-content>
                <v-stepper-content step="3">
                  <div>
                    <h2 class="mb-12">{{$t('Company.new._3.pageTitle')}}</h2>
                    <FormInput :label="$t('Company.new._3.webpage')">
                      <v-text-field tile outlined></v-text-field>
                    </FormInput>
                    <FormInput :label="$t('Company.new._3.linkedin')">
                      <v-text-field tile outlined></v-text-field>
                    </FormInput>
                    <FormInput :label="$t('Company.new._3.instagram')">
                      <v-text-field tile outlined></v-text-field>
                    </FormInput>
                    <FormInput :label="$t('Company.new._3.twitter')">
                      <v-text-field tile outlined></v-text-field>
                    </FormInput>
                  </div>
                  <div class="d-flex justify-space-between">
                    <v-btn large color="secondary" @click="currentStep -= 1">Back</v-btn>
                    <v-btn large color="success" @click="currentStep = 1" class="align-self-end">Finish</v-btn>
                  </div>
                </v-stepper-content>
              </v-stepper-items>
            </v-stepper>
          </v-form>
        </v-col>
        <v-col cols="1"></v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import FormInput from 'Components/Interface/FormInput';

export default {
  name: 'New',
  props: {},
  components: {
    FormInput,
  },
  data() {
    return {
      currentStep: 1,
      showPassword: false,
    };
  },
};
</script>

