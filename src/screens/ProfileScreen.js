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

const ProfileScreen = props => {
  const {navigation, route} = props;
  return (
    <SafeAreaView>
      <Header title="Profil" navigation={navigation} route={route} />
      <View style={styles.profileWrapper}>
        <View style={styles.linearWrapper}>
          <LinearGradient
            colors={['#FF0099', '#512DA8']}
            style={styles.linearGradient}>
            <TouchableOpacity
              onPress={() => navigation.navigate('ProfileDetails')}>
              <Image
                style={styles.linearImage}
                resizeMode="contain"
                source={require('../assets/images/urban-user.png')}
              />
            </TouchableOpacity>

            <View style={styles.linearTextWrapper}>
              <Text style={styles.linearText}>OzOsman</Text>
              <Text style={styles.linearText}>
                React & React Native Developer
              </Text>
            </View>
          </LinearGradient>
        </View>

        {/* <View style={styles.skillsWrapper}>
          <LinearGradient colors={['#FF0099', '#512DA8']} style={styles.skills}>
            <Text style={styles.skillText}>Html / Css</Text>
          </LinearGradient>
          <LinearGradient colors={['#FF0099', '#512DA8']} style={styles.skills}>
            <Text style={styles.skillText}>JavaScript</Text>
          </LinearGradient>
        </View>
        <View style={styles.skillsWrapper}>
          <LinearGradient colors={['#FF0099', '#512DA8']} style={styles.skills}>
            <Text style={styles.skillText}>React</Text>
          </LinearGradient>
          <LinearGradient colors={['#FF0099', '#512DA8']} style={styles.skills}>
            <Text style={styles.skillText}>React Native</Text>
          </LinearGradient>
        </View>
        <View style={styles.skillsWrapper}>
          <LinearGradient colors={['#FF0099', '#512DA8']} style={styles.skills}>
            <Text style={styles.skillText}>NodeJS</Text>
          </LinearGradient>
          <LinearGradient colors={['#FF0099', '#512DA8']} style={styles.skills}>
            <Text style={styles.skillText}>MongoDb</Text>
          </LinearGradient>
        </View> */}
        <View style={styles.touchableContainer}>
          <LinearGradient
            colors={['#FF0099', '#512DA8']}
            style={styles.linearGradientBtn}>
            <TouchableOpacity
              onPress={() => navigation.navigate('ProfileDetails')}
              style={styles.touchableWrapper}>
              <Text style={styles.touchableText}>
                Profile Detay Sayfasına Git...
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
        {/* <View style={styles.touchableContainer}>
          <LinearGradient
            colors={['#FF0099', '#512DA8']}
            style={styles.linearGradientBtn}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('StudiesStack', {screen: 'Details'})
              }
              style={styles.touchableWrapper}>
              <Text style={styles.touchableText}>
                Studies Detay Sayfasına Git...
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View> */}
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
  profileWrapper: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#fff',
  },
  linearGradient: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    height: 350,
  },
  linearWrapper: {
    width: '90%',
    height: 350,
  },
  linearGradientBtn: {
    height: 40,
    borderRadius: 5,
    marginVertical: 30,
  },
  linearImage: {
    width: 150,
    height: 150,
    borderRadius: 150,
  },
  linearTextWrapper: {
    gap: 10,
    marginTop: 20,
  },
  linearText: {
    color: '#fff',
    fontSize: 19,
    fontFamily: fonts.Montserrat.bold,
    textAlign: 'center',
  },
  profileText: {
    fontFamily: fonts.Montserrat.medium,
    fontSize: 29,
    color: '#fff',
  },
  skillsWrapper: {
    flexDirection: 'row',
    gap: 20,
  },
  skills: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginVertical: 15,
    width: 150,
  },
  skillText: {
    color: '#fff',
    fontFamily: fonts.Montserrat.semiBold,
    fontSize: 17,
  },

  text: {
    color: '#000',
    fontFamily: fonts.Montserrat.semiBold,
    fontSize: 23,
    textAlign: 'center',
    marginTop: 20,
  },
  touchableContainer: {
    flexDirection: 'row',
    gap: 7,
    width: 225,
    justifyContent: 'center',
  },
  touchableWrapper: {
    paddingVertical: 10,
    width: 325,
    borderRadius: 5,
  },
  touchableText: {
    color: '#fff',
    fontSize: 17,
    fontFamily: fonts.Montserrat.bold,
    paddingHorizontal: 20,
    textAlign: 'center',
  },
});

export default ProfileScreen;
