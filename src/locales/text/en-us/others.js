import FlagIcons from 'Data/flagIcons';

export default {
  tv: 'Tech Vogel',
  techVogel: 'Tech Vogel',
  home: {
    title1: 'Find remote',
    title2: '<devs />',
    title3: 'for your company!',
    subtitle: 'Achieve your goals with Devs that best fit your project needs! ',
    timeWasted: 'No more time wasted selecting hundreds of CVs!',
    postForFree: 'Post for free',
    startApplying: 'Start applying',
    fastEasy: 'Fast, Easy & Practical',
    withOur: 'With our',
    report: 'report',
    fittestDevs: 'of the fittest Devs for your project you get:',
    tips: [
      { text: 'No time wasted searching thousands of CVs' },
      { text: 'The best matched devs to your project needs' },
      { text: 'To pay once after you receive your report' },
    ],
    primaryBtn: 'Post jobs for free',
    secondaryBtn: 'Find jobs for free',
    helpCard: {
      howItWorks: {
        title: 'How can a report help me?',
        description: 'Our report is a solution for your company to save time and get better hiring results by showing you the three applicants that best fit your requirements.',
        howDoesWork: 'How does it work',
        modalText: `When potential applicants register to Tech Vogel, they are asked to select which
        programming languages, frameworks and knowledge areas they are skilled on and for how
        long they have been working with them. They can also select soft skills and foreign
        language skills. When a company creates a job ad on Tech Vogel, they are also asked to
        select a group of skills that are required for that position and rank them by priority.
        Our algorithm compares the information on the job ad to the skills on the applicants’
        CVs and, after just 15 working days of the job ad being up, your company will receive
        the Report with the breakdown of the three fittest professionals for the job! All
        candidates apply on their own accord and will.`,
        btnText: 'Close',
      },
      whatsVogel: {
        title: 'What is a Vogel?',
        description: 'A Vogel is your credit you can use to apply for the jobs you want. You receive 5 Vogels when you first register to Tech Vogel and 1 Vogel per day after Log In.',
        vogelsLimited: 'Why are Vogels limited?',
        modalText: `Vogels are limited because it’s better for you to carefully choose the jobs you want to apply to, instead of wasting your time and energy with applications to positions that don’t fit your profile or skills.
        This way, you are more likely to get a positive result out of your applications because you took care to consider them before applying!`,
        btnText: 'Close',
      },
    },
  },
  questions: {
    title: 'Any questions? Get in touch!',
    reachUs: {
      title: 'Send us a question',
      description: 'Tell us your company name, email and question via our contact form.',
      buttonText: 'WRITE QUESTION',
      click: 'https://forms.gle/1qZm7PDGZPeUQuW87',
    },
    call: {
      title: 'Schedule a call',
      description: 'Select a date and time for a one on one video call with us.',
      buttonText: 'BOOK NOW',
      click: 'https://calendly.com/lauratechvogel/call-tech-vogel',
    },
  },
  typesOfProgrammers: {
    title: 'What types of developers are there?',
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
        title: 'Post your job for free',
        description: 'Log in to your account, fill your job description and press "post Job”.',
      },
      {
        title: 'Collect applications',
        description:
          'Your job will be running in our platform for 15 working days collecting as many interested candidates as possible.',
      },
      {
        title: 'Receive reports',
        description: 'Receive your report with the fittest devs for your job. Only pay if you like their profile.',
      },
      {
        title: 'Hire the best devs!',
        description:
          'Get to know your 3 fittest devs and start your inside process to hire the best developer for your project growth!',
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
    wrongFormatPassword: 'Password with wrong format!',
    lessThanXCharacters: 'Please write at least X characters',
    greaterThanXCharacters: 'Please write up to maximum X characters',
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
    emailRequired: 'Email required',
    passwordRequired: 'Password required',
    wrongEmailLogin:
    'Sorry, your email is incorrect. Please double-check your email.',
    wrongPasswordLogin: 'Sorry, your password is incorrect. Please double-check your password.',
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
      confirm: 'Confirm GitHub access to Tech Vogel?',
      accessSuccess: 'Github account successfully linked to Tech Vogel',
      accessError: 'An error occurred when authorizing the application. Please try again later.',
      accessFirst: 'You must grant github access first!',
    },
  },
  lorem:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quibusdam nihil deserunt modi cupiditate ut, incidunt ducimus architecto impedit, atque magni amet suscipit autem ad, inventore quas consequuntur repellendus temporibus?',
  inactivity: 'You have been logged out for inactivity. Please login again',
};
