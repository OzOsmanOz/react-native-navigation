import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Header = ({
  navigation,
  route,
  hasBack = false,
  onBack = () => {},
  title = '',
}) => {
  return (
    <View style={styles.headerWrapper}>
      {hasBack && (
        <TouchableOpacity onPress={onBack} style={styles.headerIconWrapper}>
          <Ionicons name="arrow-back-circle" size={39} color={'#FF0099'} />
        </TouchableOpacity>
      )}
      <View style={styles.imageWrapper}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require('../assets/images/mernmania-logo.png')}
        />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
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
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '7%',
    backgroundColor: '#fff',
    position: 'relative',
  },
  headerText: {
    fontSize: 15,
    color: '#3F4E4F',
    fontFamily: fonts.Montserrat.semiBold,
    marginStart: 20,
  },
  headerIconWrapper: {
    position: 'absolute',
    left: 10,
  },
  imageWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
  },
});

export default Header;
