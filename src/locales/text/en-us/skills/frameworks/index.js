import aspNet from './asp-net.json';
import cpp from './cpp.json';
import css from './css.json';
import java from './java.json';
import js from './js.json';
import perl from './perl.json';
import php from './php.json';
import py from './py.json';
import ruby from './ruby.json';

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

export default {
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
