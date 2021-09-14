import Vue from 'vue';

import GButton from './Button';
import FormInput from './FormInput';
import GCard from './GCard';
import GCardHeader from './GCardHeader';
import GCardOutlined from './GCardOutlined';
import text from './Text';

[
  ...text,
  FormInput,
  GCard,
  GCardHeader,
  GButton,
  GCardOutlined,
].forEach(
  component => {
    Vue.component(component.name, component);
  },
);
