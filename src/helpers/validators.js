module.exports = {
  email: (value) => {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return pattern.test(value) || 'Invalid e-mail.'
  },
  required: value => !!value || 'Required.',
  minCounter: (value, counter = 5) => value.length >= counter || `Minimum ${counter} characters`,
  maxCounter: (value, counter = 5) => value.length >= counter || `Maximum ${counter} characters`,
};
