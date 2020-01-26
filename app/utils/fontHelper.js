import {Platform} from 'react-native'

export default {
  fontDefault: Platform.select({
    android: 'Lato-Regular',
    ios: 'Lato-Regular',
  }),
  Lato_Black: Platform.select({
    android: 'Lato-Black',
    ios: 'Lato-Black',
  }),
  Lato_Black_Italic: Platform.select({
    android: 'Lato-BlackItalic',
    ios: 'Lato-BlackItalic',
  }),
  Lato_Bold: Platform.select({
    android: 'Lato-Bold',
    ios: 'Lato-Bold',
  }),
  Lato_Bold_Italic: Platform.select({
    android: 'Lato-BoldItalic',
    ios: 'Lato-BoldItalic',
  }),
  Lato_Italic: Platform.select({
    android: 'Lato-Italic',
    ios: 'Lato-Italic',
  }),
  Lato_Light: Platform.select({
    android: 'Lato-Light',
    ios: 'Lato-Light',
  }),
  Lato_Light_Italic: Platform.select({
    android: 'Lato-LightItalic',
    ios: 'Lato-LightItalic',
  }),
  Lato_Regular: Platform.select({
    android: 'Lato-Regular',
    ios: 'Lato-Regular',
  }),
  Lato_Thin: Platform.select({
    android: 'Lato-Thin',
    ios: 'Lato-Thin',
  }),
  Lato_Thin_Italic: Platform.select({
    android: 'Lato-ThinItalic',
    ios: 'Lato-ThinItalic',
  }),
}
