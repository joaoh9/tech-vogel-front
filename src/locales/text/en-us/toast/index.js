export default {
  toast: {
    error: {
      fileExceeds: 'File {filename} exceeds {fileSize} MB limit',
      fileProcessWrong: 'There was something wrong when processing the file {filename}',
      companyInfo: 'Could not retrieve company info. Make sure you have a registered company',
      companyInfoLogged: 'Could not retrieve company info. Please make sure you are logged in',
      jobApplying: 'An error occured when applying for this job',
      getCompany: 'Something went wrong when getting company info for a job',
      retrieveJob: 'An error occured when retrieving jobs from the database',
      retrieveCompany: 'Could not retrieve company info from database',
      retrieveUser: 'Could not retrieve user info. Please login again',
      retrieveAppliedJobs: 'Something went wrong when retrieving applied jobs',
      retrieveCompanyInfo: 'An error has occurred when retrieving company information on a job',
      retrieveUserData: 'Something went wrong when retrieving user {userId} data',
      retrieveUserResume: 'Something went wrong when retrieving user resume {userId} data',
      companyData: 'Something went wrong when retrieving company {companyId} data',
      jobData: 'Something went wrong when retrieving job {jobId} data',
      saveCompany: 'An error occurred when saving the company',
      saveResume: 'There was an error saving your resume',
      writeNames: 'Please write the company name and a description',
      saveJob: 'There was an error when saving the job',
      jobList: 'Something went wrong when retrieving the jobs from the Database',
      registeredCompany: 'You must have a registered company in order to post a job!',
      githubRetrieve: 'Something went wrong when retrieving your github data',
      userOrPassword: 'Please insert a correct email or password',
      notAllowed: 'You are not allowed to access this page',
      loginFailed: 'Something went wrong on your login',
      somethingWrong: 'Something went wrong. Try again later',
      fillOut: 'Please fill out fields correctly',
      userNotFound: 'User not found',
      incorrectInternalKey: 'Incorrect code',
    },
    success: {
      jobApplied: 'Successfully applied for job',
      logout: 'Logout successful',
      savedCompany: 'Company saved successfully',
      savedResume: 'Resume saved successfully',
      jobSaved: 'Job saved successfully',
      jobEdit: 'Job edited successfully',
      githubRetrieve: 'Github data retrieved successfully!',
      closeTab: 'You can close this tab and retry your request on the other page',
      emailConfirmation: 'Email confirmed successfully!',
      passwordResetEmailSent: 'Passoword reset email sent!',
    },
    info: {
      USER_NOT_CONFIRMED: 'User not confirmed yet!',
      sessionExpired: 'Your session has expired. Please login again',
      retrieveProfilePicture: 'Error when retrieving profile picture',
      senior: 'Attention! You may receive less applications for a senior position!',
      userAlreadyConfirmed: 'User already confirmed!',
      // senior: 'Attention! There might not be that many applications for a senior job',
    },
    warning: {
      confirmationCode: 'Invalid confirmation code!',
      fillAll: 'You should fill all required information!',
      detailedInfo: 'Please give to your applicants a more detailed information about your job',
      emailRegistered: 'Email already registered',
      nameGreater: 'Name must be greater than 3 characters',
      emailValidation: 'Email and confirmation must be equals',
      passwordValidation: 'Password and confirmation must be equals',
      imageFileFormat: 'Only .jpeg, .jpg and .png file formats!',
    },
    open: {
      login: 'Login successful',
    },
  },
};
