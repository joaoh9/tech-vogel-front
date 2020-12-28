const language = window.navigator.userLanguage || window.navigator.language;

let defaultLanguage = 'pt-br';
// let defaultCurrency = 'USD';

if (language.toLowerCase() === 'pt-br') {
  defaultLanguage = language.toLowerCase();
  // defaultCurrency = 'BRL';
}

const MB = 1000000;

export default {
  defaultLocale: defaultLanguage,
  github: {
    client_id: window.serverConfig.github.client_id,
  },
  skills: window.serverConfig.skills,
  maxFileSize: 12 * MB,
  storageExpiry: window.serverConfig.storageExpiry,
  imageFileFormats: window.serverConfig.imageFileFormats,
};
