<template>
  <v-app :style="getPageStyle()">
    <Navbar :key="$router.currentRoute.name" v-if="notLP()"></Navbar>
    <v-main :style="getPageStyle()">
      <router-view class="view"></router-view>
    </v-main>
    <Footer :style="getPageStyle(true)" />
  </v-app>
</template>

<script>
import Navbar from 'Components/Navbar/Navbar';
import Storage from 'Helpers/storage';
import Footer from 'Components/Footer';
import 'Public/css/typography.css';
import 'Public/css/fonts.css';
import 'Public/css/colors.css';
import 'Public/css/complementary.css';
import 'Public/css/card.css';

export default {
  name: 'app',
  data() {
    return {
      user: null,
    };
  },
  components: {
    Navbar,
    Footer,
  },
  methods: {
    userIsLoggedIn() {
      const user = Storage.loadState('user');
      if (!user) {
        return false;
      }
      this.user = user;
      return true;
    },
    notLP() {
      return this.$router.history.current.name !== 'LandingPage';
    },
    getPageStyle(footer = false) {
      const pageStyle = {
        'background-color': '#FCFCFF',
        background: '#FCFCFF',
      };

      if (this.$router.currentRoute.name === 'Home') {
        pageStyle.background = 'linear-gradient(180deg, #1A193C 2.83%,  #3AA3FF 62.18%), #433693';
      }
      if (footer && this.$router.currentRoute.name === 'Home') {
        pageStyle.background = 'transparent';
        pageStyle['background-color'] = 'transparent';
      }

      return pageStyle;
    },
    giveUsFeedback() {
      return; // TODO
    },
  },
};
</script>

<style>
.v-application {
  font-family: 'Open Sans' !important;
}

.v-btn {
  border-radius: 6px !important;
}

.v-btn__content {
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 150%;
  /* or 27px */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.035em;
  font-feature-settings: 'liga' off;

  /* color: #000000aa; */
}

.v-text-field .v-textarea .v-card .v-card:not() {
  border-radius: 6px !important;
}

h6 {
  margin-bottom: 10px !important;
}

/* QUILL EDITOR DEFAULT STYLE INIT */

.ql-toolbar.ql-snow {
  border: 1px solid rgba(0, 0, 0, 0.42) !important;
  border-radius: 6px !important;
  /* color: #706F98 !important; */
  background-color: #706f98 !important;
}
.ql-container.ql-snow {
  border: 1px solid rgba(0, 0, 0, 0.42) !important;
  border-radius: 6px !important;
}

.quillWrapper .ql-snow .ql-stroke {
  stroke: #f7f7fb !important;
}

.ql-snow .ql-fill {
  fill: #f7f7fb !important;
}

pre {
  border-radius: 6px !important;
  background-color: #6c6c77 !important;
}

.ql-editor {
  margin: 16px !important;
}

/* QUILL EDITOR DEFAULT STYLE FINISH */
</style>
