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
        inputHint: 'TODO',
      },
      contractType: {
        title: 'Contract Type',
        inputHint: 'This should let applicants know how they will potentially be hired.',
      },
      aboutTheRole: {
        title: 'About the role',
        description:
          'Describe in a captivating way what that professional role will be. And talk about the project itself so that candidates can see if they are fit for the Job or not.',
        placeholder: 'At this position your job will be...',
      },
      languages: {
        title: 'Language(s)',
        inputHint: 'TODO',
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
        inputHint: 'Soft skills have a lower weigth on your matches',
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
      perks: {
        title: 'Perks and Benefits',
        placeholder: 'Working at Criptorocket you can expect to have:\n  - Gym pas\n  - Food stamp\n  - Free Netflix\n  - A pationate team ready to rock ',
      },
      steppers: [ 'Basic information', 'Role description', 'Skill requirements', 'Salary and perks' ],
    },

    details: {
      apply: 'Apply for this position',
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
      title: 'Revise your job ad!',
      subtitle: 'You will only be able to edit it for 24 hours after posting.',
    },
    posted: 'Posted',
    seeReport: 'See report',
    timePosted: 'Posted {time}',
    selectAtLeast: 'Please select at least',
    selectMaximum: 'Please select a maximum of',
  },
};
