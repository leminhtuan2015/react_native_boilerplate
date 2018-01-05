import { Navigation } from 'react-native-navigation';

import HomeView from '../components/screens/HomeView';
import DetailView from '../components/screens/DetailView';

export default () => {
  Navigation.registerComponent('HomeView', () => HomeView);
  Navigation.registerComponent('DetailView', () => DetailView);
};
