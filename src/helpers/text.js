class T {
  toCammelCase(text) {
    if (this.allUpperCase(text)) {
      return text;
    }

    let t = this.firstLetterUpper(text);
    t = t.replace(/([–?=:${}()|[\]/\\])/g, '');
    t = t.replace(/\*/g, 'Start');
    t = t.replace(/#/g, 'Sharp');
    t = t.replace(/-/g, 'Minus');
    t = t.replace(/\./g, 'Dot');
    t = t.replace(/\+/g, 'Plus');
    t = t.replace(/([áàãäâ])/g, 'a');
    t = t.replace(/([éèẽëê])/g, 'e');
    t = t.replace(/([íìĩïî])/g, 'i');
    t = t.replace(/([óòõöô])/g, 'o');
    t = t.replace(/([úùũüû])/g, 'u');
    t = t.replace(/´/g, 'DoublePrime');
    t = t.replace(/!/g, '');
    t = t[0].toLowerCase() + t.substr(1);
    return t;
  }

  allUpperCase(text) {
    return text.split('').every(el => el.charCodeAt(0) >= 65 && el.charCodeAt(0) <= 90);
  }

  firstLetterUpper(text) {
    return text
      .split(' ')
      .map(el => {
        const aux = el[0].toUpperCase() + el.substr(1);
        return aux;
      })
      .join('');
  }
}

const t = new T();

const example = [ 'Exemplo Exemplo', 'tes-te' ];

example.forEach(element => {
  console.log(t.toCammelCase(element));
});
