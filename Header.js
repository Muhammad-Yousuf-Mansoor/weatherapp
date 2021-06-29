import * as React from 'react';
import { Appbar,Title } from 'react-native-paper';
import {SafeAreaView,ScrollView, StatusBar,StyleSheet,Text,useColorScheme,View,} from 'react-native';
export default Header = (props) => {
  

  return (
    <Appbar.Header
    theme={{colors:{primay:"#00aaff"}}}

    style={{justifyContent:'center'}}
    >
        
        <Title style={{color:"white"}}>{props.name}</Title>
     
    </Appbar.Header>
  );
};