import EStyleSheet from 'react-native-extended-stylesheet';
import colors from '../../../../../utils/colors';

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
    marginTop: '12rem',
    marginBottom: '12rem',
  },
  backButtonContainer: {
    height: '50rem',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    paddingLeft: '16rem',
    paddingRight: '16rem',
  },
  searchContainer: {
    flex: 1,
    marginRight: '16rem',
  },
  emptyViewContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '52rem'
  },
  categoryTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: '3rem',
  },
  search: {
    height: '52rem',
  }
});

export default styles
