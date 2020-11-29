<template>
  <div>
    <PrimaryHeader
      :title="$t('termsOfService.title')"
      :subtitle="$t('termsOfService.description')"
      :cols="true"
    >
      <div class="d-flex justify-center mt-8">
        <g-btn @click="$router.go(-1)" class="mx-12" type="outline" color="light" label="Go back" />
      </div>
    </PrimaryHeader>

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
  mounted() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
  },
  methods: {
    getBigText() {
      return Object.entries(this.$t('termsOfService.bigText'));
    },
  },
};
</script>

<style></style>
