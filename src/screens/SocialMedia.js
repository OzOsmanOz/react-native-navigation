import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

const SocialMedyaScreen = ({navigation, route}) => {
  return (
    <SafeAreaView>
      <Header
        onBack={() => navigation.navigate('Contact')}
        hasBack
        navigation={navigation}
        route={route}
        title="Sosyal Medya"
      />
      <View style={styles.socialWrapper}>
        <View>
          <Image
            style={styles.socialImage}
            resizeMode="contain"
            source={require('../assets/images/social-media-marketing.gif')}
          />
        </View>

        {/* <View style={styles.iconTextMainWrapper}>
          <LinearGradient
            colors={['#FF0099', '#512DA8']}
            style={styles.iconTextWrapper}>
            <View style={styles.iconWrapper}>
              <Ionicons
                name="call-outline"
                color="#EE4878"
                size={21}
                style={styles.icon}
              />
            </View>

            <Text style={styles.iconText}>+123413244</Text>
          </LinearGradient>
          <LinearGradient
            colors={['#FF0099', '#512DA8']}
            style={styles.iconTextWrapper}>
            <View style={styles.iconWrapper}>
              <Ionicons name="mail-outline" color="#EE4878" size={21} />
            </View>
            <Text style={styles.iconText}>ornek@mail.com</Text>
          </LinearGradient>
        </View> */}

        <View style={styles.imageGroup}>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image
              style={styles.image}
              resizeMode="center"
              source={require('../assets/images/3d-github-logo.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Studies')}>
            <Image
              style={styles.image}
              resizeMode="center"
              source={require('../assets/images/3d-linkedin-logo.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('HomeStack', {screen: 'Home'})}>
            <Image
              style={styles.image}
              resizeMode="center"
              source={require('../assets/images/3d-fluency-twitter-logo.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ProfileStack', {screen: 'Profile'})
            }>
            <Image
              style={styles.image}
              resizeMode="center"
              source={require('../assets/images//3d-casual-life-earth-planet-icon-1.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SocialMedyaScreen;

const fonts = {
  Montserrat: {
    regular: 'Montserrat-Regular',
    italic: 'Montserrat-Italic',
    medium: 'Montserrat-Medium',
    semiBold: 'Montserrat-SemiBold',
    bold: 'Montserrat-Bold',
  },
};

const styles = StyleSheet.create({
  socialWrapper: {
    height: '93%',
    backgroundColor: '#fff',
  },
  socialImage: {
    width: 375,
    height: 375,
  },
  imageGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
    marginVertical: 50,
  },
  image: {
    width: 75,
    height: 75,
  },

  iconTextWrapper: {
    flexDirection: 'row',
    // marginVertical: 9,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 7,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 4,
    backgroundColor: '#7248EE',
    width: '75%',
  },
  iconText: {
    marginLeft: 10,
    fontFamily: fonts.Montserrat.semiBold,
    fontSize: 17,
    color: '#fff',
  },
  iconWrapper: {
    borderWidth: 2,
    padding: 5,
    borderRadius: 50,
    borderColor: '#7248EE',
    backgroundColor: '#fff',
  },
  icon: {
    fontWeight: 900,
  },
  iconTextMainWrapper: {
    width: 400,
    alignItems: 'center',
  },
});
