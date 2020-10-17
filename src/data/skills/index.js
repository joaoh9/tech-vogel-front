import Databases from './Databases.json';
import FrameWorks from './Frameworks';
import ProgrammingLanguages from './ProgrammingLanguages.json';
import softSkills from './SoftSkills.json';
import languages from './languages.json';

function skillValueFormat(skillArray) {
  return Object.entries(skillArray).map(([ skillId, text ]) => ({
    text,
    value: { skillId, experienceLevel: 0 },
  }));
}
const skills = {
  Databases: skillValueFormat(Databases),
  Frameworks: FrameWorks, // already formated
  ProgrammingLanguages: skillValueFormat(ProgrammingLanguages),
  softSkills: skillValueFormat(softSkills),
  languages: skillValueFormat(languages),
};
export default {
  ...skills,
  allSkills: skills.ProgrammingLanguages.concat(skills.Databases).concat(skills.softSkills),
  techSkills: skills.ProgrammingLanguages.concat(skills.Databases)
    .concat(skills.JsFrameworks)
    .concat(skills.PyFrameworks),

  dictionary: {
    Databases,
    FrameWorks,
    ProgrammingLanguages,
    softSkills,
    languages,
  },
};
