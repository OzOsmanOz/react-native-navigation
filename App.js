import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen
          options={{
            tabBarLabel: ({focused, color}) => {
              return (
                <Text
                  style={{
                    color: focused ? 'gray' : '#EA5455',
                    fontWeight: '700',
                    fontSize: focused ? 17 : 15,
                  }}>
                  Home
                </Text>
              );
            },
            tabBarIcon: ({focused, color, size}) => (
              <Ionicons
                name={focused ? 'home' : 'home-outline'}
                color={focused ? '#EA5455' : '#3F4E4F'}
                size={focused ? 25 : 17}
              />
            ),
          }}
          name="Home"
          component={HomeScreen}
        />
        <Tab.Screen
          options={{
            tabBarLabel: ({focused, color}) => {
              return (
                <Text
                  style={{
                    color: focused ? 'gray' : '#EA5455',
                    fontWeight: '700',
                    fontSize: focused ? 17 : 15,
                  }}>
                  Profile
                </Text>
              );
            },
            tabBarIcon: ({focused, color, size}) => (
              <Ionicons
                name={focused ? 'person-circle' : 'person-circle-outline'}
                color={focused ? '#EA5455' : '#3F4E4F'}
                size={focused ? 29 : 19}
              />
            ),
          }}
          name="Profile"
          component={ProfileScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabNavi: {
    backgroundColor: 'red',
    borderWidth: 2,
  },
});

export default App;
