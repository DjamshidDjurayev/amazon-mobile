import React from 'react'
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign'
import colors from '../colors';
import EStyleSheet from 'react-native-extended-stylesheet';

import SplashScreen from '../ui/screens/splash/SplashScreen';
import LoginScreen from '../ui/screens/login/LoginScreen'
import RegistrationScreen from '../ui/screens/registration/RegistrationScreen'
import OrderCheckoutScreen from '../ui/screens/order/checkout/OrderCheckoutScreen';
import AddAddressScreen from '../ui/screens/order/address/AddAddressScreen'
import HomeScreen from '../ui/screens/main/home/HomeScreen';
import ProfileScreen from '../ui/screens/main/profile/ProfileScreen';
import CatalogScreen from '../ui/screens/main/catalog/CatalogScreen';
import CartScreen from '../ui/screens/main/cart/CartScreen';

const TabBarComponent = (props) => (<BottomTabBar {...props} />);

const renderNav = (routeName, name, tintColor, focused) => {
  return <AntDesign name={name} size={25} color={tintColor} />
};

const tabs = ({ navigation }) => ({
  tabBarIcon: ({ focused, horizontal, tintColor }) => {
    const { routeName } = navigation.state;
    if (routeName === 'Home') {
      return renderNav(routeName, 'home', tintColor, focused)
    } else if (routeName === 'Catalog') {
      return renderNav(routeName, 'barschart', tintColor, focused)
    } else if (routeName === 'Cart') {
      return renderNav(routeName, 'shoppingcart', tintColor, focused)
    } else if (routeName === 'Profile') {
      return renderNav(routeName, 'user', tintColor, focused)
    }
  },
});

const MainBottomNavigator = createBottomTabNavigator(
  {
    Home: {screen: HomeScreen},
    Catalog: {screen: CatalogScreen},
    Cart: {screen: CartScreen},
    Profile: {screen: ProfileScreen},
  },
  {
    defaultNavigationOptions: tabs,
    animationEnabled: true,
    swipeEnabled: true,
    initialRouteName: 'Home',
    tabBarComponent: props => (
      <TabBarComponent
        {...props}
        style={styles.tabBar} />
    ),
    tabBarOptions: {
      activeTintColor: colors.green,
      inactiveTintColor: colors.light_gray,
      showLabel: false,
      showIcon: true,
    },
  }
  );

export const MainNavigator = createStackNavigator({
  Splash: {screen: SplashScreen},
  Login: {screen: LoginScreen},
  Registration: {screen: RegistrationScreen},
  OrderCheckout: {screen: OrderCheckoutScreen},
  AddAddress: {screen: AddAddressScreen},
  Main: {
    screen: MainBottomNavigator,
    navigationOptions: {
      header: null
    }
  },
});

const styles = EStyleSheet.create({
  tabBar: {
    shadowColor: colors.white,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 15,
    elevation: 22,
    borderTopColor: colors.white,
    backgroundColor: colors.white,
    borderTopLeftRadius: '20rem',
    borderTopRightRadius: '20rem',
    position: 'absolute',
  }
});

const AppNavigator = createAppContainer(MainNavigator);

export default AppNavigator;
