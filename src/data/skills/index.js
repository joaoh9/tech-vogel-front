import Databases from './Databases.json';
import FrameWorks from './Frameworks';
// import FrameWorksByGroup from './FrameworksByGroup.json';
import ProgrammingLanguages from './ProgrammingLanguages.json';
// import softSkills from './SoftSkills.json';
import softSkillsFlat from './SoftSkillsFlat.json';
import languages from './languages.json';

function formatSkill(skillArray, prefix = '') {
  return skillArray.map(s => ({
    text: s.text,
    value: { skillId: prefix + s.skillId, experienceLevel: 0 },
  }));
}
const skills = {
  Databases: formatSkill(Databases),
  JsFrameworks: formatSkill(FrameWorks.JsFrameworks.json, FrameWorks.JsFrameworks.prefix),
  PyFrameworks: formatSkill(FrameWorks.PyFrameworks.json, FrameWorks.PyFrameworks.prefix),
  ProgrammingLanguages: formatSkill(ProgrammingLanguages),
  softSkillsFlat: formatSkill(softSkillsFlat),
  languages: formatSkill(languages),
  // FrameWorksByGroup,
  // softSkills,
};

console.log('JsFrameworks')
console.log(skills.JsFrameworks)

export default {
  ...skills,
  allSkills: skills.ProgrammingLanguages.concat(skills.Databases).concat(skills.softSkillsFlat),
  techSkills: skills
    .ProgrammingLanguages
    .concat(skills.Databases)
    .concat(skills.JsFrameworks)
    .concat(skills.PyFrameworks),
};
