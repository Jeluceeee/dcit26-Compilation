//BSCS 3-1

//Anota, Jelucel R.
//Chico, Denmark
//Maque, Mark Erickson
//Nofuente, John Paul A.

import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { AppRegistry, Image } from 'react-native';

export default function App() {
  return (
    <View style={style.container}>
      <Text style={[style.design]}> Hello World!!</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#498',
    alignItems: 'center',
    justifyContent: 'center',
  },
  design: {
    fontSize: 40,
    fontFamily: 'Algerian',
    backgroundColor: '#6475',
    fontWeight: 'bold',
    textShadowRadius: 5,
  },
});
