import { Navigation } from 'react-native-navigation';

import HomeView from '../components/screens/HomeView';
import DetailView from '../components/screens/DetailView';

import UserDetailViewContainer from '../containers/UserDetailViewContainer';

export default (store, Provider) => {
  Navigation.registerComponent('HomeView', () => HomeView);
  Navigation.registerComponent('DetailView', () => DetailView);

  Navigation.registerComponent('UserDetailViewContainer', () => UserDetailViewContainer, store, Provider);
};
