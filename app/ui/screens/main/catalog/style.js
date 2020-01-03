import EStyleSheet from 'react-native-extended-stylesheet';
import colors from '../../../../colors';

const styles = EStyleSheet.create({
  rootView: {
    flex: 1,
    backgroundColor: colors.ultra_light_gray,
    paddingBottom: '50rem'
  },
  container: {
    flex: 1,
    backgroundColor: colors.ultra_light_gray,
  },
  headerTitle: {
    marginLeft: '18rem',
    marginRight: '18rem',
    marginTop: '14rem',
    marginBottom: '6rem',
  },
  gridColumn: {
    marginTop: '6rem',
    marginBottom: '6rem',
    alignItems: 'center',
  }
});

export default styles
