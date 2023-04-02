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

const HomeScreen = props => {
  const {navigation, route} = props;
  return (
    <SafeAreaView>
      <Header navigation={navigation} route={route} title="AnaSayfa" />
      <View style={styles.homeWrapper}>
        <View style={styles.imageWrapper}>
          <View>
            <Text style={styles.imageTopText}>
              Web & Mobil Uygulama Dünyası
            </Text>
          </View>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={require('../assets/images/programmer.gif')}
          />
          <View>
            <Text style={styles.imageText}>
              Her şey hayal etmekle başladı. Sonrası araştırıp, öğrenip
              gerçekleştirmeye kaldı.
            </Text>
          </View>
        </View>
        <LinearGradient
          colors={['#FF0099', '#512DA8']}
          style={styles.linearGradientBtn}>
          <TouchableOpacity
            onPress={() => navigation.navigate('About')}
            style={styles.touchableWrapper}>
            <Text style={styles.touchableText}>About'a git</Text>
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
    marginHorizontal: 20,
  },
  image: {
    width: 350,
    height: 350,
  },
  imageTopText: {
    fontFamily: fonts.Montserrat.bold,
    textAlign: 'center',
    fontSize: 21,
    marginHorizontal: 20,
  },
  imageText: {
    fontFamily: fonts.Montserrat.medium,
    textAlign: 'center',
    fontSize: 15,
    marginHorizontal: 20,
    lineHeight: 25,
  },
  homeText: {
    fontSize: 29,
    color: '#fff',
    fontFamily: fonts.Montserrat.medium,
  },
  touchableContainer: {
    // justifyContent: 'center',
    // alignItems: 'flex-end',
  },
  touchableWrapper: {
    paddingVertical: 10,
    width: 225,
    borderRadius: 5,
  },
  touchableText: {
    color: '#fff',
    fontSize: 16,
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

export default HomeScreen;
