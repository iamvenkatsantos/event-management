import i18next from 'i18next';

import template from '../translation/en';

export type TKeys = keyof typeof template;

declare global {
  function translate(text: TKeys): string;
}
global.translate = function translate(text: TKeys) {
  return i18next.t(text);
};

export default null;
