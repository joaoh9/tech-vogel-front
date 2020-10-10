<template>
  <v-app :style="getPageStyle()" :key="loggedIn.logged.toString() + 'app'">
    <Navbar
      :key="'navbar' + $router.currentRoute.name + loggedIn.logged.toString()"
      v-if="!loggedIn.logged"
    />
    <LoggedInNavbar
      :key="'loggedInNabar' + $router.currentRoute.name + loggedIn.logged.toString()"
      v-if="loggedIn.logged"
      :company="loggedIn.company"
    />
    <v-main :style="getPageStyle()" :key="loggedIn.logged.toString() + 'main'">
      <router-view
        @logout="e => (loggedIn = e)"
        @login="e => (loggedIn = e)"
        class="view"
      ></router-view>
    </v-main>
    <Footer :style="getPageStyle(true)" />
  </v-app>
</template>

<script>
import Navbar from 'Components/Navbar/Navbar';
import LoggedInNavbar from 'Components/Navbar/LoggedInNavbar';
import Footer from 'Components/Footer';
import JwtHelper from 'Helpers/jwt';
import 'Public/css'

export default {
  name: 'app',
  mounted() {
    this.checkIfLoggedIn();
  },
  data() {
    return {
      loggedIn: {
        logged: false,
        company: false,
      },
    };
  },
  components: {
    Navbar,
    LoggedInNavbar,
    Footer,
  },
  methods: {
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
    async checkIfLoggedIn() {
      const jwtHelper = new JwtHelper();
      try {
        await jwtHelper.getData('user');
        this.loggedIn.logged = true;
        this.loggedIn.company = true;
      } catch (e) {
        this.loggedIn.logged = false;
        this.loggedIn.company = false;
      }

      try {
        await jwtHelper.getData('company');
        this.loggedIn.logged = true;
        this.loggedIn.company = true;
      } catch (e) {
        this.loggedIn.logged = false;
        this.loggedIn.company = false;
      }
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
