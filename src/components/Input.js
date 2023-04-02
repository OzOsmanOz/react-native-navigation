import {StyleSheet, TextInput} from 'react-native';
import React from 'react';

const Input = ({
  placeholder,
  value,
  setValue,
  style,
  numberoflines,
  multiline,
}) => {
  return (
    <TextInput
      multiline={multiline}
      style={[styles.inputText, style]}
      placeholder={placeholder}
      value={value}
      onChangeText={text => setValue(text)}
    />
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
  inputText: {
    borderWidth: 1,
    borderColor: '#7248EE',
    marginVertical: 10,
    marginHorizontal: 5,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 4,
    // fontFamily: fonts.Montserrat.medium,
  },
});

export default Input;
