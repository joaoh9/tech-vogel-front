export default {
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
          title: 'Add a profile picture',
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
  User: {
    register: {
      page1: {
        title: 'Register to apply for jobs',
      },
      fullName: {
        title: 'Full name',
      },
      email: {
        title: 'Email',
      },
      username: {
        title: 'Username',
      },
      password: {
        title: 'Password',
      },
      confirmPassword: {
        title: 'Confirm password',
      },
      page2: {
        title: 'Confirmation',
      },
      pageSubtitle: {
        title: 'An access code was sent to your registered email',
      },
      accessCode: {
        title: 'Access code',
      },
      accessCodeHelper: {
        title: 'Didn\'t get your access code? Click here',
      },
      page3: {
        title: 'Welcome to Tech Voguel',
      },
    },
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
    },
  },
};
