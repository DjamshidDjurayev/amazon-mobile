import {connect} from 'react-redux';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SplashScreen from '../ui/splash/SplashScreen';
import LoginScreen from '../ui/login/LoginScreen'

export const MainNavigator = createStackNavigator({
  Splash: {screen: SplashScreen},
  Login: {screen: LoginScreen}
});

const AppNavigator = createAppContainer(MainNavigator);

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppNavigator);
