import { StackNavigator } from 'react-navigation';

import HomeView from '../components/screens/HomeView';

const RootNavigator = StackNavigator({
  Home: {
    screen: HomeView,
  },
});

export default RootNavigator
