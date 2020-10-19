const language = window.navigator.userLanguage || window.navigator.language;

let defaultLanguage = 'en-us';
// let defaultCurrency = 'USD';

if (language.toLowerCase() === 'pt-br') {
  defaultLanguage = language.toLowerCase();
  // defaultCurrency = 'BRL';
}

export default {
  defaultLocale: defaultLanguage,
  client_id: process.env.VUE_APP_OAUTH_CLIENT_ID,
  client_secret: process.env.VUE_APP_OAUTH_CLIENT_SECRET,
  skills: {
    techSkills: { min: 3, max: 7 },
    softSkills: { min: 0, max: 3 },
    languages: { min: 0, max: 4 },
  },
};
