<template>
  <v-container>
    <div class="d-flex align-center justify-center flex-column mt-14">
      <h4 class="mb-5 text-center">{{ subtitle }}</h4>
      <div class="text-center">
        <g-btn
          class="ma-3"
          type="primary-outlined-rounded"
          v-for="(text, index) in buttons"
          :key="index"
          :label="`${index + 1} ${text}`"
        >
        </g-btn>
      </div>
      <ChangeLanguage :chooseLanguageText="$t('privacyPolicy.chooseLanguageText')" />
    </div>
  </v-container>
</template>

<script>
import usaFlag from 'Data/flagIcons/usa.svg';
import brazilFlag from 'Data/flagIcons/brazil.svg';
import usaDisabledFlag from 'Data/flagIcons/usaDisabled.svg';
import brazilDisabledFlag from 'Data/flagIcons/brazilDisabled.svg';
import ChangeLanguage from './ChangeLanguage';

export default {
  name: 'SubHeader',
  components: {
    ChangeLanguage,
  },
  props: {
    subtitle: String,
    type: String,
    buttons: Array,
  },
  data() {
    return {
      currentLanguage: this.$i18n.locale,
      usaFlag: usaFlag,
      brazilFlag: brazilFlag,
      brazilDisabledFlag: brazilDisabledFlag,
      usaDisabledFlag: usaDisabledFlag,
    };
  },
};
</script>

<style></style>u
u
