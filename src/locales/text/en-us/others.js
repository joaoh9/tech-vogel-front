import FlagIcons from 'Data/flagIcons';

export default {
  tv: 'Tech Vogel',
  techVogel: 'Tech Vogel',
  home: {
    title1: 'Find remote',
    title2: '<programmers>',
    title3: 'for your company!',
    subtitle1: 'Get your projects off the ground with the help of the',
    subtitle2: 'programmers that best fit your needs!',
  },
  howItWorks: {
    title: 'How It Works',
    forCompanies: 'For companies',
    step: {
      '1': 'Log in to your account, fill your job description and press "post Job”',
      '2':
        'Your job will be running in our platform for 15 days collecting as many applications as possible',
      '3': 'Receive your report with the fitest Devs for your Job.',
      '4': 'Start your inside process and hire the best Dev for your project growth!',
    },
  },
  report: {
    title: 'How can a report help me?',
    subtitle:
      'Our report is a solution for your company to save time and get better hiring results by showing you the three applicants that best fit your requirements.',
    card: 'How does it work?',
    explanation: {
      '1':
        'When potential applicants register to Tech Vogel, they are asked to select which programming languages, frameworks and knowledge areas they are skilled on and for how long they have been working with them. They can also select soft skills and foreign language skills.',
      '2':
        'When a company creates a job ad on Tech Vogel, they are also asked to select a group of skills that are required for that position and rank them by priority. ',
      '3':
        'Our algorithm compares the information on the job ad to the skills on the applicants’ CVs and, after 15 days of the job ad being up, the company will receive their Report with the breakdown of the three best CVs for the job!',
    },
  },
  errors: {
    '500':
      'An unexpected error has occurred. Please try again later or email contact@techvogel.com',
  },
  rules: {
    nameTooShort: 'Please write your full name',
    wrongFormatEmail: 'Email with wrong format!',
    lessThanXCharacters: 'Please write at least X characters',
    letterOrNumber: 'Please write only letters or numbers',
    onlyNumber: 'Only numbers allowed',
    yearValidation: 'Year must contain 4 digits',
    yearOutOfRange: 'Year out of range',
    equal: 'X must be equal to Y',
    notNumber: 'Not a number',
    requiredField: 'Field Required',
    emailAlreadyRegistered: 'Email already registered!',
    usernameUnavaliable: 'Username not avaliable!',
    weakPassword: 'Password too weak!',
    emailsDontMatch: 'Emails do not match',
    passwordsDontMatch: 'Passwords do not match',
    termsAndConditions: 'Your must accept our Terms and Conditions',
  },
  quill: {
    defaultToolbar: [
      // [{ size: [ 'small', false, 'large', 'huge' ] }],
      [ 'bold', 'italic', 'underline' ],
      [ { list: 'ordered' }, { list: 'bullet' }, { list: 'check' } ],
      [ { align: '' }, { align: 'center' }, { align: 'right' }, { align: 'justify' } ],
      ['code-block'],
    ],
  },
  internationalization: {
    data: [
      {
        i18n: 'en-us',
        language: 'English',
        country: 'usa',
        flag: FlagIcons.usa,
        disabledFlag: FlagIcons.usaDisabled,
      },
      {
        i18n: 'pt-br',
        language: 'Português',
        country: 'brazil',
        flag: FlagIcons.brazil,
        disabledFlag: FlagIcons.brazilDisabled,
      },
    ],
    icons: FlagIcons,
  },
  oAuth: {
    github: {
      confirm: 'Confirm GitHub acces to Tech Vogel?',
      accessSucces: 'Github account successfully linked to Tech Vogel',
      accessError: 'An error occurred when authorizing the application. Please try again later.',
    },
  },
};
