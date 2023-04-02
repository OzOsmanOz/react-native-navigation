import {createStackNavigator} from '@react-navigation/stack';
import ProfileDetailsScreen from '../screens/ProfileDetailsScreen';

import ProfileScreen from '../screens/ProfileScreen';

const Stack = createStackNavigator();

function ProfileStack() {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="ProfileDetails" component={ProfileDetailsScreen} />
    </Stack.Navigator>
  );
}
export default ProfileStack;
