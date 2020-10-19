<template>
  <div class="ma-16">
    <h3 class="h3-bold">{{ $t('common.settings') }}</h3>
    <bdy-1> {{ $t('user.settings.subtitle') }} </bdy-1>
    <v-row>
      <v-col cols="4">
        <div class="d-flex flex-column">
          <IconText
            v-for="(item, i) in $t('user.settings.buttons')"
            :key="i"
            :icon="item.icon"
            :text="item.text"
            type="h5-bold"
            class="my-3"
          />
        </div>
      </v-col>
      <v-divider vertical />
      <v-col cols="8">
        <PersonalSettings />
        <Password />
        <Payment />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import IconText from 'Components/Interface/IconText';
import PersonalSettings from 'Components/User/Settings/Personal';
import Password from 'Components/User/Settings/Password';
import Payment from 'Components/User/Settings/Payment';
export default {
  name: 'AccountSettings',
  components: {
    IconText,
    PersonalSettings,
    Password,
    Payment,
  },
};
</script>

<style></style>
