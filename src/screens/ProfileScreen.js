import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../components/Header';

const ProfileScreen = props => {
  const {navigation, route} = props;
  console.log('route', route);
  return (
    <SafeAreaView>
      <Header />
      <View style={styles.profileWrapper}>
        <Text style={styles.profileText}>Profile Screen</Text>
        <TouchableOpacity
          style={styles.touchableWrapper}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.touchableText}>Go to Home Screen</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.text}>parametre: "{route.params.parametre}"</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  profileWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '93%',
    backgroundColor: '#2C3639',
  },
  profileText: {
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

  text: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 17,
    textAlign: 'center',
  },
});

export default ProfileScreen;
