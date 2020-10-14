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
    t = t.replace(/\./g, '-');
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

const example = [
  'Algolia Places',
  'AOS – Animate On Scroll',
  'Bideo.js',
  'Cleave.js',
  'Granim.js',
  'Omniscient',
  'Premonish',
  'Slick',
  'Shave',
  'TypeScript',
  'anime.js',
  'Chart.js',
  'D3.js',
  'Glimmer',
  'Multiple',
  'Parsley',
  'Popper.js',
  'ReactJS',
  'TaffyDB',
  'Twee',
  'Three.js',
  'Voca',
  'Aurelia',
  'Angular',
  'Ember',
  'Mocha',
  'Next.js',
  'Vue.js',
  'Webix',
  'Babel',
  'ESLint',
  'Gatsby',
  'Meteor',
  'Poly',
  'StencilJS',
  'Webp',
];

example.forEach(element => {
  console.log(t.toCammelCase(element));
});
