import contractType from './contractType.json';
import experienceLevel from './experienceLevel.json';
import companySize from './companySize.json';
import payCheckTimeFrame from './payCheckTimeFrame.json';
import currencies from './currencies.json';
import currencyLocale from './currencyLocale.json';
import skills from './skills.json'
import languages from './languages.json';
import yearsOfExperience from './yearsOfExperience.json';
import priorities from './priorities.json';
import fluencyLevel from './fluencyLevel.json';
import experienceOptions from './experienceOptions.json';
import jobType from './jobType.json';
import relocationOptions from './relocationOptions.json';

function textValueFormat(data) {
  return Object.entries(data).map(([ value, text ]) => ({ text, value }));
}

function textValueNumberFormat(data) {
  return Object.entries(data).map(([ value, text ]) => ({ text, value: parseFloat(value) }));
}

export default {
  enums: {
    skills,
    contractType: textValueFormat(contractType),
    experienceLevel: textValueFormat(experienceLevel),
    companySize: textValueFormat(companySize),
    jobType: textValueFormat(jobType),
    relocationOptions: textValueFormat(relocationOptions),
    payCheckTimeFrame: textValueFormat(payCheckTimeFrame),
    currencies: textValueFormat(currencies),
    fluencyLevel: textValueFormat(fluencyLevel),
    experienceOptions: textValueFormat(experienceOptions),

    languages: textValueNumberFormat(languages),
    yearsOfExperience: textValueNumberFormat(yearsOfExperience),
    priorities: textValueNumberFormat(priorities),

    dictionary: {
      skills,
      contractType,
      experienceLevel,
      companySize,
      payCheckTimeFrame,
      currencies,
      languages,
      yearsOfExperience,
      priorities,
      currencyLocale,
    },
  },
};
