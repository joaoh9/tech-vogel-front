import bigText from './bigText';
import company from './company';
import job from './job';
import others from './others';
import unlogged from './unlogged';
import user from './user';

export default {
  ...bigText,
  ...company,
  ...job,
  ...others,
  ...unlogged,
  ...user,
};
