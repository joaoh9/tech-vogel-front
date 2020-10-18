class Rules {
  constructor(localeObj) {
    this.localeObj = localeObj;
  }

  required(v) {
    return v ? true : this.localeObj['Rules']['requiredField'];
  }

  maxCounter(v, counter = 5) {
    return (
      v.length >= counter ||
      this.localeObj['Common']['maximum'] +
        counter.toString() +
        this.localeObj['Common']['characters'].toLowerCase()
    );
  }

  name(v) {
    return v.length > 3 || this.localeObj['Rules']['nameTooShort'];
  }

  isNumber(v) {
    try {
      const x = parseFloat(v);
      if (isNaN(x)) {
        return this.localeObj['Rules']['notNumber'];
      }

      return true;
    } catch (e) {
      return this.localeObj['Rules']['notNumber'];
    }
  }

  email(v) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/;

    return re.test(v) || this.localeObj['Rules']['wrongFormatEmail'];
  }

  min(min, v) {
    return v ? v.length > min : this.localeObj['Rules']['lessThanXCharacters'].replace('X', min);
  }

  validateLetterOrNumber(letter) {
    const c = letter.charCodeAt(0);

    return (c >= 48 && c <= 57) || (c >= 65 && c <= 90) || (c >= 97 && c <= 122);
  }

  onlyNumber(c) {
    const allNumbers = c
      .toString()
      .split('')
      .every(n => n.charCodeAt(0) >= 48 && n.charCodeAt(0) <= 57);
    return allNumbers || this.localeObj['Rules']['onlyNumber'];
  }

  year(value) {
    if (value.toString().length === 4) {
      value = parseInt(value);
      if (value <= new Date().getFullYear() && value >= 1970) {
        return true;
      } else {
        return this.localeObj['Rules']['yearOutOfRange'];
      }
    } else {
      return this.localeObj['Rules']['yearValidation'];
    }
  }

  lettersAndNumbers(t) {
    return (
      t.split('').filter(letter => !this.validateLetterOrNumber(letter)).length == 0 ||
      this.localeObj['Rules']['letterOrNumber']
    );
  }

  equalEmail(x, y) {
    return x === y || this.localeObj['Rules']['emailsDontMatch'];
  }

  equalPassword(x, y) {
    return x === y || this.localeObj['Rules']['passwordsDontMatch'];
  }
}

export default Rules;
