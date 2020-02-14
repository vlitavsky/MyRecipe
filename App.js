import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LandingScreen from './src/Screens/LandingScreen';
import SearchScreen from './src/Screens/SearchScreen';
import DetailScreen from './src/Screens/DetailScreen';

const navigator = createStackNavigator(
  {
    Home: LandingScreen,
    Search: SearchScreen,
    Detail: DetailScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: '',
      headerStyle: {
        backgroundColor: 'transparent',
      },
      headerTransparent: true,
      headerTintColor: '#fff'
    },
    
  }
)
export default createAppContainer(navigator);