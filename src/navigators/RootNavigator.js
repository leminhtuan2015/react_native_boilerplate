import { StackNavigator } from 'react-navigation';
import HomeView from '../components/home/Home'
import DetailView from '../components/detail/DetailView'


const HomeScreen = () => (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
            </View>
    );

const DetailScreen = () => (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Details Screen</Text>
            </View>
    );


const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Detail: {
    screen: DetailScreen,
  }
});

export default RootNavigator;
