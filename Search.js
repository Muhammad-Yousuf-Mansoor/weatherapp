// import * as React from 'react';
import { Appbar,TextInput,Title ,Button,Card} from 'react-native-paper';
import {SafeAreaView,ScrollView, StatusBar,StyleSheet,Text,FlatList,View} from 'react-native';
import Header from './Header';
import React,{useState} from 'react';
export default Search = () => {
  const[city,setCity]=useState('');
  const[cities,setCities]=useState([]);

  const fetchCities=(text)=>{
      setCity=(text)
      fetch=("https://api.weather.com/v3/location/search?apiKey=6532d6454b8aa370768e63d6ba5a832e&language=en-US&query="+text)
      .then(item=>item.json())
      .then(cityData=>{
          setCities(cityData.RESULT.slice(0,9))
        })
  }

  return (
    <View style={{flex:1,backgroundColor:"white"}}>
        <Header name="search screen"/>
        <TextInput
        label="city name"
        theme={{colors:{primary:"#00aaff"}}}
        value={city}
        onChangeText={(text)=>fetchCities(text)}
        />

        <Button 
        style={{margin:20}}
        icon="content-save" 
        mode="contained" 
        theme={{
            colors:{primary:"#00aaff"}
        }}
        onPress={() => console.log('Pressed')}>
           <Text style={{color:"white"}} > Press me</Text>
        </Button>
        <FlatList
        data={cities}
        renderItem={()=>{
            return(
                <Card style={{margin:2,padding:12,}}>
                    <Text>{item.name}</Text>
                </Card>
                
            )
        }}

        keyExtractor={item=>item.name}
        />
     
    </View>
  );
};
