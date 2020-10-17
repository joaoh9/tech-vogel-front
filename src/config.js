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
};
