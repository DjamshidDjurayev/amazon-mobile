import EStyleSheet from 'react-native-extended-stylesheet';
import colors from '../../../../../colors';

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
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '18rem',
    marginBottom: '18rem',
  },
  backButtonContainer: {
    marginLeft: '16rem',
  },
  searchContainer: {
    flex: 1,
    marginLeft: '16rem',
    marginRight: '16rem',
  },
  emptyViewContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles
