import databases from './databases.json';
import frameworks from './frameworks';
import programmingLanguages from './programmingLanguages.json';
import softSkills from './softSkills.json';
import languages from './languages.json';

function skillValueFormat(skillArray) {
  return Object.entries(skillArray).map(([ skillId, text ]) => ({
    text,
    value: {
      skillId,
      experienceLevel: 0,
    },
  }));
}

const _skills = {
  databases: skillValueFormat(databases),
  programmingLanguages: skillValueFormat(programmingLanguages),
  softSkills: skillValueFormat(softSkills),
  languages: skillValueFormat(languages),
  frameworks, // already formated
};

export default {
  skills: {
    ..._skills,
    allSkills: _skills.programmingLanguages.concat(_skills.databases).concat(_skills.softSkills),
    techSkills: _skills.programmingLanguages.concat(_skills.databases).concat(frameworks.all),

    dictionary: {
      databases,
      programmingLanguages,
      softSkills,
      languages,
      ...frameworks.dictionary,
    },
  },
};
