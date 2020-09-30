import Axios from 'Helpers/axios';

export default class JobController {
  async saveJob(jobDetails) {
    const axios = await Axios.GetInstance();
    const res = await axios.post('/job', jobDetails);
    return res;
  }

  async getAllJobs() {
    // const axios = await Axios.GetInstance();
    // const res = await axios.get('/job'); // TODO

    return [
      {
        id: '01',
        day: 'Posted X days ago',
        title: 'Full Stack Developer',
        company: 'Company',
        jobType: 'Job type',
        buttonText: 'VIEW DETAILS',
      },
      {
        id: '02',
        day: 'Posted X days ago',
        title: 'Full Stack Developer2',
        company: 'Company',
        jobType: 'Job type',
        buttonText: 'VIEW DETAILS',
      },
      {
        id: '03',
        day: 'Posted X days ago',
        title: 'Full Stack Developer3',
        company: 'Company',
        jobType: 'Job type',
        buttonText: 'VIEW DETAILS',
      },
      {
        id: '04',
        day: 'Posted X days ago',
        title: 'Full Stack Developer4',
        company: 'Company',
        jobType: 'Job type',
        buttonText: 'VIEW DETAILS',
      },
      {
        id: '05',
        day: 'Posted X days ago',
        title: 'Full Stack Developer5',
        company: 'Company',
        jobType: 'Job type',
        buttonText: 'VIEW DETAILS',
      },
    ];
  }

  async getJobById(jobId) {
    const axios = await Axios.GetInstance();
    const res = await axios.get(`/job/${jobId}`);
    return res;
  }
}
