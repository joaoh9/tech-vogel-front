import Languages from 'Data/languages.json';
import DifferentLanguages from 'Data/differentLanguages.json';
import Timezones from 'Data/timezones.json';
import MonthCount from 'Data/monthCount.json';
import ContractDurationTimePeriod from 'Data/contractDurationTimePeriod.json';
import CompanySize from 'Data/companySize.json';
import preMadePhrases from 'Data/preMadePhrases.json';
import FlagIcons from 'Data/flagIcons';

import Skills from 'Data/Skills';

function groupFormat(data) {
  const arr = [];
  Object.keys(data).forEach(key => {
    arr.push({ header: key });
    data[key].forEach(d => arr.push({ name: d, group: key }));
    arr.push({ divider: true });
  });
  return arr;
}

function dataFormat(data) {
  const arr = [];
  Object.keys(data).forEach(key => {
    arr.push({ header: key });
    data[key].data.forEach(d => arr.push({ name: d, group: key }));
    arr.push({ divider: true });
  });
  return arr;
}

export default {
  Common: {
    HowItWorks: 'How It Works',
    Apply: 'Apply',
    Applying: 'Applying',
    Hire: 'Hire',
    Hiring: 'Hiring',
    AboutUs: 'About Us',
    Content: 'Content',
    next: 'Next',
    back: 'Go Back',
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
  Pricing: {
    _1: {
      price: '150',
      credits: '5',
    },
    _2: {
      price: '250',
      credits: '10',
    },
    _3: {
      price: '500',
      credits: '30',
    },
    _4: {
      price: '1000',
      credits: 'Unlimited',
    },
  },
  WhyRemote: {
    _1:
      '',
    _2:
      '',
  },
  Resume: {
    sidePannel: [
      {
        text: 'New resume',
        icon: 'mdi-plus',
        //   route: 'new',
      },
      {
        text: 'Managers',
        icon: 'mdi-account-multiple',
        //   route: 'manage',
      },
      {
        text: 'My plan',
        icon: 'mdi-currency-usd',
      },
      {
        text: 'Upgrade',
        icon: 'mdi-briefcase-outline',
      },
      {
        text: 'Buy Credits',
        icon: 'mdi-credit-card-outline',
      },
    ],
    personalInformation: {
      _title: 'Personal information',
      fullName: 'Full name',
      gender: 'Gender',
      birthDate: 'Birth date',
      personalBio: 'Personal bio',
      businessBio: 'Business bio',
      lookingFor: 'What I\'m looking for',
    },
    education: {
      _title: 'Education',
      academicFormation: {
        _title: 'Academic formation',
        institution: 'Institution',
        typeOfFormation: 'Formation',
        studyArea: 'Study area',
        period: {
          _title: 'Period',
          startDate: 'Start date',
          endDate: 'End date',
        },
        grade: 'Grade',
        description: 'Description',
        activities: 'Activities and groups',
      },
      ressearches: {
        _title: 'Ressearches',
        paperTitle: 'Paper title',
        abstract: 'Abstract',
        link: 'Link',
      },
      courses: {
        _title: 'Courses',
        courseTitle: 'Course title',
        courseDescription: 'Description',
        platform: 'Platform',
      },
      certificates: 'Certificates',
    },
    workHistory: {
      _title: 'Work History',
      companyName: 'Company name',
      role: 'Role',
      description: 'Description',
      location: 'Location',
      period: {
        _title: 'Period',
        startDate: 'Start date',
        endDate: 'End date',
      },
    },
    skills: {
      _title: 'Skills',
      softSkills: 'Soft skills',
      knowledgeAreas: 'Knowledge Areas',
      frameworks: 'Frameworks',
      programmingLanguages: 'Programming languages',
      customSkills: 'Custom skills',
    },
  },
  Job: {
    sidePannel: [
      {
        text: 'New Job',
        icon: 'mdi-plus',
        route: 'new',
      },
      {
        text: 'Managers',
        icon: 'mdi-account-multiple',
        route: 'manage',
      },
      {
        text: 'My plan',
        icon: 'mdi-currency-usd',
      },
      {
        text: 'Upgrade',
        icon: 'mdi-briefcase-outline',
      },
      {
        text: 'Buy Credits',
        icon: 'mdi-credit-card-outline',
      },
    ],
    new: {
      _1: {
        pageTitle: 'Basic Information',
        jobTitle: 'Job Title',
        category: 'Category',
        contractType: 'Contract Type',
      },
      _2: {
        pageTitle: 'Tell us more',
        about: 'About the role',
        languages: 'Required Language(s)',
      },
      _3: {
        pageTitle: '',
      },
      _4: {
        pageTitle: '',
      },
    },
  },
  LandingPage: {
    title: 'Connecting companies with developers for remote Work',
    subTitle:
      'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups',
    CTATittle: 'Sign Up Now',
    inputs: {
      email: {
        title: 'Email',
        errorMessage: 'Invalid e-mail.',
      },
      name: {
        title: 'Name',
        hint: 'Please write at least 5 characters',
        errorMessage: 'Your name must have at least have 5 characters',
      },
      skills: {
        title: 'Pick your professionals skills (programming languages, frameworks, work areas etc)',
        hint: 'Please choose at least 3 tags',
      },
    },
    buttons: {
      goBack: 'Go back',
      next: 'Next',
      confirm: 'Confirm',
    },
    footer: {
      socialMedia: {
        title: 'Connect with us on our social networks!',
      },
      icons: [
        { icon: 'mdi-facebook', link: 'https://facebook.com/techvogel' },
        { icon: 'mdi-twitter', link: 'https://twitter.com/techvogel' },
        { icon: 'mdi-linkedin', link: 'https://linkedin.com/company/techvogel' },
        { icon: 'mdi-instagram', link: 'https://instagram.com/tech_vogel' },
      ],
    },
  },
  data: {
    companyType: [ 'Private', 'Public', 'NGO', 'Other' ],
    contractType: [ 'Full-Time', 'Part-time', 'Hourly', 'Contract', 'Internship' ],
    experienceLevel: [ 'Student', 'Junior', 'Mid-Level', 'Senior', 'Lead', 'Manager' ],
    languages: Languages,
    differentLanguages: DifferentLanguages,
    timezones: Timezones,
    monthCount: MonthCount,
    contractDurationTimePeriod: ContractDurationTimePeriod,
    companySize: CompanySize,
    preMadePhrases,
    knowledgeAreas: Skills.KnowledgeAreas,
    programmingLanguages: Skills.ProgrammingLanguages,
    frameworks: groupFormat(Skills.FrameWorks2),
    softSkills: dataFormat(Skills.SoftSkills),
    everySkill: groupFormat({ 'Programming Languages': Skills.ProgrammingLanguages })
      .concat(groupFormat({ 'Knowledge Areas': Skills.KnowledgeAreas }))
      .concat(groupFormat(Skills.FrameWorks2)),
    // .concat(dataFormat(Skills.SoftSkills)),
    timeFrame: [ 'YEAR', 'MONTH', 'HOUR' ],
  },
  format: {
    date: 'MM/DD/YYYY',
  },
  languages: {
    data: [
      { i18n: 'pt-br', language: 'Português', country: 'brazil' },
      { i18n: 'en-us', language: 'English', country: 'usa' },
    ],
    icons: FlagIcons,
  },
};
