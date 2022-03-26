import React from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import Count from './components/Count';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <SafeAreaView style={style.container}>
      <View>
        <Header></Header>
      </View>
      <View>
        <Count></Count>
      </View>
      <View>
        <Footer></Footer>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default App;
