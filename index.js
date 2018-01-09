import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import Routers from './src/routers/Routers.js'
import Store from './src/store/Store.js';

Routers(Store, Provider)

Navigation.startSingleScreenApp({
  screen: {
    screen: 'HomeViewContainer',
    title: 'Home View',
    navigatorStyle: {},
    navigatorButtons: {}
  }
});
