import FlagIcons from 'Data/flagIcons';

export default {
  tv: 'Tech Vogel',
  techVogel: 'Tech Vogel',
  home: {
    title1: 'Find remote',
    title2: '<developers/>',
    title3: 'for your company!',
    subtitle1: 'Get your projects off the ground with the help of the',
    subtitle2: 'developer that best fit your needs!',
    timeWasted: 'No more time wasted selecting hundreds of CVs!',
    postForFree: 'Post for free',
    startApplying: 'Start applying',
  },
  questions: {
    reachUs: {
      title: 'Reach us',
      description: 'Tell us your company name, email and question via our contact form.',
      buttonText: 'WRITE QUESTION',
      click: 'https://forms.gle/1qZm7PDGZPeUQuW87',
    },
    call: {
      title: 'Schedule a call',
      description: 'Select a date and time for a one on one video call with us.',
      buttonText: 'BOOK NOW',
      click: 'https://forms.gle/1qZm7PDGZPeUQuW87', // TODO: atualizar
    },
  },
  typesOfProgrammers: {
    title: 'Examples of developers can you find here',
    data: [
      'Frontend Developer',
      'Backend Developer',
      'Full Stack Developer',
      'Mobile Developer',
      'Data Scientist',
      'Devops',
      'Blockchain Developer',
    ],
    more: 'With many more to come!',
  },
  howItWorks: {
    title: 'How It Works',
    forCompanies: 'For companies',
    steps: [
      {
        title: 'Post your job',
        description: 'Log in to your account, fill your job description and press "post Job"',
      },
      {
        title: 'Collect applications',
        description:
          'Your job will be running in our platform por 15 days collecting as many applications  as possible',
      },
      {
        title: 'Receive reports',
        description: 'Receive your report with the fittest devs for your job.',
      },
      {
        title: 'Hire the best devs!',
        description:
          'Start your inside process and hire the best developer for your project growth!',
      },
    ],
    pricing: [
      { text: 'Post your job for free' },
      { text: 'Get your report in 15 working days' },
      { text: 'Know the 3 fittest applicants for your job' },
      { text: 'Get access to our toolset to help you with remote hiring' },
    ],
    forEachReport: 'For each report',
    BRL: {
      fullPrice: '499.99',
      installments: '3',
    },
  },
  devs: {
    subtitle: 'For developers',
    steps: [
      {
        title: 'Find the best Job',
        description:
          'We are freedom lovers so all the jobs posted at Tech Vogel are for remote positions, so search and find the one that fits you the best! ',
      },
      {
        title: 'Sign up or log in ',
        description:
          'Get your Vogels so you can apply to Jobs! Don\'t worry is fast and you can show exactly who you are! ',
      },
      {
        title: 'Apply for the best job',
        description:
          'After registering and signing up you can browse for the best jobs and get to work remotely. \nPs: we don\'t charge any fee from you!',
      },
      {
        title: 'Get selected! ',
        description: 'Be part of the most liberating work model and code wherever you want!',
      },
    ],
    pricing: [
      { text: 'Save money by working wherever you please', comingSoon: false },
      { text: 'Apply to jobs that fit your skills ', comingSoon: false },
      { text: 'Get to know the company hiring', comingSoon: false },
      { text: 'Gain access to our Discord group', comingSoon: true },
    ],
  },
  report: {
    title: 'How can a report help me?',
    subtitle:
      'Our report is a solution for your company to save time and get better hiring results by showing you the three applicants that best fit your requirements.',
    card: 'How does it work?',
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
      accessSuccess: 'Github account successfully linked to Tech Vogel',
      accessError: 'An error occurred when authorizing the application. Please try again later.',
      accessFirst: 'You must grant github access first!',
    },
  },
  lorem:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quibusdam nihil deserunt modi cupiditate ut, incidunt ducimus architecto impedit, atque magni amet suscipit autem ad, inventore quas consequuntur repellendus temporibus?',
  inactivity: 'You have been logged out for inactivity. Please login again',
};
