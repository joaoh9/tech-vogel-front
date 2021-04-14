export default {
  job: {
    new: {
      basicInfo: {
        title: 'Basic information',
        description:
          'These are the basics about the position you are advertising. This information will be visible to everyone on Tech Vogel.',
      },
      jobTitle: {
        title: 'Job Title',
        inputHint: 'This should be concise and clear.',
      },
      id: {
        title: 'Your custom URL',
        description: 'this will be the url you use to spread your job opening',
        inputHint: 'http://techvogel.com/jobs/{company}/{id}',
      },
      experienceLevel: {
        title: 'Experience Level',
        inputHint: 'Select the experience level you expect applicants to have.',
        label: 'Select',
      },
      contractType: {
        title: 'Contract Type',
        inputHint: 'This should let applicants know how they will potentially be hired.',
        label: 'Select',
      },
      aboutTheRole: {
        title: 'About the role',
        title2: 'Describe the role',
        placeholder:
          'Let potential applicants know what this job position entails. This information will be visible to everyone on Tech Vogel.',
      },
      languages: {
        title: 'Language(s)',
        inputHint: 'Language',
      },
      skillRequirements: {
        title: 'Skill requirements',
        description:
          'Select the skills you’re looking for in your new employee. This information will be visible to everyone on Tech Vogel.',
      },
      techSkills: {
        title: 'Tech skills',
        description:
          'You can select programming languages, frameworks and knowledge areas. We will match this selection to applicant CVs and include the top matches in your Candidate Report.',
        inputHint: 'Type the skill you wish to include above.',
      },
      otherSkills: {
        title: 'Other skills',
        description:
          'You can select soft skills and languages. We will also match this selection to applicant CVs and include the top matches in your Candidate Report.',
        inputHint: 'Type the skill you wish to include above.',
      },
      softSkills: {
        title: 'Soft Skills',
        inputHint: 'Select {max} skills maximum.',
      },
      language: {
        title: 'Language',
        inputHint: 'Select the language and fluency level.',
      },
      salaryAndPerks: {
        title: 'Salary and perks',
        description:
          'Potential applicants want to know the compensation offered for the jobs they are applying to. If you do not wish to disclose this information, this requirement can be waived by paying a $49 fee. This information will be visible to everyone on Tech Vogel.',
      },
      salary: {
        title: 'Salary',
      },
      labels: {
        paymentCurrency: 'Payment currency',
        timeFrame: 'Time Frame',
      },
      price: 'Price',
      salaryRange: 'Set salary range',
      perks: {
        title: 'Additional perks',
        placeholder:
          'Working at Criptorocket you can expect to have:\n  - Gym pas\n  - Food stamp\n  - Free Netflix\n  - A pationate team ready to rock ',
      },
      steppers: ['Basic information', 'Role description', 'Skill requirements', 'Salary and perks'],
    },

    details: {
      description: 'Job details',
      perks: 'Perks and benefits',
      apply: 'Apply for this position',
      alreadyApplied: 'Arleady applied!',
      managedBy: 'Job managed by {user}',
      aboutTheCompany: 'About the company',
    },
    apply: {
      title: 'Are you sure you want to apply for this position?',
      subtitle:
        'This application will cost you 1 Vogel. You can get more Vogels by visiting Tech Vogel every 24 hours!',
      btnType: 'primary',
      btnText: 'Apply for this position!',
    },
    applicationConfirmed: {
      title: 'Your application was submitted!',
      subtitle:
        'If your skills are a good match for the requirements in this position, {companyName} might contact you to continue the selection process. Keep an eye on your email inbox!',
      btnType: 'secondary',
      btnText: 'browse more jobs',
      jobType: {
        title: 'Fully Remote',
      },
    },
    confirmJob: {
      title: 'Review your job ad!',
      subtitle: 'You will only be able to edit it for 24 hours after posting.',
    },
    delete: {
      title: 'Are you sure you want to delete this job?',
      subtitle:
        'There is no turning back after you confirm the deletion! All job data will be lost!',
      btnType: 'error',
      btnText: 'Confirm deletion',
    },
    posted: 'Posted',
    seeReport: 'See report',
    timePosted: 'Posted {time}',
    selectAtLeast: 'Please select at least {min} {skillName}',
    selectMaximum: 'Please select a maximum of {max} {skillName}',
    see: 'See Job >',
    edit: 'Edit Job',
    remove: 'Remove Job',
    list: 'Go to Job List',
  },
};
