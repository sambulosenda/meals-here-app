import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import {StatusBar, SafeAreaView, StyleSheet, Text, View, Platform } from 'react-native';



const isAndroid = Platform.OS === 'android'; 

console.log(StatusBar.currentHeight)

export default function App() {
  return (
    <SafeAreaView style={{flex: 1, marginTop: StatusBar.currentHeight}}>
      <View style={{ padding: 16, backgroundColor: 'green'}}>
        <Text>Search</Text>
      </View>

      <View style={{flex: 1, padding: 16, backgroundColor: 'red'}}>
        <Text>
          List
        </Text>
      </View>
      <ExpoStatusBar style="auto" />
 </SafeAreaView>
  );
}

const styles = StyleSheet.create({
});
