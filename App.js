import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import UserScreen  from './UserScreen';
import LocationScreen  from './LocationScreen';
import DetailScreen  from './DetailScreen';
import AddLocationScreen from './AddLocationScreen';
import Inicio from './Inicio';
import LocationUser from './LocationUser';

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
