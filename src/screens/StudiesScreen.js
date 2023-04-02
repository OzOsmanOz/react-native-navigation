import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';

const StudiesScreen = props => {
  const {navigation, route} = props;
  return (
    <SafeAreaView>
      <Header title="Projeler" navigation={navigation} route={route} />
      <View style={styles.studiesWrapper}>
        <TouchableOpacity
          style={styles.touchableImageWrapper}
          onPress={() => navigation.navigate('Details')}>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={require('../assets/images/hesap-kimde.webp')}
          />
        </TouchableOpacity>
        <View>
          <LinearGradient
            colors={['#FF0099', '#512DA8']}
            style={styles.linearGradientBtn}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Details')}
              style={styles.touchableWrapper}>
              <Text style={styles.touchableText}>Studies Detay'a Git...</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default StudiesScreen;

const fonts = {
  Montserrat: {
    regular: 'Montserrat-Regular',
    medium: 'Montserrat-Medium',
    semiBold: 'Montserrat-SemiBold',
    bold: 'Montserrat-Bold',
  },
};

const styles = StyleSheet.create({
  studiesWrapper: {
    alignItems: 'center',
    height: '93%',
    backgroundColor: '#fff',
  },

  touchableImageWrapper: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  image: {
    width: 275,
    height: 300,
    borderWidth: 1,
    borderRadius: 3,
  },
  touchableWrapper: {
    paddingVertical: 10,
    width: 225,
    borderRadius: 5,
  },
  touchableText: {
    color: '#fff',
    fontSize: 17,
    fontFamily: fonts.Montserrat.bold,
    paddingHorizontal: 20,
    textAlign: 'center',
  },
  linearGradientBtn: {
    height: 40,
    borderRadius: 5,
    marginVertical: 30,
  },
});
