import Databases from './Databases.json';
import FrameWorks from './Frameworks.json';
import FrameWorksByGroup from './FrameworksByGroup.json';
import ProgrammingLanguages from './ProgrammingLanguages.json';
import softSkills from './SoftSkills.json';
import softSkillsFlat from './SoftSkillsFlat.json';
import languages from './languages.json';

export default {
  Databases,
  FrameWorks,
  FrameWorksByGroup,
  ProgrammingLanguages,
  softSkills,
  softSkillsFlat,
  languages,
  allSkills: ProgrammingLanguages.concat(Databases).concat(softSkillsFlat),
  techSkills: ProgrammingLanguages.concat(Databases),
};
