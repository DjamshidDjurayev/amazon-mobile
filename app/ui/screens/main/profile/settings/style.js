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
  settingsHeaderContainer: {
    backgroundColor: colors.white,
    padding: '16rem',
    borderRadius: '16rem',
    marginTop: '18rem',
    alignItems: 'center',
  },
  imageContainer: {

  },
  image: {
    width: '100rem',
    height: '100rem',
    borderRadius: '50rem',
  },
  addImageContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: colors.white,
    width: '38rem',
    height: '38rem',
    borderRadius: '19rem',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4rem',
  },
  addImage: {
    backgroundColor: colors.green,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    borderRadius: '19rem',
  },
  name: {
    marginTop: '10rem',
  },
  personalDataContainer: {
    marginTop: '18rem',
  },
  personalDataTitle: {
    marginLeft: '16rem',
    marginBottom: '16rem',
  },
  changePasswordAndExitContainer: {
    marginTop: '18rem',
    marginBottom: '80rem',
  },
  avatarPlaceholder: {
    width: '100rem',
    height: '100rem',
    borderRadius: '50rem',
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default styles
