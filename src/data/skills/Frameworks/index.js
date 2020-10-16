import aspNet from './asp-net.json';
import cpp from './cpp.json';
import css from './css.json';
import java from './java.json';
import js from './js.json';
import perl from './perl.json';
import php from './php.json';
import py from './py.json';
import ruby from './ruby.json';

function addKeyPrefix(obj, prefix) {
  Object.keys(obj).forEach(el => {
    obj[prefix + el] = obj[el];
    delete obj[el];
  });

  return obj;
}

function skillValueFormat(skillArray) {
  return Object.entries(skillArray).map(([ skillId, text ]) => ({
    text,
    value: { skillId, experienceLevel: 0 },
  }));
}

export default {
  aspNet: skillValueFormat(addKeyPrefix(aspNet, 'frmwrk-.net-')),
  cpp: skillValueFormat(addKeyPrefix(cpp, 'frmwrk-cpp-')),
  css: skillValueFormat(addKeyPrefix(css, 'frmwrk-css-')),
  java: skillValueFormat(addKeyPrefix(java, 'frmwrk-java-')),
  js: skillValueFormat(addKeyPrefix(js, 'frmwrk-js-')),
  perl: skillValueFormat(addKeyPrefix(perl, 'frmwrk-perl-')),
  php: skillValueFormat(addKeyPrefix(php, 'frmwrk-php-')),
  py: skillValueFormat(addKeyPrefix(py, 'frmwrk-py-')),
  ruby: skillValueFormat(addKeyPrefix(ruby, 'frmwrk-ruby-')),
};
