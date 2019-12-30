import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SplashScreen from '../ui/splash/SplashScreen';
import LoginScreen from '../ui/login/LoginScreen'
import RegistrationScreen from '../ui/login/RegistrationScreen'

export const MainNavigator = createStackNavigator({
  Splash: {screen: SplashScreen},
  Login: {screen: LoginScreen},
  Registration: {screen: RegistrationScreen}
});

const AppNavigator = createAppContainer(MainNavigator);

export default AppNavigator;
