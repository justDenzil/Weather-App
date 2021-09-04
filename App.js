import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import dateTime from './components/dateTime';

const bg = require('./assets/bg.png')

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={bg} style={styles.bg}>
        <dateTime />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    flex:1,
    resizeMode:"cover",
    justifyContent:"center",
  }
});
