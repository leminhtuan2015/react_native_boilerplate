import { Navigation } from 'react-native-navigation';

import HomeViewContainer from '../containers/HomeViewContainer';
import DetailViewContainer from '../containers/DetailViewContainer';
import EditViewContainer from '../containers/EditViewContainer';

export default (store, Provider) => {
  Navigation.registerComponent('HomeViewContainer', () => HomeViewContainer, store, Provider);
  Navigation.registerComponent('DetailViewContainer', () => DetailViewContainer, store, Provider);
  Navigation.registerComponent('EditViewContainer', () => EditViewContainer, store, Provider);
};
