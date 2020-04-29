import React,{useState,useEffect} from "react";
import axios from 'axios';
import Suggestion from './conponent/suggestion';

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
  const URL='http://192.168.1.5:8000/api';
  const [books, setBooks]= useState();

  renderItem = ({item}) => {
    return (
      <Suggestion {...item}/>
    )
  }

  const getBooks=()=>{
  return fetch(`${URL}/book`,{
    method: 'get',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }}).then(ress=>ress.json()
    .then((json) => {
      return setBooks(json)
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
          keyExtractor={this.keyExtractor}
          data={this.props.list}
          ListEmptyComponent={this.renderEmtpy}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}
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
