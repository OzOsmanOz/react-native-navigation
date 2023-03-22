import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Header = ({navigation, route, hasBack = false}) => {
  return (
    <View style={styles.headerWrapper}>
      {hasBack && (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.headerIconWrapper}>
          <Ionicons name="arrow-back-circle" size={29} color="#EA5455" />
        </TouchableOpacity>
      )}
      <Text style={styles.headerText}>Header</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '7%',
    backgroundColor: '#DCD7C9',
    position: 'relative',
  },
  headerText: {
    fontWeight: '700',
    fontSize: 19,
    color: '#3F4E4F',
  },
  headerIconWrapper: {
    position: 'absolute',
    left: 20,
  },
});

export default Header;
