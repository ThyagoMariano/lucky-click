import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Footer = () => {
  return <Text style={style.word}>Onde a sorte é maior que o talento</Text>;
};

const style = StyleSheet.create({
  word: {
    color: 'white',
  },
});

export default Footer;
