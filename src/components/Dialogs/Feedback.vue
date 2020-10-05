<template>
  <v-dialog v-model="dialog" :min-width="minWidth()">
    <template v-slot:activator="{ on, attrs }">
      <div class="d-flex justify-end mb-4">
        <v-btn large v-on="on" v-bind="attrs" class="mr-6" @click="giveUsFeedback()" text>
          {{ $t('Common.feedback') }}
        </v-btn>
      </div>
    </template>
    <div class="d-flex justify-center mt-12 ma-0">
      <g-card :minsm="'100'">
        <template v-slot:card-content>
          <g-card-header :title="$t('Feedback.title')" />
          <div class="mx-sm-12 mx-4 mt-4">
            <form-input :title="$t('Feedback.topic')" />
            <v-text-field v-model="topic" outlined />
            <form-input :title="$t('Feedback.description')" />
            <v-textarea outlined v-model="description" />
          </div>
        </template>
      </g-card>
    </div>
  </v-dialog>
</template>

<script>
export default {
  name: 'FeedbackDialog',
  data() {
    return {
      topic: '',
      description: '',
      dialog: false,
    };
  },
  methods: {
    minWidth() {
      if (this.$vuetify.breakpoint.lgAndUp) {
        return this.lg || 1000;
      }
      if (this.$vuetify.breakpoint.mdAndUp) {
        return this.md || 800;
      }
      if (this.$vuetify.breakpoint.smAndUp) {
        return this.sm || 320;
      }
      return this.base || 250;
    },
    giveUsFeedback() {
      // TODO: Post na rota de feedback
    },
  },
};
</script>

<style>
.v-dialog .v-dialog--active {
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px 0px rgba(0, 0, 0, 0),
    0px 0px 0px 0px rgba(0, 0, 0, 0) !important;
  margin: 0px !important;
}

.v-dialog {
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px 0px rgba(0, 0, 0, 0),
    0px 0px 0px 0px rgba(0, 0, 0, 0) !important;
  margin: 0px !important;
}
</style>
