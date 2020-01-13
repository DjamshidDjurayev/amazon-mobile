export default {
  getDefaultLanguage: () => 'ru',
  getFullLanguage: (shortLang) => {
    if (shortLang === 'ru') {
      return 'Русский'
    } else if (shortLang === 'uz') {
      return `O'zbekcha`
    }
    return 'English'
  },
}
