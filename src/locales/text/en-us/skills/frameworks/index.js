const aspNet = require('./asp-net.json');
const cpp = require('./cpp.json');
const css = require('./css.json');
const java = require('./java.json');
const js = require('./js.json');
const perl = require('./perl.json');
const php = require('./php.json');
const py = require('./py.json');
const ruby = require('./ruby.json');

function skillValueFormat(skillArray) {
  return Object.entries(skillArray).map(([ skillId, text ]) => ({
    text,
    value: { skillId, experienceLevel: 0 },
  }));
}

const formated = {
  aspNet: skillValueFormat(aspNet),
  cpp: skillValueFormat(cpp),
  css: skillValueFormat(css),
  java: skillValueFormat(java),
  js: skillValueFormat(js),
  perl: skillValueFormat(perl),
  php: skillValueFormat(php),
  py: skillValueFormat(py),
  ruby: skillValueFormat(ruby),
};

let all = [];

Object.values(formated).forEach(value => {
  all = all.concat(value);
});

module.exports =  {
  formated,
  all,
  dictionary: {
    ...aspNet,
    ...cpp,
    ...css,
    ...java,
    ...js,
    ...perl,
    ...php,
    ...py,
    ...ruby,
  },
};
