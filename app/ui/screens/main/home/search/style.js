import EStyleSheet from 'react-native-extended-stylesheet';
import colors from '../../../../../colors';

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
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '12rem',
    marginBottom: '12rem',
  },
  backButtonContainer: {
  },
  backButton: {
    paddingLeft: '16rem',
    paddingRight: '16rem',
    paddingTop: '10rem',
    paddingBottom: '10rem',
  },
  searchContainer: {
    flex: 1,
    marginRight: '16rem',
  },
  emptyViewContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '50rem'
  },
});

export default styles
