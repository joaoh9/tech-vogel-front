const databases = require('./databases.json');
const languages = require('./languages.json');
const frameworks = require('./frameworks');
const operatingSystem = require('./operatingSystem.json');
const programmingLanguages = require('./realProgrammingLanguages.json');
const softSkills = require('./softSkills.json');
const softwares = require('./softwares.json');
const technologies = require('./technologies.json');

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
  technologies: skillValueFormat(technologies),
  operatingSystem: skillValueFormat(operatingSystem),
};

module.exports = {
  skills: {
    ..._skills,

    techSkills: _skills.programmingLanguages
      .concat(_skills.databases)
      .concat(frameworks.all)
      .concat(_skills.softwares)
      .concat(_skills.technologies)
      .concat(_skills.operatingSystem),

    dictionary: {
      databases,
      programmingLanguages,
      softSkills,
      languages,
      ...frameworks.dictionary,
      techSkills: {
        ...technologies,
        ...programmingLanguages,
        ...databases,
        ...frameworks.dictionary,
        ...softwares,
        ...operatingSystem,
      },
    },
  },
};
