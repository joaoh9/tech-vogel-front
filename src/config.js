const language = window.navigator.userLanguage || window.navigator.language;

let defaultLanguage = 'pt-br';
// let defaultCurrency = 'USD';

if (language.toLowerCase() === 'pt-br') {
  defaultLanguage = language.toLowerCase();
  // defaultCurrency = 'BRL';
}

const MB = 1000000;

const config = {
  defaultLocale: defaultLanguage,
  github: {
    client_id: (window.serverConfig && window.serverConfig.github.client_id) || '',
  },
  skills: (window.serverConfig && window.serverConfig.skills) || {
    techSkills: {
      min: 3,
      max: 12,
    },
    softSkills: {
      min: 1,
      max: 7,
    },
    languages: {
      min: 1,
      max: 7,
    },
  },
  maxFileSize: 12 * MB,
  storageExpiry: (window.serverConfig && window.serverConfig.storageExpiry) || 4 * 60 * 60 * 1000,
  imageFileFormats: window.serverConfig && window.serverConfig.imageFileFormats,
  dayInMs: 1000 * 60 * 60 * 24,
};

module.exports = config;
