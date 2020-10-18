<template>
  <div>
    <PrimaryHeader
      :title="$t('termsOfService.title')"
      :description="$t('termsOfService.description')"
    />

    <SubHeader
      :subtitle="$t('termsOfService.subtitle')"
      :chooseLanguageText="$t('termsOfService.chooseLanguageText')"
      :buttons="$t('termsOfService.buttons')"
    />

    <BigTextSection
      v-for="(text, index) in getBigText()"
      :key="index"
      :name="text[0]"
      :text="text[1]"
    />
  </div>
</template>

<script>
import PrimaryHeader from 'Components/Interface/PrimaryHeader';
import SubHeader from 'Components/Static/SubHeader';
import BigTextSection from 'Components/Static/BigTextSection';

export default {
  name: 'TermsOfService',
  components: {
    PrimaryHeader,
    SubHeader,
    BigTextSection,
  },
  methods: {
    getBigText() {
      return Object.entries(this.$t('termsOfService.bigText'));
    },
  },
};
</script>

<style></style>
