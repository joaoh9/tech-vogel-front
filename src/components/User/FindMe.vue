<template>
  <v-card height="125" color="bg" class="bs-primary">
    <div class="d-flex justify-center">
      <div class="d-flex flex-column">
        <h5 class="h5-bold color-primary my-4">{{ $t('user.findMe') }}</h5>
        <div class="d-flex align-center justify-center">
          <v-icon
            color="secondary"
            @click="goToLink(item.link)"
            class="mr-2"
            v-for="(item, index) in getIcons()"
            :key="index"
          >
            {{ item.icon }}
          </v-icon>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'FindMe',
  props: {
    links: Object,
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
          result.push({
            text: this.$t(`common.links.${link}.title`),
            icon: this.getIcon(link),
            link: this.links[link],
          });
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
  },
};
</script>

<style></style>
