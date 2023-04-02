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

const AboutScreen = props => {
  const {navigation, route} = props;
  console.log('About navigation', navigation);
  return (
    <SafeAreaView>
      <Header
        hasBack
        navigation={navigation}
        route={route}
        title="About Screen"
        onBack={() => navigation.goBack()}
      />
      <View style={styles.homeWrapper}>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={require('../assets/images/aboutMe.gif')}
          />
          <View>
            <Text style={styles.imageText}>
              MERN stack hedefi doğrultusunda ReactJs (State management olarak
              Redux kullanıyorum) ile projeler yapmaktayım. Şimdiler de
              Thunk-Redux, Hooks-React ile projelerimi geliştirmeye çalışıyorum.
              Aynı zamanda React Native eğitimime başladım.
            </Text>
          </View>
        </View>
        <LinearGradient
          colors={['#FF0099', '#512DA8']}
          style={styles.linearGradientBtn}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ProfileStack', {
                screen: 'ProfileDetails',
              })
            }
            style={styles.touchableWrapper}>
            <Text style={styles.touchableText}>Profile Details'a git</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
};

const fonts = {
  Montserrat: {
    regular: 'Montserrat-Regular',
    medium: 'Montserrat-Medium',
    semiBold: 'Montserrat-SemiBold',
    bold: 'Montserrat-Bold',
  },
};

const styles = StyleSheet.create({
  homeWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '93%',
    backgroundColor: '#fff',
  },
  imageWrapper: {
    flex: 1,
    marginHorizontal: 20,
  },
  image: {
    width: 375,
    height: 375,
  },

  imageText: {
    fontFamily: fonts.Montserrat.medium,
    textAlign: 'center',
    fontSize: 15,
    marginHorizontal: 20,
    lineHeight: 25,
  },
  touchableWrapper: {
    paddingVertical: 9,
    paddingHorizontal: 10,
    borderRadius: 5,
    width: 225,
  },
  touchableText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: fonts.Montserrat.bold,
  },
  linearGradientBtn: {
    height: 40,
    borderRadius: 5,
    marginVertical: 30,
  },
});

export default AboutScreen;
