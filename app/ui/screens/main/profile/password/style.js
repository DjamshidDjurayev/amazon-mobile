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
    paddingTop: '16rem',
  },
  input: {
    fontSize: "15rem",
    fontWeight: 'normal',
    backgroundColor: colors.white,
    borderRadius: '8rem',
    marginTop: '8rem',
  },
  updateButton: {
    marginTop: '20rem'
  },
});

export default styles
