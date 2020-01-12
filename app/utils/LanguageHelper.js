export default {
  getDefaultLanguage: () => 'ru',
  getFullLanguage: (shortLang) => {
    if (shortLang === 'ru') {
      return 'Русский'
    }
    return 'English'
  },
}
