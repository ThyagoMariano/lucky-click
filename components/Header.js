import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <>
      <Text style={style.logo}>LuckyClick</Text>
      <Text style={style.word}>Quem será o vencedor?</Text>
    </>
  );
};

const style = StyleSheet.create({
  logo: {
    fontSize: 40,
    fontWeight: 700,
    color: '#151D3B',
    marginBottom: 30,
  },
  word: {
    color: 'white',
    textAlign:"center"
  },
});

export default Header;
