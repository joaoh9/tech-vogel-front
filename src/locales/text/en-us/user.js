export default {
  resume: {
    register: {
      important: 'Important to have!',
      tabs: [
        {
          name: 'Start',
          identifier: 'start',
        },
        {
          name: 'Preferences',
          identifier: 'preferences',
        },
        {
          name: 'Personal Information',
          identifier: 'personalInfo',
        },
        {
          name: 'Work Experience',
          identifier: 'workExperience',
        },
        {
          name: 'Skills',
          identifier: 'skills',
        },
        {
          name: 'Education',
          identifier: 'education',
        },
      ],
      start: {
        title: 'Register your CV',
        description:
          'Your CV is how the companies will see your info and how you will get matched for the best job oportunities! Fill it carefully!',
        linkLinkedIn: {
          title: 'Link your LinkedIn account',
        },
        linkGithub: {
          title: 'Link your GitHub Account',
        },
        registerManually: {
          title: 'Register CV Manually',
        },
        goToDashboard: 'Skip and go to Dashboard',
      },
      preferences: {
        title: 'Select your preferences',
        description: 'You’ll be able to edit these or add more information later on.',
        companySize: {
          title: 'Which company size fits you best?',
          placeholder: 'Pick a category',
        },
        contractType: {
          title: 'Which job types are you looking for?',
        },
        jobType: {
          title: 'How do you prefer working?',
        },
        relocationOptions: {
          title: 'Are you open for relocations?',
        },
      },
      personalInfo: {
        title: 'Let\'s build your profile',
        description:
          'You’ll be able to edit these later on. This information will be\nvisible to everyone.',
        fullName: {
          title: 'Full name',
        },
        mainRole: {
          title: 'Your main role as a developer',
          placeholder: 'Ex: Junior Full Stack Developer',
        },
        location: {
          title: 'Your location',
          city: 'City',
          state: 'State',
          country: 'Country',
        },
        profilePicture: {
          title: 'Profile picture',
          placeholder: 'Upload your profile picture',
          specifics: 'Maximum size: 200 x 200px\nFile format: .jpg or .png',
        },
        personalBio: {
          title: 'Your personal Bio',
        },
      },
      workExperience: {
        title: 'Share your work experience',
        description: 'You’ll be able to edit this or add more information later on.',
        company: {
          title: 'Company Name',
        },
        position: 'Your position',
        currentJob: 'This is my current job',
        jobDescription: {
          title: 'Description',
          placeholder: 'What were your biggest accomplishments?',
        },
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
        explanation: 'Pick your experience Level in years',
      },
      education: {
        title: 'Education',
        description:
          'You’ll be able to edit these or add more information later on.\nThis information will be displayed to recruiters and people\nwho visit your profile.',
        school: 'School',
        courseTitle: {
          title: 'Course Title',
          placeholder: 'Name of the course',
          options: [ 'Bachelor', 'Undergraduate Degree' ],
        },
        degree: {
          title: 'Degree',
          placeholder: 'Ex: Bachelor',
        },
        about: {
          title: 'Description',
          placeholder: 'Tell us about your experience in this institution',
        },
        fieldOfStudy: 'Field of study',
        institution: 'Institution',
        from: 'From',
        to: 'To',
        addMore: 'ADD MORE',
        continue: 'CONTINUE',
        placeholders: {
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
    new: {
      techSkills: {
        inputHint: 'Select the skills according to your years of experience',
      },
    },
    revise: 'Revise your CV!',
    edit: 'You will be able to edit it at any time',
    post: 'Post CV',
    aboutMe: 'About me',
    workExperience: 'Work experience',
    education: 'Education',
    skills: 'Skills',
    techSkills: 'Tech skills',
    softSkills: 'Soft skills',
    langSkills: 'Language skills',
  },
  user: {
    findMe: 'Where to find me',
    githubSignup: 'Sign up with Github',
    linkedInSignup: 'Sign up with LinkedIn',
    dashboard: {
      greeting: 'Hi,',
      actions: {
        title: 'What would you like to do today?',
        applications: 'Check on my applications',
        findJobs: 'Search for more jobs',
        editProfile: 'Edit my profile',
        manageCoins: 'Manage system coins',
      },
      editCV: 'Edit my CV',
      registerCV: 'Register my CV',
      registerCVNow: 'Register my CV now',
      skipStep: 'Skip this step',
      doItLater: 'Do it later',
      manageAccount: 'Manage Account',
      manageAccountInfo: 'Manage my account information',
      tests: 'Test your skills',
      tokenExplanation:
        'You get 1 Vogel for each time you log in on different days. Every time you apply to a position, you spent 1 Vogel.',
    },
    gotToDashboard: 'Go to Dashboard',
    applications: {
      title: 'Your applications',
      returnToDashboard: 'Return to dashboard',
      actions: {
        findJobs: 'Search for more jobs',
        editProfile: 'Edit my profile',
        manageCoins: 'Manage system coins',
        manageAccountInfo: 'Manage my account information',
      },
      job: {
        period: 'Applied one day ago | Applied %{count} days ago',
      },
      noJobsApplied: {
        title: 'You haven’t applied to any jobs yet.',
        text1:
          'Once you do, they will be displayed here and you’ll be able to check on their status and get feedback from recruiters.',
        text2: 'Remember to register your CV before you start applying!',
      },
    },
    settings: {
      title: 'Settings',
      subtitle: 'Change your account and payment settings.',
      buttons: [ 'Account', 'Password', 'Company' ],
    },
    onboarding: {
      title: 'Welcome to Tech Vogel',
      description:
        'Here, you\'ll find ads for remote job positions in tech. We value your experience and want to make it the best it can be, so any feedback you\'d like to give us is appreciated, just click the Feedback tab on the right of your screen!\n\n\nLearn more about how the platform works below:',
      skip: 'Skip first look',
      data: [
        {
          title: 'Sobre os 15 vogels',
          subtitle:
            'Vogels are how you’ll be able to keep track of how many jobs you’ve applied to. For everyday you log into Tech Vogel from now on, you will receive 1 more Vogel!',
        },
        {
          title: 'Clear and straight-to-the-point job ads',
          subtitle:
            'Companies on Tech Vogel are required to fill out their job ad with every detail about the position, including compensation, perks and much more!',
        },
        {
          title: 'Two-clicks application process',
          subtitle:
            'After you register your CV, you will be able to apply to jobs just with two clicks. No forms, no uploads, just clicks!',
        },
        {
          title: 'No-nonsense feedback',
          subtitle:
            'When you apply through Tech Vogel, you’ll never be left hanging. After the job ad finishes running, you will know in up to 1 day if you were included on the report to the company.',
        },
      ],
    },
    passwordReset: {
      title: 'Password reset',
      description: 'Insert your email to confirm your password change',
      confirmationCode: 'Confirmation code',
    },
    getAccessCode: {
      title: 'Access code',
      description: 'Insert your email to get the access code',
    },
    github: {
      stats: 'Github Stats',
      publicRepo: 'Public Repositories',
      contributions: 'Contributions in the last year',
      forkedRepo: 'Forked Repositories',
      starsCount: 'Stars Count',
      confirmAuth: 'Confirm GitHub authorization?',
    },
    skills: 'Skill',
    yearsExperience: 'Years of Experience',
    account: {
      delete: {
        title: 'Are you sure you want to delete your account?',
        subtitle: 'Something to put here',
        text: 'Delete my account',
      },
    },
  },
};
