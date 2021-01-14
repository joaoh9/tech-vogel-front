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
  skills: window.serverConfig && window.serverConfig.skills,
  maxFileSize: 12 * MB,
  storageExpiry: (window.serverConfig && window.serverConfig.storageExpiry) || 4 * 60 * 60 * 1000,
  imageFileFormats: window.serverConfig && window.serverConfig.imageFileFormats,
  paymentLink: window.serverConfig && window.serverConfig.pagarme.paymentLink,
};
console.log('🚀 ~ file: config.js ~ line 24 ~ config', config)

module.exports = config;
