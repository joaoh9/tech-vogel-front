import Technologies from '../data/technologies.json';
import Languages from '../data/languages.json';
import Timezones from '../data/timezones.json';
import MonthCount from '../data/monthCount.json';
import ContractDurationTimePeriod from '../data/contractDurationTimePeriod.json';
import CompanySize from '../data/companySize.json';

export default {
  Common: {
    HowItWorks: 'How It Works',
    Apply: 'Apply',
    Applying: 'Applying',
    Hire: 'Hire',
    Hiring: 'Hiring',
    AboutUs: 'About Us',
    Content: 'Content',
  },
  Home: {
    title: 'Tech Vogel',
    subtitle: 'Connecting I.T professionals with companies around the world for remote work',
  },
  Hiring: {
    _1: {
      text: 'Sign up, and choose the plan that fits your company needs.',
      photo: '',
    },
    _2: {
      text: 'Start posting JOB proposals and receiving candidates.',
      photo: '',
    },
    _3: {
      text: 'Select your Top choices and embrace the remote work for great results!',
      photo: '',
    },
  },
  Applying: {
    _1: {
      text: 'Sign Up, and get your credits',
      photo: '',
    },
    _2: {
      text: 'Apply for  Jobs you are most likely to suceed.',
      photo: '',
    },
    _3: {
      text: 'Apply for  Jobs you are most likely to suceed.',
      photo: '',
    },
  },
  AboutUs: {
    _1:
      'Tech Vogel came into life to give another option for companies and professionals to achieve better results at work and live a better life. We truly believe that with remote work companies can find the best professionals that fit perfectly for the job, choosing to look outside their comfort zone and finding qualified workforce around the globe, with less time and money expended.',
    _2:
      'The future of work comes with new visions and a chase for a better quality of life. We stand for work done with professionalism, in time, with excellency and liberty.',
    _3:
      'More time spent doing what you love and learning new things, giving your best at the job and choosing where you want to work the next day. This is what we aim for.',
    _4: 'Liberty comes with responsibility, and remote work calls for both.',
    _5: 'Embrace the remote work, and join the new era with Tech Vogel.',
  },
  data: {
    companyType: ['', 'Private', 'Public', 'NGO', 'Other'],
    jobType: ['', 'Full-Time', 'Part-time', 'Contract', 'Internship'],
    experienceLevel: ['', 'Student', 'Junior', 'Mid-Level', 'Senior', 'Lead', 'Manager'],
    technologies: Technologies,
    languages: Languages,
    timezones: Timezones,
    monthCount: [''].concat(MonthCount),
    contractDurationTimePeriod: [''].concat(ContractDurationTimePeriod),
    companySize: [''].concat(CompanySize),
  },
};
