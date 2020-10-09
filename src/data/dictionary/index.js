import database from './Database.json';
import programmingLanguages from './ProgrammingLanguages.json';
import SoftSkillsFlat from './SoftSkillsFlat.json';
import languages from './Languages.json';
import contractType from './contractType.json'
import skills from './Skills.json'
import experienceLevel from './experienceLevel.json'

export default {
  techSkills: { ...database, ...programmingLanguages },
  SoftSkillsFlat,
  softSkills: SoftSkillsFlat,
  languages,
  contractType,
  skills,
  experienceLevel,
};
