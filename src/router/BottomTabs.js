import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfileStack from './ProfileStack';
import HomeStack from './HomeStack';
import ContactStack from './ContactStack';
import StudiesStack from './StudiesStack';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        listeners={({navigation}) => ({
          tabPress: event => {
            event.preventDefault();
            navigation.navigate('HomeStack', {screen: 'Home'});
          },
        })}
        options={{
          tabBarLabel: ({focused, color}) => {
            return (
              <Text
                style={[
                  styles.bottomTabsText,
                  {
                    color: focused ? '#512DA8' : '#3F4E4F',
                    fontSize: focused ? 16 : 15,
                  },
                ]}>
                Home
              </Text>
            );
          },
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              color={focused ? '#512DA8' : '#3F4E4F'}
              size={focused ? 23 : 21}
            />
          ),
        }}
        name="HomeStack"
        component={HomeStack}
      />
      <Tab.Screen
        listeners={({navigation}) => ({
          tabPress: event => {
            event.preventDefault();
            navigation.navigate('ProfileStack', {screen: 'Profile'});
          },
        })}
        options={{
          tabBarLabel: ({focused, color}) => {
            return (
              <Text
                style={[
                  styles.bottomTabsText,
                  {
                    color: focused ? '#512DA8' : '#3F4E4F',
                    fontSize: focused ? 16 : 15,
                  },
                ]}>
                Profile
              </Text>
            );
          },
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons
              name={focused ? 'person-circle' : 'person-circle-outline'}
              color={focused ? '#512DA8' : '#3F4E4F'}
              size={focused ? 29 : 25}
            />
          ),
        }}
        name="ProfileStack"
        component={ProfileStack}
      />
      <Tab.Screen
        listeners={({navigation}) => ({
          tabPress: event => {
            event.preventDefault();
            navigation.navigate('StudiesStack', {screen: 'Studies'});
          },
        })}
        options={{
          tabBarLabel: ({focused, color}) => {
            return (
              <Text
                style={[
                  styles.bottomTabsText,
                  {
                    color: focused ? '#512DA8' : '#3F4E4F',
                    fontSize: focused ? 16 : 15,
                  },
                ]}>
                Studies
              </Text>
            );
          },
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons
              name={focused ? 'code-working' : 'code-working-outline'}
              color={focused ? '#512DA8' : '#3F4E4F'}
              size={focused ? 33 : 31}
            />
          ),
        }}
        name="StudiesStack"
        component={StudiesStack}
      />
      <Tab.Screen
        listeners={({navigation}) => ({
          tabPress: event => {
            event.preventDefault();
            navigation.navigate('ContactStack', {screen: 'Contact'});
          },
        })}
        options={{
          tabBarLabel: ({focused, color}) => {
            return (
              <Text
                style={[
                  styles.bottomTabsText,
                  {
                    color: focused ? '#512DA8' : '#3F4E4F',
                    fontSize: focused ? 16 : 15,
                  },
                ]}>
                Contact
              </Text>
            );
          },
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons
              name={focused ? 'globe' : 'globe-outline'}
              color={focused ? '#512DA8' : '#3F4E4F'}
              size={focused ? 25 : 23}
            />
          ),
        }}
        name="ContactStack"
        component={ContactStack}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;

const fonts = {
  Montserrat: {
    regular: 'Montserrat-Regular',
    medium: 'Montserrat-Medium',
    semiBold: 'Montserrat-SemiBold',
    bold: 'Montserrat-Bold',
  },
};

const styles = StyleSheet.create({
  tabNavi: {
    backgroundColor: 'red',
    borderWidth: 2,
  },
  bottomTabsText: {
    fontFamily: fonts.Montserrat.semiBold,
  },
});
