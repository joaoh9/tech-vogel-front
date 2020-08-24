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

const localeEnUs = {
  Common: {
    HowItWorks: 'How It Works',
    Apply: 'Apply',
    Applying: 'Applying',
    Hire: 'Hire',
    Hiring: 'Hiring',
    AboutUs: 'About Us',
    Content: 'Content',
    Signup: 'Sign-up',
    next: 'Next',
    back: 'Go Back',
    name: {
      placeholder: 'Name',
      label: 'Name',
    },
    email: {
      placeholder: 'Email',
      label: 'Email',
    },
    password: {
      placeholder: 'Password',
      label: 'Password',
    },
    username: {
      placeholder: 'Username',
      label: 'Username',
    },
    confirmPassword: {
      placeholder: 'Confirm Password',
      label: 'Confirm Password',
    },
    termsAndConditions: {
      text: 'I accept the terms and conditions',
      link: '',
    },
  },
  Money: {
    defaultFormat: [
      'en-US',
      { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 },
    ],
  },
  Rules: {
    nameTooShort: 'Please write your full name',
    wrongFormatEmail: 'Email with wrong format',
    lessThanXCharacters: 'Please write at least X characters',
    letterOrNumber: 'Please write only letters or numbers',
    equal: 'X must be equal to Y',
    passwordsDontMatch: 'Passwords do not match',
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
  WhyRemote: {
    _1: '',
    _2: '',
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
      page1: { title: 'Basic Informationaaa' },
      jobTitle: { title: 'Job Title', tooltip: 'teste pageTitle' },
      experienceLevel: { title: 'Experience Level', tooltip: 'teste jobTitle' },
      contractType: { title: 'Contract Type', tooltip: 'teste experienceLevel' },
      page2: { title: 'Tell us more' },
      about: { title: 'About the role', placeholder: 'Describe better the role', tooltip: '' },
      languages: { title: 'Required Language(s)', tooltip: '' },
      page3: { title: 'Keep!' },
      knowledgeAreas: { title: 'Knowledge Areas', tooltip: '' },
      programmingLanguages: { title: 'Programming Languages', tooltip: '' },
      frameworks: { title: 'Frameworks', tooltip: '' },
      softSkills: { title: 'Soft Skills', tooltip: '' },
      page4: { title: 'Specificaeaefaef!' + '&nbsp;' },
      salary: { title: 'Salary', tooltip: '' },
      perks: { title: 'Perks and Benefits', tooltip: '' },
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
  Company: {
    new: {
      _1: {
        pageTitle: 'Register as a company',
        companyName: 'Company name',
        representativeName: 'Representative name',
        representativeEmail: 'Representative email',
        password: 'Password',
        confirmPassword: 'Confirm password',
      },
      _2: {
        pageTitle: 'Build your company page',
        location: 'Location',
        aboutYourCompany: 'About your company',
      },
      _3: {
        pageTitle: 'Add your links',
        webpage: 'Webpage',
        linkedin: 'LinkedIn',
        twitter: 'Twitter',
        instagram: 'Instagram',
      },
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
  Signup: {
    _1: {
      title: 'Sign Up',
    },
    _2: {
      title: 'Create a password',
      description: 'Please enter a password for your account',
    },
    _3: {
      title: 'Please confirm your email with a link sent to it',
      description: 'Please confirm your email clicking on a link sent to X',
    },
    error: {
      errorSavingUser: 'There was an error when saving the user',
    },
  },
  Quill: {
    defaultToolbar: [
      // [{ size: [ 'small', false, 'large', 'huge' ] }],
      [ 'bold', 'italic', 'underline' ],
      [ { list: 'ordered' }, { list: 'bullet' }, { list: 'check' } ],
      [ { align: '' }, { align: 'center' }, { align: 'right' }, { align: 'justify' } ],
      ['code-block'],
    ],
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

export default localeEnUs;
