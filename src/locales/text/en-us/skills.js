import otherData from 'Data/other';
import skillsData from 'Data/skills';

export default {
  skills: {
    ...otherData,
    ...skillsData,
  },
  dictionary: {
    ...otherData.dictionary,
    ...skillsData.dictionary,
  },
};
