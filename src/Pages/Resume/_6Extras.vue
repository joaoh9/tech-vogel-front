<template>
  <div>
    <CardTemplate
      :title="$t('CV.register.extras.title')"
      :description="$t('CV.register.extras.description')"
    >
    <template v-slot:content="{}">
      <!-- <v-row class="d-flex justify-end mt-12">
        <v-btn max-width="400" class="align-self-center mt-6" color="primary" large>
          {{ $t('CV.register.extras.button') }}
        </v-btn>
      </v-row> -->
    </template>
    </CardTemplate>
  </div>
</template>

<script>
import CardTemplate from './CardTemplate';

export default {
  name: 'Extras',
  components: {
    CardTemplate,
  },
};
</script>

<style></style>
