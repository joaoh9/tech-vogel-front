<template>
  <v-card color="bg" class="bs-primary pa-4">
    <div class="d-flex justify-center">
      <div class="d-flex flex-column">
        <h5 class="h5-bold color-primary mb-3 text-center">{{ $t('user.findMe') }}</h5>
        <div class="d-flex align-center flex-column justify-center">
          <div class="d-flex justify-center">
            <v-icon color="dark" class="mr-2"> mdi-email </v-icon>
            <bdy-1 :style="reportPayedFor ? '' : 'filter: blur(4px);'">
              {{ email }}
            </bdy-1>
          </div>
        </div>
        <div class="d-flex align-center flex-column justify-center">
          <div v-for="(item, index) in getIcons()" :key="index">
            <v-dialog v-model="buy">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  v-on="on"
                  v-bind="attrs"
                  class="pa-0 text-capitalize"
                  color="secondary"
                  text
                  @click="reportPayedFor ? goToLink(item.link) : (buy = !buy)"
                  v-if="item.link"
                >
                  <v-icon class="mr-2">
                    {{ item.icon }}
                  </v-icon>
                  <div class="mr-4">
                    {{ item.text }}
                  </div>
                </v-btn>
              </template>
              <div>
                <DefaultDialog
                  v-if="buy && pagarmeLink"
                  :key="buy"
                  :title="$t('company.report.unlock')"
                  :btnText="$t('company.report.paymentProceed')"
                  :btnType="$t('job.apply.btnType')"
                  :secBtnText="$t('common.close')"
                  @close="buy = false"
                  v-on:primary-button-click="goToPagarme"
                  v-on:secondary-button-click="buy = false"
                />
              </div>
            </v-dialog>
          </div>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script>
import DefaultDialog from 'Components/Dialogs/Default';

export default {
  name: 'FindMe',
  props: {
    links: Object,
    email: String,
    reportPayedFor: Boolean,
    pagarmeLink: String,
  },
  components: {
    DefaultDialog,
  },
  data() {
    return {
      buy: false,
    };
  },
  methods: {
    getIcons() {
      const links = [ 'github', 'linkedin', 'website', 'facebook', 'twitter' ];
      const result = [];
      if (!this.links) {
        return [];
      }
      for (const link of links) {
        // eslint-disable-next-line no-prototype-builtins
        if (this.links.hasOwnProperty(link)) {
          if (!this.reportPayedFor) {
            result.push({
              text: this.$t(`common.links.${link}.title`),
              icon: this.getIcon(link),
              link: 'wrong-link' || this.links[link],
            });
          } else {
            result.push({
              text: this.$t(`common.links.${link}.title`),
              icon: this.getIcon(link),
              link: this.links[link],
            });
          }
        }
      }
      return result;
    },

    getIcon(icon) {
      const map = {
        website: 'web',
        github: 'github',
        linkedin: 'linkedin',
        twitter: 'twitter',
      };

      return 'mdi-' + map[icon];
    },
    goToLink(link) {
      window.open(link, '_blank');
    },
    goToPagarme() {
      window.open(this.pagarmeLink, '_blank');
    },
  },
};
</script>

<style></style>
