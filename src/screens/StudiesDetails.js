import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import LinearGradient from 'react-native-linear-gradient';

const StudiesDetails = props => {
  const {navigation, route} = props;
  return (
    <SafeAreaView>
      <Header
        hasBack
        navigation={navigation}
        route={route}
        onBack={() => navigation.navigate('Studies')}
        title="Proje Detay"
      />
      <View style={styles.detailsWrapper}>
        <Text style={styles.detailsText}>Studies Details Sayfasındayız</Text>
        <LinearGradient
          colors={['#FF0099', '#512DA8']}
          style={styles.linearGradientBtn}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ContactStack', {screen: 'Social'})
            }
            style={styles.btnWrapper}>
            <Text style={styles.btnText}>Sosyal Hesaplara git</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
};

export default StudiesDetails;

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
    marginVertical: 30,
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
