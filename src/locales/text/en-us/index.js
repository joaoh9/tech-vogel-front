import bigText from './bigText';
import company from './company';
import job from './job';
import others from './others';
import unlogged from './unlogged';
import user from './user';
import enums from './enums';
import skill from './skills';
import common from './common'

export default {
  ...common,
  ...bigText,
  ...company,
  ...job,
  ...others,
  ...unlogged,
  ...user,
  ...enums,
  ...skill,
};
