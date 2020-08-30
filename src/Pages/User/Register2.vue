<template>
  <div>
    <h2 class="mb-12">{{ $t('User.register.page2.title') }}</h2>
    <h5 class="mb-12">{{ $t('User.register.pageSubtitle.title') }}</h5>
    <form-input :title="$t('User.register.accessCode.title')" />
    <p>Please enter it bellow </p>
    <v-text-field
      tile
      outlined
      v-model="accessCode"
      @input="$emit('access-code', accessCode)"
    ></v-text-field>
    <a>
      <p>{{ $t('User.register.accessCodeHelper.title') }}</p>
    </a>
  </div>
</template>

<script>
import FormInput from 'Components/FormInput';

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
