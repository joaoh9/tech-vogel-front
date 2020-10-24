export default {
  resume: {
    register: {
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
        description: 'TODO',
        linkLinkedIn: {
          title: 'Link your LinkedIn account',
        },
        linkGithub: {
          title: 'Link your GitHub Account',
        },
        registerManually: {
          title: 'Register CV Manually',
        },
      },
      mainRole: {
        title: 'Your main role as a developer',
        placeholder: 'Ex: Junior Full Stack Developer',
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
          title: 'Upload your profile picture',
          specifics: 'Maximum size: 200 x 200px\nFile format: .jpg or .png',
        },
      },
      workExperience: {
        title: 'Share your work experience',
        description: 'You’ll be able to edit this or add more information later on.',
        company: {
          title: 'Company Name',
        },
        position: 'Your position',
        myJob: {
          options: ['This is my current job'],
        },
        jobDescription: {
          title: 'Description',
          placeholder: 'TODO',
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
  user: {
    dashboard: {
      greeting: 'Hi,',
      actions: {
        title: 'What would you like to do today?',
        applications: 'Check on my applications',
        findJobs: 'Search for more jobs',
        editProfile: 'Edit my profile',
        manageCredits: 'Manage credits',
      },
      registerCV: 'Register my CV',
      registerCVNow: 'Register my CV now',
      skipStep: 'Skip this step',
      doItLater: 'Do it later',
      manageAccountInfo: 'Manage my account information',
    },
    applications: {
      title: 'Your applications',
      returnToDashboard: 'Return to dashboard',
      actions: {
        findJobs: 'Search for more jobs',
        editProfile: 'Edit my profile',
        manageCredits: 'Manage credits',
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
      buttons: [
        { text: 'Account', icon: 'far fa-user' },
        { text: 'Password', icon: 'fas fa-lock' },
        { text: 'Payment', icon: 'far fa-credit-card' },
      ],
    },
  },
  onboarding: {
    welcome: {
      title: 'Welcome to Tech Vogel',
      secondTitle: 'We’re happy you’re here!',
      subtitle: 'Start your journey towards the freedom of remote work by registering your CV.',
    },
    welcome2: {
      title: 'Are you sure you don’t want to register your CV now?',
      subtitle:
        'Filling out your CV information now will enable you to quickly apply to any position you are interested in and will allow us to show you positions that best fit your profile and skills!',
    },
  },
};
