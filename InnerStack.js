import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './HomeScreen';
import SignatureScreen from './Page5Screen';

const InnerStack = createStackNavigator({
  Home: HomeScreen,
  SignatureScreen
})

export default InnerStack;