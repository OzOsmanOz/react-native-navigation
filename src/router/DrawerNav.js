import {createDrawerNavigator} from '@react-navigation/drawer';

import ContactScreen from '../screens/ContactScreen';
import SocialMedia from '../screens/SocialMedia';
import Connection from '../screens/Connection';
import Contact from '../screens/Contact';

const Drawer = createDrawerNavigator();

function DrawerNav() {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Contact" component={Contact} />
      <Drawer.Screen name="Social" component={SocialMedia} />
      <Drawer.Screen name="Connection" component={Connection} />
    </Drawer.Navigator>
  );
}
export default DrawerNav;
