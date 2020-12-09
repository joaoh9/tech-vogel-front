<template>
  <div>
    <div class="d-flex flex-wrap justify-center align-center flex-column mt-14">
      <h4 class="mb-5 text-center">{{ subtitle }}</h4>
      <div class="d-flex flex-wrap justify-center mx-12">
        <g-btn
          class="mx-3 my-2"
          type="primary-outlined-rounded"
          v-for="(text, index) in buttons"
          :key="index"
          :label="`${index + 1} ${text}`"
        >
        </g-btn>
      </div>
      <ChangeLanguage class="my-2" :chooseLanguageText="$t('privacyPolicy.chooseLanguageText')" />
    </div>
  </div>
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

<style></style>
