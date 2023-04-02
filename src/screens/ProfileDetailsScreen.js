import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import LinearGradient from 'react-native-linear-gradient';

const ProfileDetailsScreen = props => {
  const {navigation, route} = props;
  return (
    <SafeAreaView>
      <Header
        hasBack
        onBack={() => navigation.navigate('Profile')}
        navigation={navigation}
        route={route}
        title="Profil Detay"
      />
      <View style={styles.detailsWrapper}>
        <Text style={styles.detailsText}>Profile Details Sayfasındayız</Text>
        <LinearGradient
          colors={['#FF0099', '#512DA8']}
          style={styles.linearGradientBtn}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('StudiesStack', {screen: 'Details'})
            }
            style={styles.btnWrapper}>
            <Text style={styles.btnText}>Studies Details'e git</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
};

export default ProfileDetailsScreen;

const fonts = {
  Montserrat: {
    regular: 'Montserrat-Regular',
    medium: 'Montserrat-Medium',
    semiBold: 'Montserrat-SemiBold',
    bold: 'Montserrat-Bold',
  },
};

const styles = StyleSheet.create({
  detailsWrapper: {
    height: '93%',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsText: {
    fontSize: 23,
    fontFamily: fonts.Montserrat.bold,
    marginBottom: 30,
  },
  btnWrapper: {
    paddingVertical: 10,
    width: 225,
    borderRadius: 5,
  },
  btnText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
    fontFamily: fonts.Montserrat.bold,
  },
  linearGradientBtn: {
    height: 40,
    borderRadius: 5,
    marginVertical: 30,
  },
});
