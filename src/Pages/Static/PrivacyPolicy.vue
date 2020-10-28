<template>
  <div class="mb-6">
    <PrimaryHeader
      :title="$t('privacyPolicy.title')"
      :subtitle="$t('privacyPolicy.description')"
    />

    <SubHeader :subtitle="$t('privacyPolicy.subtitle')" :buttons="$t('privacyPolicy.buttons')" />

    <BigTextSection
      v-for="(text, index) in getBigText()"
      :key="index"
      :name="text[0]"
      :text="text[1]"
      :divider="index < getBigText().length < 1"
    />
  </div>
</template>

<script>
import PrimaryHeader from 'Components/Interface/PrimaryHeader';
import SubHeader from 'Components/Static/SubHeader';
import BigTextSection from 'Components/Static/BigTextSection';

export default {
  name: 'PrivacyPolicy',
  components: {
    PrimaryHeader,
    SubHeader,
    BigTextSection,
  },
  methods: {
    getBigText() {
      return Object.entries(this.$t('privacyPolicy.bigText'));
    },
  },
};

</script>

<style></style>
