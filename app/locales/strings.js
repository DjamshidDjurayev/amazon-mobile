import LocalizedStrings from 'react-native-localization';
import ruLocale from './ru';
import enLocale from './en';
import uzLocale from './uz';

const strings = new LocalizedStrings({
  ru: ruLocale,
  en: enLocale,
  uz: uzLocale,
});

export default strings;
