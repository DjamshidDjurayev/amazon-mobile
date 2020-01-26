import EStyleSheet from 'react-native-extended-stylesheet';
import colors from '../../../../utils/colors';

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
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: '16rem',
    marginTop: '14rem',
  },
  emptyViewContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingViewContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingBottom: '50rem',
  },
});

export default styles
