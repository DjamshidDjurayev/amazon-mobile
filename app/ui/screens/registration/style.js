import EStyleSheet from 'react-native-extended-stylesheet';
import colors from '../../../colors';

const styles = EStyleSheet.create({
  rootView: {
    flex: 1,
    backgroundColor: colors.ultra_light_gray,
  },
  container: {
    flex: 1,
    backgroundColor: colors.ultra_light_gray,
  },
  contentContainer: {
  },
  loginText: {
    alignSelf: 'center',
    marginTop: '26rem',
    marginBottom: '20rem',
  },
  orContainer: {
    marginTop: '26rem',
    marginBottom: '20rem',
    justifyContent:'center', alignItems:'center'
  },
  orText: {
    backgroundColor: colors.ultra_light_gray,
    paddingLeft: '16rem',
    paddingRight: '16rem',
  },
  line: {
    height: '0.5rem',
    backgroundColor: colors.divider,
    position: 'absolute',
    left: 0,
    right: 0,
  },
  socialsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    backgroundColor: colors.green,
    borderRadius: '80rem',
    marginLeft: '10rem',
    marginRight: '10rem',
    height: '42rem',
    width: '42rem',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signUpContainer: {
    alignSelf: 'center',
    marginTop: '22rem',
    marginBottom: '22rem',
    flexDirection: 'row',
  },
  signUpText: {
    marginLeft: '4rem',
  },
  loginInput: {
    fontSize: "15rem",
    fontWeight: 'normal',
    backgroundColor: colors.white,
    borderRadius: '8rem',
  },
  registrationButton: {
    marginTop: '20rem',
    marginBottom: '20rem',
  },
});

export default styles
