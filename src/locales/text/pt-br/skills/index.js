import databases from '../../en-us/skills/databases.json';
import frameworks from '../../en-us/skills/frameworks';
import programmingLanguages from '../../en-us/skills/realProgrammingLanguages.json';
import softSkills from './softSkills.json';
import languages from './languages.json';

function skillValueFormat(skillArray, xpLvl = 0) {
  return Object.entries(skillArray).map(([ skillId, text ]) => ({
    text,
    value: {
      skillId,
      experienceLevel: xpLvl,
    },
  }));
}

const _skills = {
  databases: skillValueFormat(databases),
  programmingLanguages: skillValueFormat(programmingLanguages, 3),
  softSkills: skillValueFormat(softSkills, 1),
  languages: skillValueFormat(languages),
  frameworks, // Already formatted
};

export default {
  skills: {
    ..._skills,
    allSkills: _skills.programmingLanguages
      .concat(_skills.databases)
      .concat(frameworks.all)
      .concat(_skills.softSkills),
    techSkills: _skills.programmingLanguages.concat(_skills.databases).concat(frameworks.all),

    dictionary: {
      databases,
      programmingLanguages,
      softSkills,
      languages,
      ...frameworks.dictionary,
      techSkills: {
        ...programmingLanguages,
        ...databases,
        ...frameworks.dictionary,
      },
      allSkills: {
        ...programmingLanguages,
        ...databases,
        ...frameworks.dictionary,
        ...softSkills,
      },
    },
  },
};
