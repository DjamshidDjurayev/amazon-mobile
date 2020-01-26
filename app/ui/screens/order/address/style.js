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
  contactInfoContainer: {
    backgroundColor: colors.white,
    padding: '16rem',
    borderRadius: '14rem',
    marginTop: '20rem',
    marginBottom: '12rem'
  },
  deliveryAddressContainer: {
    backgroundColor: colors.white,
    padding: '16rem',
    borderRadius: '14rem',
    marginTop: '12rem',
    marginBottom: '16rem'
  },
  input: {
    borderWidth: 0.5,
    borderColor: colors.gray_D6,
    borderRadius: '6rem',
    paddingLeft: '12rem',
    paddingRight: '12rem',
    paddingTop: '16rem',
    paddingBottom: '16rem',
    marginTop: '6rem',
  },
  saveButton: {
    marginBottom: '20rem',
    marginTop: '20rem',
  },
});

export default styles
