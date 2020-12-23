import databases from './databases.json';
import frameworks from './frameworks';
import programmingLanguages from './realProgrammingLanguages.json';
import softSkills from './softSkills.json';
import languages from './languages.json';
import softwares from './softwares.json';

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
  softwares: skillValueFormat(softwares),
};

export default {
  skills: {
    ..._skills,
    allSkills: _skills.programmingLanguages
      .concat(_skills.databases)
      .concat(frameworks.all)
      .concat(_skills.softSkills)
      .concat(_skills.softwares),

    techSkills: _skills.programmingLanguages
      .concat(_skills.databases)
      .concat(frameworks.all)
      .concat(_skills.softwares),

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
        ...softwares,
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
