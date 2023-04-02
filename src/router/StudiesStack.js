import {createStackNavigator} from '@react-navigation/stack';
import StudiesDetails from '../screens/StudiesDetails';

import StudiesScreen from '../screens/StudiesScreen';

const Stack = createStackNavigator();

function StudiesStack() {
  return (
    <Stack.Navigator
      initialRouteName="Studies"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Studies" component={StudiesScreen} />
      <Stack.Screen name="Details" component={StudiesDetails} />
    </Stack.Navigator>
  );
}
export default StudiesStack;
