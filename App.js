import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

const bg = require('./assets/bg.png')

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={bg} style={styles.bg}>
        <StatusBar style="auto" />
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
