import EStyleSheet from 'react-native-extended-stylesheet';
import colors from '../../../../utils/colors';

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
  gridView: {
    flex: 1
  },
  gridColumn: {
    marginTop: '6rem',
    marginBottom: '6rem',
    alignItems: 'center',
  },
  emptyViewContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingViewContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
});

export default styles
