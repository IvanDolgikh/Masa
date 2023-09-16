import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import {CustomSelect} from './select/custom-select';
import './menu';
import './vendor';
import './sliders';
import './map';
import {initAccordions} from './accordion/init-accordion';
import './accordion/accordion-states';
import './news-filter';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    const form = new Form();
    const select = new CustomSelect();
    window.form = form;
    select.init();
    form.init();
    initAccordions();
  });
});
