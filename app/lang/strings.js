import LocalizedStrings from 'react-native-localization';
import ruLocale from './ru';
import enLocale from './en';

const strings = new LocalizedStrings({
  ru: ruLocale,
  en: enLocale,
});

export default strings;
