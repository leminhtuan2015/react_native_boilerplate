import { Navigation } from 'react-native-navigation';
import { AppRegistry} from 'react-native';
import React from 'react';

import NavigatorViewContainer from './src/containers/NavigatorViewContainer';
import { Provider, connect } from 'react-redux';
import Store from './src/store/Store';

const RootView = () => (
  <Provider store={Store}>
    <NavigatorViewContainer />
  </Provider>
)

AppRegistry.registerComponent('demo_react_native', () => RootView);
