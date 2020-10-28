<template>
  <div class="d-flex align-center justify-center my-4 ">
    <p class="bdy-2 color-black">{{ chooseLanguageText }}</p>
    <v-img
      v-for="(language, index) in getLanguagesData()"
      :key="index"
      @click="changeLanguage(language.i18n)"
      :src="currentLanguage === language.i18n ? language.flag : language.disabledFlag"
      width="32"
      height="32"
      :class="`${!(currentLanguage === language.i18n) ? 'cursor-pointer' : 'orange-border'} mx-3`"
    />
  </div>
</template>

<script>

export default {
  name: 'ChangeLanguage',
  props: {
    chooseLanguageText: String,
  },
  data() {
    return {
      currentLanguage: this.$i18n.locale,
    };
  },
  methods: {
    getLanguagesData() {
      return this.$t('internationalization.data');
    },
    changeLanguage(language) {
      this.$i18n.locale = language;
      this.currentLanguage = language;
    },
  },
};

</script>

<style>
.orange-border {
  border: 2px solid #ff9200;
  border-radius: 50%;
}
p {
  margin: 0 !important;
}
</style>
