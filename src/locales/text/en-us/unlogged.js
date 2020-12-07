import bigText from './bigText';

export default {
  signup: {
    title: 'Sign Up',
    description: 'Sign up for Tech Vogel',
    name: {
      title: 'Your name',
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
      title: 'A confirmation email was sent to {email}',
      description: 'Click on it to confirm your registration',
    },
    confirmationCode: {
      title: 'Paste the code you received in the box below',
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
      createCompany: 'Post a job',
      createCV: 'Get hired',
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
        text: 'Login',
        to: '/login',
      },
    ],
    aboutUsInfo: [
      { text: 'Our story', to: '/about-us' },
      { text: 'How it works', to: '/how-it-works' },
      { text: 'Pricing', to: '/pricing' },
      { text: 'FAQ', to: '/faq' },
      { text: 'Terms of Service', to: '/terms-of-service' },
      { text: 'Privacy Policy', to: '/privacy-policy' },
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
  aboutUs: {
    text1:
      'Tech Vogel was created by people passionate with freedom, so we created a platform for developers to find the best remote jobs and maintain their freedom to work wherever they feel most comfortable and productive!',
    text2:
      'Our vision has always been and always will be to bring freedom to as many people as possible through our platform, allowing remote work and more projects taking off each day with a diversified and qualified workforce.',
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
