import EStyleSheet from 'react-native-extended-stylesheet';
import colors from '../../../../colors';

const styles = EStyleSheet.create({
  rootView: {
    flex: 1,
    backgroundColor: colors.ultra_light_gray,
  },
  container: {
    flex: 1,
    backgroundColor: colors.ultra_light_gray,
  },
  headerContainer: {
    backgroundColor: colors.green,
    padding: '16rem',
  },
  logoContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  langContainer: {
    flex: 0.4,
    alignItems: 'flex-end',
  },
  logo: {
    flex: 0.6,
  },
  mainSearchView: {
    marginTop: '20rem'
  },
  sliderContainer: {

  },
  slider: {
    height: '160rem',
  }
});

export default styles
