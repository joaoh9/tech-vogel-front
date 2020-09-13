import Axios from 'Helpers/axios';

export default function ResumeController() {
  return {
    register: async (details) => {
      console.log(details);
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
            endDate: inpResume.job.currentJob ? null : '01/' + inpResume.job.to.month + '/' + inpResume.job.to.year,
            role: inpResume.job.position,
            startDate: '01/' + inpResume.job.from.month + '/' + inpResume.job.from.year,
          },
        ],
      };
      console.log(resume);
      const axios = await Axios.GetInstance();
      return new Promise((resolve, reject) => {
        axios
          .post('/resumes', resume)
          .then(resolve)
          .catch(reject);
      });
    },
  };
}
