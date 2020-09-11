import Vue from 'vue';
import FormInput from './FormInput';

[FormInput].forEach(component => {
  Vue.component(component.name, component);
});
