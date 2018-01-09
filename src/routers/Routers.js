import { Navigation } from 'react-native-navigation';

import HomeViewContainer from '../containers/HomeViewContainer';
import DetailViewContainer from '../containers/DetailViewContainer';

export default (store, Provider) => {
  Navigation.registerComponent('HomeViewContainer', () => HomeViewContainer, store, Provider);
  Navigation.registerComponent('DetailViewContainer', () => DetailViewContainer, store, Provider);
};
