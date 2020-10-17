import bigText from './bigText';

export default {
  signup: {
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
      clickToConfirm: 'Click the button to confirm your account!',
      title: 'Your email has been confirmed!',
      description: 'Proceed to dashboard',
      error: 'Your code is invalid or has expired!',
    },
    buttons: {
      createCompany: 'I want to post a job',
      createCV: 'I want to get hired',
    },
  },
  footer: {
    socialMedia: {
      title: 'Follow us',
      links: [
        {
          text: 'Facebook',
          icon: 'mdi-facebook',
          link: 'https://facebook.com/techvogel',
        },
        {
          text: 'Twitter',
          icon: 'mdi-twitter',
          link: 'https://twitter.com/techvogel',
        },
        {
          text: 'Linkedin',
          icon: 'mdi-linkedin',
          link: 'https://linkedin.com/company/techvogel',
        },
        {
          text: 'Instagram',
          icon: 'mdi-instagram',
          link: 'https://instagram.com/tech_vogel',
        },
      ],
    },
    jobsInfo: [
      {
        text: 'Find jobs',
        to: '/jobs',
      },
      {
        text: 'Advertise a position',
        to: '/jobs/new',
      },
      {
        text: 'login',
        to: '/login',
      },
    ],
    aboutUsInfo: [
      { text: 'Our story', to: '/aboutus' },
      { text: 'How it works', to: '/howitworks' },
      { text: 'Pricing', to: '/pricing' },
    ],
  },
  login: {
    title: 'Login',
    subtitle: 'Enter Tech Vogel',
    createAccount: 'Create an account',
    forgotPassword: 'Forgot your password?',
    error: 'Wrong credentials',
  },
  privacyPolicy: {
    title: 'Your privacy is important to us.',
    description: 'You can learn more about the steps we take to ensure it here.',
    subtitle: 'Our Privacy Policy',
    chooseLanguageText: 'View our privacy policy in:',
    buttons: [
      'Introduction',
      'Data processing',
      'Data sharing',
      'Data retention and erasure',
      'Protection and storage',
      'Policy changes',
      'Cookies',
      'Get in touch',
    ],
    bigText: bigText.privacyPolicy,
  },
  termsOfService: {
    title: 'Your privacy is important to us.',
    description: 'You can learn more about the steps we take to ensure it here.',
    subtitle: 'Our Terms of Service',
    chooseLanguageText: 'View our privacy policy in:',
    buttons: [
      'Introduction and general information',
      'User data',
      'Registration',
      'Services and cost',
      'Terms of service',
      'Final information',
    ],
    bigText: bigText.termsOfService,
  },
};
