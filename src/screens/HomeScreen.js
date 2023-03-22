import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../components/Header';

const HomeScreen = props => {
  const {navigation, route} = props;
  return (
    <SafeAreaView>
      <Header navigation={navigation} route={route} hasBack={true} />
      <View style={styles.homeWrapper}>
        <Text style={styles.homeText}>Home Screen</Text>
        <TouchableOpacity style={styles.touchableWrapper}>
          <Text
            style={styles.touchableText}
            onPress={() =>
              navigation.navigate('Profile', {parametre: 'deneme'})
            }>
            Go to Profile Screen
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  homeWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '93%',
    backgroundColor: '#3F4E4F',
  },
  homeText: {
    fontWeight: '700',
    fontSize: 29,
    color: '#fff',
  },
  touchableWrapper: {
    backgroundColor: '#A27B5C',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginVertical: 20,
  },
  touchableText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 17,
  },
});

export default HomeScreen;
