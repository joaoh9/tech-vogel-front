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
  tv: 'Tech Vogel',
  techVogel: 'Tech Vogel',
  Common: {
    feedback: 'Feedback',
    tv: 'Tech Vogel',
    techVogel: 'Tech Vogel',
    day: 'Day',
    month: 'Month',
    year: 'Year',
    from: 'From',
    to: 'To',
    description: 'description',
    company: 'company',
    user: 'user',
    professional: 'professional',
    howItWorks: 'How It Works',
    login: 'Login',
    signup: 'Sign up',
    apply: 'Apply',
    applying: 'Applying',
    hire: 'Hire',
    hiring: 'Hiring',
    aboutUs: 'About Us',
    content: 'Content',
    next: 'Next',
    confirm: 'Confirm',
    back: 'Go Back',
    maximum: 'Maximum',
    minimum: 'Minimum',
    characters: 'Characters',
    finish: 'I\'m done!',
    copywright: '©2020 Tech Vogel. All rights reserved.',
    termsOfService: 'Terms of service',
    privacyPolicy: 'Privacy policy',
    cnpj: 'CNPJ',
    cnpjNumber: '38.216.987/0001-59',
    phone: '+55 11 95052 7281',
    contactEmail: 'contact@techvogel.com',
    jobs: 'Jobs',
    job: 'Job',
    name: 'Name',
    addNew: 'Add new',
    addNewInput: 'Add new input',
    findAJob: 'Find a Job',
    postAJob: 'Post a Job',
    email: {
      placeholder: 'Email',
      label: 'Email',
    },
    password: {
      placeholder: 'Password',
      label: 'Password',
    },
    username:
      {
        placeholder: 'Username',
        label: 'Username',
      } || 'Username',
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
    wrongFormatEmail: 'Email with wrong format!',
    lessThanXCharacters: 'Please write at least X characters',
    letterOrNumber: 'Please write only letters or numbers',
    equal: 'X must be equal to Y',
    requiredField: 'Field Required',
    emailAlreadyRegistered: 'Email already registered!',
    usernameUnavaliable: 'Username not avaliable!',
    weakPassword: 'Password too weak!',
    passwordsDontMatch: 'Passwords do not match',
    termsAndConditions: 'Your must accept our Terms and Conditions',
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
  skills: {
    _title: 'Skills',
    softSkills: 'Soft skills',
    knowledgeAreas: 'Knowledge Areas',
    frameworks: 'Frameworks',
    programmingLanguages: 'Programming languages',
    customSkills: 'Custom skills',
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
      page1: { title: 'Basic Info' },
      jobTitle: { title: 'Job Title', tooltip: 'teste pageTitle' },
      experienceLevel: { title: 'Experience Level', tooltip: 'teste jobTitle' },
      contractType: { title: 'Contract Type', tooltip: 'teste experienceLevel' },
      page2: { title: 'Tell us more' },
      about: {
        title: 'About the role',
        placeholder: 'Describe in one',
        tooltip: 'about test',
      },
      languages: { title: 'Required Language(s)', tooltip: 'languages teste' },
      page3: { title: 'Keep!' },
      knowledgeAreas: { title: 'Knowledge Areas', tooltip: 'knowledge areas test' },
      programmingLanguages: {
        title: 'Programming Languages',
        tooltip: 'programming languages test',
      },
      frameworks: { title: 'Frameworks', tooltip: 'Frameworks test' },
      softSkills: { title: 'Soft Skills', tooltip: 'soft Skills test' },
      page4: { title: 'Specifica!' + '' },
      salary: { title: 'Salary', tooltip: 'salary test' },
      perks: { title: 'Perks and Benefits', tooltip: 'perks test' },
      steppers: [ 'Basic Info', 'Tell us more', 'Keep', 'Specifica' ],
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
  },
  footer: {
    socialMedia: {
      title: 'Follow us',
      links: [
        { text: 'Facebook', icon: 'mdi-facebook', link: 'https://facebook.com/techvogel' },
        { text: 'Twitter', icon: 'mdi-twitter', link: 'https://twitter.com/techvogel' },
        {
          text: 'Linkedin',
          icon: 'mdi-linkedin',
          link: 'https://linkedin.com/company/techvogel',
        },
        { text: 'Instagram', icon: 'mdi-instagram', link: 'https://instagram.com/tech_vogel' },
      ],
    },
    jobsInfo: [
      { text: 'Find jobs', to: '/jobs' },
      { text: 'Advertise a position', to: '/job/new' },
      { text: 'login', to: '/login' },
    ],
    aboutUsInfo: [
      { text: 'Our story', to: '/aboutus' },
      { text: 'How it works', to: '/howitworks' },
      { text: 'Pricing', to: '/pricing' },
    ],
  },
  Company: {
    new: {
      steps: [ 'Basic Info', 'Additional Info', 'Contact' ],
      page1: 'Register as a company',
      companyName: 'Company name',
      representativeName: 'Representative name',
      representativeEmail: 'Representative email',
      password: 'Password',
      confirmPassword: 'Confirm password',
      page2: 'Build your company page',
      location: 'Location',
      aboutYourCompany: 'About your company',
      page3: 'Add your links',
      webpage: 'Webpage',
      linkedin: 'LinkedIn',
      twitter: 'Twitter',
      instagram: 'Instagram',
    },
  },
  login: {
    title: 'Login',
    subtitle: 'Enter Tech Vogel',
    createAccount: 'Create an account',
    forgotPassword: 'Forgot your password?',
    error: 'Wrong credentials',
  },
  User: {
    register: {
      page1: { title: 'Register to apply for jobs', tooltip: 'page1 test' },
      fullName: { title: 'Full name', tooltip: 'fullName test' },
      email: { title: 'Email', tooltip: 'email test' },
      username: { title: 'Username', tooltip: 'username test' },
      password: { title: 'Password', tooltip: 'password test' },
      confirmPassword: { title: 'Confirm password', tooltip: 'confirmPassword test' },
      page2: { title: 'Confirmation', tooltip: 'page2 test' },
      pageSubtitle: {
        title: 'An access code was sent to your registered email',
        tooltip: 'pageSubtitle test',
      },
      accessCode: { title: 'Access code', tooltip: 'accessCode test' },
      accessCodeHelper: {
        title: 'Didn\'t get your access code? Click here',
        tooltip: 'accessCodeHelper test',
      },
      page3: { title: 'Welcome to Tech Voguel', tooltip: 'page3 test' },
    },
  },
  data: {
    companyType: [ 'Private', 'Public', 'NGO', 'Other' ],
    contractType: [ 'Full-Time', 'Part-time', 'Hourly' ],
    experienceLevel: [ 'Student', 'Junior', 'Mid-Level', 'Senior', 'Lead', 'Manager' ],
    jobInterests: [ 'Startups', 'Small and medium', 'Large' ],
    languages: Languages,
    differentLanguages: DifferentLanguages,
    timezones: Timezones,
    monthCount: MonthCount,
    contractDurationTimePeriod: ContractDurationTimePeriod,
    companySize: CompanySize,
    preMadePhrases,
    knowledgeAreas: Skills.KnowledgeAreas,
    programmingLanguages: Skills.ProgrammingLanguages,
    timeFrame: [ 'YEAR', 'MONTH', 'HOUR' ],
  },
  Signup: {
    title: 'Sign Up',
    description: 'Sign up for Tech Vogel',
    name: {
      title: 'Your name',
    },
    username: {
      title: 'Pick a username',
    },
    email: {
      title: 'Your Email',
    },
    password: {
      title: 'Create a password',
      description: 'Please enter a password for your account',
    },
    confirmPassword: {
      title: 'Please confirm your email with a link sent to it',
      description: 'Please confirm your email clicking on a link sent to X',
    },
    error: {
      errorSavingUser: 'There was an error when saving the user',
    },
    confirmEmail: {
      title: 'A confirmation link was sent to your email!',
      description: 'Click on it to confirm your registration',
    },
    termsAndConditions: {
      text: 'I have read and agree to the',
      termsAndConditions: 'Terms and Conditions',
    },
    resendConfirmationCode: {
      title: 'Didn’t get the access code? Click here to resend.',
      success: 'The code was sent to your email!',
      error: 'There was an error sending the email :(. Please try again later.',
      resend: 'Resend',
    },
    registrationConfirmed: {
      title: 'Your email has been confirmed!',
      description: 'Proceed to dashboard',
      error: 'Your code is invalid or has expired!',
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
      { i18n: 'pt-br', language: 'Português', country: 'brazil', flag: FlagIcons.brazil },
      { i18n: 'en-us', language: 'English', country: 'usa', flag: FlagIcons.usa },
    ],
    icons: FlagIcons,
  },
  CV: {
    register: {
      tabs: [
        'Start',
        'Preferences',
        'Personal Information',
        'Work Experience',
        'Skills',
        'Education',
      ],
      start: {
        title: 'Register your CV',
        linkLinkedIn: { title: 'Link your LinkedIn account' },
        linkGithub: { title: 'Link your GitHub Account' },
        registerManually: { title: 'Register CV Manually' },
      },
      preferences: {
        title: 'Select your preferences',
        description: 'You’ll be able to edit these or add more information later on.',
        jobInterests: {
          title: 'Which company size fits you best?',
          options: [ 'Startups', 'Small and medium', 'Large' ],
          placeholder: 'Pick a category',
        },
        jobType: {
          title: 'Which job types are you looking for?',
          options: [ 'Full time', 'Part time', 'Freelance' ],
        },
      },
      personalInfo: {
        title: 'Let\'s build your profile',
        description:
          'You’ll be able to edit these later on. This information will be\nvisible to everyone.',
        fullName: {
          title: 'Your full name',
        },
        location: {
          title: 'Your location',
          city: 'City',
          country: 'Country',
        },
        profilePicture: {
          title: 'Add a profile picture',
          specifics: 'Maximum size: 200 x 200px\nFile format: .jpg or .png',
        },
      },
      workExperience: {
        title: 'Share your work experience',
        description: 'You’ll be able to edit this or add more information later on.',
        company: {
          title: 'Company',
        },
        position: 'Your position',
        myJob: {
          options: ['This is my current job'],
        },
        jobDescription: 'Description',
        button: {
          addMore: 'ADDMORE',
          continue: 'CONTINUE',
        },
        placeholders: {
          company: {
            title: 'Company name',
          },
          position: 'Ex: DevOps',
        },
      },
      skills: {
        title: 'Tell us about your skills',
        description:
          'You’ll be able to edit these later on. They will be displayed on\nyour profile and we’ll use the skills you pick to show you\npositions that fit your profile!',
        programmingLanguages: 'Programming Languages',
        frameworks: 'Frameworks',
        knowledgeAreas: 'Knowledge areas',
        softSkills: 'Soft skills',
        button: 'CONTINUE',
      },
      education: {
        title: 'Education',
        description:
          'You’ll be able to edit these or add more information later on.\nThis information will be displayed to recruiters and people\nwho visit your profile.',
        school: 'School',
        degree: {
          title: 'Degree',
          options: [ 'Bachelor', 'Undergraduate Degree' ],
        },
        fieldOfStudy: 'Field of study',
        type: 'Type',
        institution: 'Institution',
        from: 'From',
        to: 'To',
        addMore: 'ADD MORE',
        continue: 'CONTINUE',
        placeholders: {
          degree: 'Name of the course',
          type: 'Ex: Bachelor',
          institution: 'Name of the Institution',
          from: 'From',
          to: 'To',
        },
      },
      extras: {
        title: 'Anything else?',
        description:
          'Here you can add any extra information, like certifications,\n volunteer work or ??? You’ll be able to edit these or add more\n information later on.',
        button: 'I’M DONE!',
      },
    },
  },
  OAuth: {
    github: {
      confirm: 'Confirm GitHub acces to Tech Vogel?',
      accessSucces: 'Github account successfully linked to Tech Vogel',
      accessError: 'An error occurred when authorizing the application. Please try again later.',
    },
  },
  Feedback: {
    title: 'Leave your Feedback, bug encounter or suggestion!',
    topic: 'Topic',
    description: 'Description',
  },
};

export default localeEnUs;
