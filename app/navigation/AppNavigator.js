import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SplashScreen from '../ui/screens/splash/SplashScreen';
import LoginScreen from '../ui/screens/login/LoginScreen'
import RegistrationScreen from '../ui/screens/registration/RegistrationScreen'
import OrderCheckoutScreen from '../ui/screens/order/checkout/OrderCheckoutScreen';
import AddAddressScreen from '../ui/screens/order/address/AddAddressScreen'

export const MainNavigator = createStackNavigator({
  Splash: {screen: SplashScreen},
  Login: {screen: LoginScreen},
  Registration: {screen: RegistrationScreen},
  OrderCheckout: {screen: OrderCheckoutScreen},
  AddAddress: {screen: AddAddressScreen}
});

const AppNavigator = createAppContainer(MainNavigator);

export default AppNavigator;
