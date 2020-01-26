import EStyleSheet from 'react-native-extended-stylesheet';
import colors from '../../../utils/colors';

const styles = EStyleSheet.create({
  rootView: {flex: 1},
  container: {
    flex: 1,
    backgroundColor: colors.green,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: colors.white,
    fontSize: '60rem',
    fontWeight: 'bold',
  },
});

export default styles
