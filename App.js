import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NativeRouter } from 'react-router-native';
import { StyleSheet, Text, View } from 'react-native';
import Main from "./Components/Main";



export default function App() {
console.debug("morooo")

  return (
    <NativeRouter>
    <Main/>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: "scroll",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
