import contractType from './contractType.json';
import experienceLevel from './experienceLevel.json';
import jobInterests from './jobInterests.json';
import payCheckTimeFrame from './payCheckTimeFrame.json';
import currencies from './currencies.json';

import languages from './languages.json';
import yearsOfExperience from './yearsOfExperience.json';
import priorities from './priorities.json';

function textValueFormat(data) {
  return Object.entries(data).map(([ value, text ]) => ({ text, value }));
}

function textValueNumberFormat(data) {
  return Object.entries(data).map(([ value, text ]) => ({ text, value: parseFloat(value) }));
}

export default {
  enums: {
    contractType: [
      ...textValueFormat(contractType),
      // { "text": "contract", "value": "CONTRACT" },
      // { "text": "internship", "value": "INTERNSHIP" },
    ],
    experienceLevel: textValueFormat(experienceLevel),
    jobInterests: textValueFormat(jobInterests),
    payCheckTimeFrame: textValueFormat(payCheckTimeFrame),
    currencies: textValueFormat(currencies),

    languages: textValueNumberFormat(languages),
    yearsOfExperience: textValueNumberFormat(yearsOfExperience),
    priorities: textValueNumberFormat(priorities),

    dictionary: {
      contractType,
      experienceLevel,
      jobInterests,
      payCheckTimeFrame,
      currencies,
      languages,
      yearsOfExperience,
      priorities,
    },
  },
};
