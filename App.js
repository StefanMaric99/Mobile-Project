import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Weather from "./components/Weather";
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open Weather API</Text>
      <StatusBar style="auto" />
	  
	  <Weather />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
