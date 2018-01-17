import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import React from 'react';
import { AppRegistry} from 'react-native';

import RootView from './src/components/screens/RootView';

AppRegistry.registerComponent('demo_react_native', () => RootView);
