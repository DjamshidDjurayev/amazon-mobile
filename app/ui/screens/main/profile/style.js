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
  profileEditContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '18rem',
    marginBottom: '18rem',
    backgroundColor: colors.white,
    paddingLeft: '14rem',
    paddingTop: '14rem',
    paddingBottom: '14rem',
    borderRadius: '16rem',
  },
  rightIcon: {
    marginRight: '8rem',
  },
  nameContainer: {
    flex: 1,
  },
  profileImage: {
    width: '60rem',
    height: '60rem',
    borderRadius: '30rem',
    marginRight: '14rem',
  },
  myCouponsContainer: {
  },
  ordersAndFavoritesContainer: {
    marginTop: '18rem'
  },
  profileSettingsContainer: {
    marginTop: '18rem',
    marginBottom: '100rem'
  },
  avatarPlaceholder: {
    width: '60rem',
    height: '60rem',
    borderRadius: '30rem',
    marginRight: '14rem',
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default styles
