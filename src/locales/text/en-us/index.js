import bigText from './bigText';
import company from './company';
import job from './job';
import others from './others';
import unlogged from './unlogged';
import user from './user';
import enums from './enums';
import common from './common';
import toast from './toast/index';
import skills from './skills';

export default {
  ...common,
  ...bigText,
  ...company,
  ...job,
  ...others,
  ...unlogged,
  ...user,
  ...enums,
  ...skills,
  ...toast,
};
