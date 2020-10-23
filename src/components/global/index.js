import Vue from 'vue';

import FormInput from './FormInput';
import GCard from './GCard';
import GCardHeader from './GCardHeader';
import GButton from './Button';
import GCombobox from './GCombobox';
import GBootstrap from './GBootstrap';
import GAutoComplete from './GAutoComplete.vue';
import text from './Text';

[
  ...text,
  FormInput,
  GCard,
  GCardHeader,
  GButton,
  GCombobox,
  GBootstrap,
  GAutoComplete,
].forEach(
  component => {
    Vue.component(component.name, component);
  },
);
