import React,{useState,useEffect} from "react";
import axios from 'axios';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  FlatList,
  Button
} from "react-native";
import Constants from "expo-constants";

function List (){
  const URL='http://127.0.0.1:8000/api';
  const [books, setBooks]= useState();

  const getBooks=()=>{
  return fetch(`${URL}/book`,{
    method: 'get',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }}).then(ress=>ress.json()
    .then((json) => {
      return console.log(json);
    })
    ).catch(error=>{
      console.log(error)
   })
    
  }

  useEffect(() => {
   getBooks();
  },[]);
  return(
    <View style={styles.container}>
     
    <FlatList
      data={books}
      renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
      
    />
   
  </View>
  )
  
};

export default List;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:300,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 0
  },
  item: {
    backgroundColor: "#f9c2ff",
    width:'100%',
    padding: 0,
    marginVertical: 8
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24
  }
});
