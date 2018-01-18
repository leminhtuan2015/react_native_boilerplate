import { StackNavigator } from 'react-navigation';

import HomeViewContainer from '../../containers/HomeViewContainer';
import DetailViewContainer from '../../containers/DetailViewContainer';
import EditViewContainer from '../../containers/EditViewContainer';

import TestView from './TestView';

const Navigator = StackNavigator(
  {
    HomeView: {screen: HomeViewContainer,},
    DetailView: {screen: DetailViewContainer,},
    EditView: {screen: EditViewContainer,},
    TestView: {screen: TestView}, 
  },
  {
    headerMode: 'screen'
  }
);

export default Navigator
