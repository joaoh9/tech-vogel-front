<template>
  <div class="container">
    <v-row class="ma-2">
      <v-col md="6" cols="12">
        <v-row >
          <v-col md="7" cols="12">
            <v-img  width="275" contain :src="logo"></v-img>
          </v-col>
          <v-col md="5" cols="12">
            <div style="display: none">
              Icons made by
              <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from
              <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
            </div>
            <div class="d-flex">
              <img
                class="align-self-center mb-8 mr-4"
                height="40"
                :src="$t(`languages.icons.${country}`)"
              />
              <v-select
                class="align-self-center"
                outlined
                rounded
                v-model="country"
                item-text="language"
                item-value="country"
                :items="$t('languages.data')"
                @change="changeLocale"
              >
              </v-select>
            </div>
          </v-col>
          <v-col cols="12">
            <h1 class="display-1 darkBlue--text">
              {{ $t('LandingPage.title') }}
            </h1>
          </v-col>
          <v-col cols="12">
            <p class="darkBlue--text">
              {{ $t('LandingPage.subTitle') }}
            </p>
          </v-col>
          <v-col cols="12">
            <p class="title font-weight-regular justify-space-between">
              <span class="darkBlue--text">{{ $t('LandingPage.CTATittle') }}</span>
            </p>
            <v-row>
              <v-text-field
                v-if="step === 1"
                height="48"
                :label="$t('LandingPage.inputs.email.title')"
                type="email"
                :error-messages="errorMessage"
                prepend-inner-icon="mdi-email-outline"
                outlined
                rounded
                v-model="email"
              ></v-text-field>
              <v-text-field
                v-else-if="step === 2"
                height="48"
                :label="$t('LandingPage.inputs.name.title')"
                :hint="$t('LandingPage.inputs.name.hint')"
                :error-messages="errorMessage"
                prepend-inner-icon="mdi-account-outline"
                outlined
                rounded
                v-model="name"
              ></v-text-field>
              <Combobox2
                v-if="step === 3"
                color="yellow lighten-4"
                :hint="$t('LandingPage.inputs.skills.hint')"
                :label="$t('LandingPage.inputs.skills.title')"
                :items="$t('data.everySkill')"
                v-model="skills"
              ></Combobox2>
            </v-row>
            <v-row class="float-right">
              <v-btn
                @click="goBack"
                text
                rounded
                small
                color="darkBlue"
                class="mr-10 mt-3 font-weight-regular"
              >
                {{ $t('LandingPage.buttons.goBack') }}
              </v-btn>
              <v-btn
                large
                rounded
                height="56"
                color="primary"
                class=" ml-n7 white--text font-weight-bold"
                elevation="0"
                @click="advance"
              >
                {{ text }}
              </v-btn>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-col v-if="this.$vuetify.breakpoint.mdAndUp" md="6" cols="12">
        <v-img height="700" contain :src="pic"> </v-img>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import img31 from 'Assets/31.png';
import logo from 'Assets/logo-amarelo-grad.svg';
import Combobox2 from 'Interface/Combobox-2';
import Validators from 'Helpers/validators';

import pic2 from 'Assets/lp-pic-2.png';
import pic3 from 'Assets/lp-pic-3.png';
import pic4 from 'Assets/lp-pic-4.png';
import UserController from 'Controllers/user';

export default {
  name: 'LandingPage',
  components: {
    Combobox2,
  },
  mounted() {
    console.log(this.$i18n.locale);
    const random = Math.random();
    this.pic = random < 0.33 ? pic4 : random < 0.66 ? pic2 : pic3;
    this.text = this.$t('LandingPage.buttons.next');
  },
  data() {
    return {
      validators: Validators,
      text: '',
      step: 1,
      img31,
      logo,
      pic: '',
      name: '',
      email: '',
      skills: [],
      errorMessage: '',
      country: 'usa',
    };
  },
  methods: {
    advance() {
      let errorMsg = false;
      switch (this.step) {
        case 1:
          errorMsg = this.validators.email(this.email);
          if (errorMsg === true) {
            (this.errorMessage = ''), this.step++;
          } else {
            this.errorMessage = this.$t('LandingPage.inputs.email.errorMessage');
          }
          break;
        case 2:
          errorMsg = this.validators.minCounter(this.name, 5);
          if (errorMsg === true) {
            this.errorMessage = '';
            this.step++;
            this.text = this.$t('LandingPage.buttons.confirm');
          } else {
            this.errorMessage = this.$t('LandingPage.inputs.name.errorMessage');
          }
          break;
        case 3:
          if (this.skills.length >= 3) {
            this.saveUser();
          }
          break;
      }
    },
    goBack() {
      if (this.step > 1) this.step--;
      if (this.step < 3) this.text = this.$t('LandingPage.buttons.next');
    },
    saveUser() {
      const userController = new UserController();
      console.log(this.skills);
      userController
        .saveLPUser({
          name: this.name,
          email: this.email,
          skills: this.skills,
        })
        .then(res => {
          console.log(res);
        })
        .catch(e => {
          console.log(e);
        });
    },
    changeLocale() {
      const locale = this.$t('languages.data').find(el => el.country === this.country);
      if (!locale) return;
      this.$i18n.locale = locale.i18n;
      this.textUpdate()
    },
    textUpdate() {
      if (this.step === 3) this.text = this.$t('LandingPage.buttons.confirm')
      else this.text = this.$t('LandingPage.buttons.next');
    },
  },
};
</script>

<style>
.right-rounded {
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
}

.v-text-field {
  width: 82%;
}

.v-icon.v-icon {
  margin-right: 15px;
}
</style>
