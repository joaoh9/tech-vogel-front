import Database from './Database.json';
import ProgrammingLanguages from './ProgrammingLanguages.json';
import SoftSkillsFlat from './SoftSkillsFlat.json';
import Languages from './Languages.json';

export default {
  TechSkills: { ...Database, ...ProgrammingLanguages },
  SoftSkillsFlat,
  Languages,
};
