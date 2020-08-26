<template>
  <div>
    <h2 class="mb-12">{{$t('User.register._2.pageTitle')}}</h2>
    <h5 class="mb-12">{{$t('User.register._2.pageSubtitle')}}</h5>
    <FormInput :label="$t('User.register._2.accessCode')">
      <v-text-field
        tile
        outlined
        v-model="accessCode"
        @input="$emit('access-code', accessCode)"
      ></v-text-field>
    </FormInput>
    <a><p>{{$t('User.register._2.accessCodeHelper')}}</p></a>
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
      accessCode: '',
    };
  },
};
</script>

