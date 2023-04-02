import {createStackNavigator} from '@react-navigation/stack';

import ContactScreen from '../screens/ContactScreen';
import SocialMedyaScreen from '../screens/SocialMedyaScreen';

const Stack = createStackNavigator();

function ContactStack() {
  return (
    <Stack.Navigator
      initialRouteName="Contact"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Contact" component={ContactScreen} />
      <Stack.Screen name="Social" component={SocialMedyaScreen} />
    </Stack.Navigator>
  );
}
export default ContactStack;
