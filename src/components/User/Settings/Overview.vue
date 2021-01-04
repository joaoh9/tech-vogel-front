<template>
  <div class="d-flex align-center flex-column mt-4 mt-sm-12">
    <h3 class="h3-bold text-start">{{ $t('common.settings') }}</h3>
    <h5>{{ $t('user.settings.subtitle') }}</h5>
    <Stepper
      class="mt-4"
      :stepsNames="$t('user.settings.buttons').map(el => el.text)"
      v-model="currentStep"
    >
      <g-card>
        <template v-slot:card-content>
          <div v-bind:style="{ display: currentStep == 0 ? 'block' : 'none' }">
            <Personal />
          </div>
        </template>
      </g-card>
    </Stepper>
  </div>
</template>

<script>
import Stepper from 'Components/Interface/Stepper';
import Personal from './Personal';

export default {
  name: 'SettingsOverview',
  components: {
    Stepper,
    Personal,
  },
  data() {
    return {
      currentStep: 0,
    };
  },
};
</script>
