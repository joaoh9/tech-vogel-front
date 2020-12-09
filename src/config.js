const language = window.navigator.userLanguage || window.navigator.language;

let defaultLanguage = 'en-us';
// let defaultCurrency = 'USD';

if (language.toLowerCase() === 'pt-br') {
  defaultLanguage = language.toLowerCase();
  // defaultCurrency = 'BRL';
}

const MB = 1000000;

export default {
  defaultLocale: defaultLanguage,
  github: {
    client_id: process.env.VUE_APP_GITHUB_CLIENT_ID || 'Iv1.3d3580c2a8b96f5c',
    skills: {
      techSkills: { min: 3, max: 12 },
      softSkills: { min: 0, max: 3 },
      languages: { min: 0, max: 7 },
    },
  },
  skills: {
    techSkills: { min: 3, max: 12 },
    softSkills: { min: 1, max: 7 },
    languages: { min: 1, max: 7 },
  },
  maxFileSize: 12 * MB,
  frontURL: process.env.VUE_APP_FRONT_URL || 'http://localhost:5100',
  // 4 hours
  storageExpiry: parseInt(process.env.VUE_APP_STORAGE_EXPIRY) || 4 * 60 * 60 * 1000,
};
