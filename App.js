import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Search from './screens/Search';

const App=()=> {

  
    return (
      <>
        <Search/>
      <StatusBar barStyle="dark-content" backgroundColor="#00aaff" />
    </>
    );
  
}

export default App;