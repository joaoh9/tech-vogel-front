<template>
  <v-app v-bind:style="getPageStyle()">
    <UserNavbar v-if="userIsLoggedIn()"></UserNavbar>
    <Navbar :key="$router.currentRoute.name" v-if="notLP()"></Navbar>
    <v-main>
      <router-view class="view"></router-view>
    </v-main>
    <Footer class="mt-12" />
  </v-app>
</template>

<script>
import Navbar from 'Components/Navbar/Navbar';
import UserNavbar from 'Components/Navbar/UserNavbar';
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
    UserNavbar,
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
    getPageStyle() {
      const pageStyle = {
        backgroundColor: '#FCFCFF',
      };

      if (this.$router.currentRoute.name === 'Home') {
        pageStyle.background =
          'linear-gradient(156deg, rgba(67, 54, 147, 0.5) 8.83%,  #3AA3FF 62.18%), #433693';
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
