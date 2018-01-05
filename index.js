import { Navigation } from 'react-native-navigation';
import { AppRegistry } from 'react-native';
import HomeView from './src/components/screens/HomeView.js'
import DetailView from './src/components/screens/DetailView.js'
import Routers from './src/routers/Routers.js'

Routers()

//AppRegistry.registerComponent('demo_react_native', () => HomeView);

Navigation.startSingleScreenApp({
  screen: {
    screen: 'HomeView',
    title: 'HomeView',
    navigatorStyle: {},
    navigatorButtons: {}
  }
});
