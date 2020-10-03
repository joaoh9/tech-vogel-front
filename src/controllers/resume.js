import Axios from 'Helpers/axios';

export default class {
  async register(details) {
    const inpResume = details.resume;
    const resume = {
      education: {
        educationInstitutions: inpResume.education.map(education => {
          return {
            institutionType: education.type,
            name: inpResume.education.degree,
          };
        }),
      },
      skills: {
        programmingLanguages: inpResume.skills.map(skill => {
          return {
            experienceLevel: skill.experience,
            skillId: skill.skill,
          };
        }),
      },
      workHistory: inpResume.job.map(job => {
        return {
          companyName: job.company.title,
          description: job.jobDescription,
          endDate: job.currentJob
            ? null
            : '01/' + job.to.month + '/' + job.to.year,
          role: job.position,
          startDate: '01/' + job.from.month + '/' + job.from.year,
        };
      }),
    };
    console.log(resume);
    const axios = await Axios.GetInstance();
    const res = await axios.post('/resumes', resume);
    return res;
  }
}
