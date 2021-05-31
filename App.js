import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import UserScreen  from './screens/UserScreen';
import LocationScreen  from './screens/LocationScreen';
import DetailScreen  from './screens/DetailScreen';
import AddLocationScreen from './screens/AddLocationScreen';
import Inicio from './screens/Inicio';
import LocationUser from './screens/LocationUser';

const AppNavigator = createStackNavigator({
  Inicio: {
    screen: Inicio,
  },
  Users: {
    screen: UserScreen,
  },
  Location: {
    screen: LocationScreen,
  },
  Detail: {
    screen: DetailScreen,
  },
  AddLocation: {
    screen: AddLocationScreen,
  },
  LocationUser: {
    screen: LocationUser,
  }
}, {
  initialRouteName: 'Inicio',
})

export default createAppContainer(AppNavigator);