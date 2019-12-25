import {connect} from 'react-redux';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SplashScreen from '../screens/splash/SplashScreen';

export const MainNavigator = createStackNavigator({
  Splash: {screen: SplashScreen},
});

const AppNavigator = createAppContainer(MainNavigator);

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppNavigator);
