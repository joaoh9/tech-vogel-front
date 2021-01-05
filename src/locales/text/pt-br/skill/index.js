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
  softSkills: skillValueFormat(softSkills, 1),
  languages: skillValueFormat(languages),
};

export default {
  skills: {
    ..._skills,

    dictionary: {
      softSkills,
      languages,
    },
  },
};
