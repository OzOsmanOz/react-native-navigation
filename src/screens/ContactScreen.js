import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '../components/Header';
import Input from '../components/Input';

const ContactScreen = props => {
  const {navigation, route} = props;
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  return (
    <SafeAreaView>
      <Header title="İletişim" navigation={navigation} route={route} />
      <View style={styles.profileWrapper}>
        <LinearGradient
          colors={['#FF0099', '#512DA8']}
          style={styles.linearGradientSocial}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Social')}
            style={styles.iconTextWrapper}>
            <View style={styles.iconWrapper}>
              <Ionicons
                name={'share-social-outline'}
                color="#EE4878"
                size={21}
              />
            </View>
            <Text style={styles.iconText}>Sosyal Medya ve İletişim</Text>
          </TouchableOpacity>
        </LinearGradient>

        <Text style={styles.profileText}>Mesaj Gönder</Text>
        <Text style={styles.text}>E-posta hesabınız yayınlanmayacak.</Text>
        <Text style={styles.text}>Tüm alanları doldurmak zorunludur.</Text>
        <View style={styles.inputWrapper}>
          <Text style={styles.labelText}>Adınız</Text>
          <Input
            setValue={setContactForm}
            value={contactForm.name}
            style={styles.contactInput}
          />
          <Text style={styles.labelText}>Email</Text>
          <Input
            setValue={setContactForm}
            value={contactForm.email}
            style={styles.contactInput}
          />
          <Text style={styles.labelText}>Mesajınız</Text>
          <Input
            setValue={setContactForm}
            value={contactForm.message}
            multiline={true}
            style={[styles.contactInput, styles.contactInputMessage]}
          />
        </View>

        <View>
          <LinearGradient
            colors={['#FF0099', '#512DA8']}
            style={styles.linearGradientBtn}>
            <TouchableOpacity
              style={styles.touchableWrapper}
              onPress={() =>
                navigation.navigate('HomeStack', {screen: 'Home'})
              }>
              <Text style={styles.touchableText}>AnaSayfa'ya git</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </SafeAreaView>
  );
};

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
  profileWrapper: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '93%',
    backgroundColor: '#fff',
  },
  profileText: {
    fontFamily: fonts.Montserrat.semiBold,
    fontSize: 29,
    color: '#000',
    marginBottom: 30,
  },
  touchableWrapper: {
    // backgroundColor: '#7248EE',
    paddingVertical: 7,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  touchableText: {
    color: '#fff',
    fontFamily: fonts.Montserrat.bold,
    fontSize: 16,
  },
  text: {
    color: '#000',
    fontFamily: fonts.Montserrat.italic,
    fontSize: 14,
  },
  labelText: {
    color: '#000',
    fontFamily: fonts.Montserrat.semiBold,
    fontSize: 14,
  },

  contactInput: {
    borderWidth: 1,
    width: 300,
    paddingVertical: 8,
    borderRadius: 4,
    marginBottom: 15,
  },
  contactInputMessage: {
    height: 100,
  },
  inputWrapper: {
    marginTop: 30,
  },
  iconTextWrapper: {
    flexDirection: 'row',
    marginVertical: 9,
    justifyContent: 'flex-start',
    alignItems: 'center',
    // marginBottom: 70,
    // marginTop: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 4,
  },
  iconText: {
    marginLeft: 10,
    fontFamily: fonts.Montserrat.bold,
    fontSize: 21,
    color: '#fff',
  },
  iconWrapper: {
    borderWidth: 2,
    padding: 5,
    height: 35,
    borderRadius: 50,
    borderColor: '#7248EE',
    backgroundColor: '#fff',
  },
  icon: {
    fontWeight: 700,
  },
  iconTextMainWrapper: {
    flexDirection: 'row',
    gap: 20,
  },
  linearGradientSocial: {
    height: 60,
    borderRadius: 5,
    marginVertical: 30,
  },
  linearGradientBtn: {
    height: 40,
    borderRadius: 5,
    marginVertical: 30,
  },
});

export default ContactScreen;
