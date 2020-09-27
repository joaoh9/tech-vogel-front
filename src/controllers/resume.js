import Axios from 'Helpers/axios';

export default class {
  async register(details) {
    const inpResume = details.resume;
    const resume = {
      education: {
        educationInstitutions: [
          {
            institutionType: inpResume.education.type,
            name: inpResume.education.degree,
          },
        ],
      },
      skills: {
        programmingLanguages: inpResume.skills.programmingLanguages.split(','),
        frameworks: inpResume.skills.frameworks.split(','),
        knowledgeAreas: inpResume.skills.knowledgeAreas.split(','),
        softSkills: inpResume.skills.softSkills.split(','),
      },
      workHistory: [
        {
          companyName: inpResume.job.company.title,
          description: inpResume.job.jobDescription,
          endDate: inpResume.job.currentJob
            ? null
            : '01/' + inpResume.job.to.month + '/' + inpResume.job.to.year,
          role: inpResume.job.position,
          startDate: '01/' + inpResume.job.from.month + '/' + inpResume.job.from.year,
        },
      ],
    };
    const axios = await Axios.GetInstance();
    const res = await axios.post('/resumes', resume);
    return res;
  }
}
