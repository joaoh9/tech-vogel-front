class Rules {
  constructor(locale) {
    this.$t = locale;
  }

  required(value) {
    return value || this.$t('Field Required.');
  }

  maxCounter(value, counter = 5) {
    return value.length >= counter || `Maximum ${counter} characters`;
  }

  name(v) {
    return v.length > 3 || this.$t('Rules.nameTooShort');
  }

  email(em) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/;

    return re.test(em) || this.$t('Rules.wrongFormatEmail');
  }

  min(min, v) {
    return (
      (v ? v.length > min : this.$t('Rules.lessThanXCharacters').replace('X', min)) ||
      this.$t('Rules.lessThanXCharacters').replace('X', min)
    );
  }

  validateLetterOrNumber(letter) {
    const c = letter.charCodeAt(0);

    return (c >= 48 && c <= 57) || (c >= 65 && c <= 90) || (c >= 97 && c <= 122);
  }

  lettersAndNumbers(t) {
    return (
      t.split('').filter(letter => !this.validateLetterOrNumber(letter)).length == 0 ||
      this.$t('Rules.letterOrNumber')
    );
  }

  equal(x, y) {
    return x === y || this.$t('Rules.passwordsDontMatch');
  }
}

export default Rules;
