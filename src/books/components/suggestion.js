import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Button,
} from 'react-native';
import Api from '../../../utils/api';

function Suggestion(props) {

  const deleted= async(id)=>{
    const deleted= await Api.deleteBook(`book/${id}`,1,'delete');

    if(deleted) {
      alert('Eliminado')
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        {/* <Image
          style={styles.cover}
          source={
            require('../../../assets/education.png')
          }
        /> */}
       
      </View>

      <View style={styles.right}>
        <Text style={styles.title}>Autor: {props.autor}</Text>
        <Text style={styles.year}>Titulo: {props.titulo}</Text>
        <Text style={styles.title}>Descripción: {props.descripcion}</Text>
        {/* <Text style={styles.rating}>{props.rating} Estrellas</Text> */}
      </View>
      <Button
       title="Eliminar"
       type="outline"
       onPress={(e)=>deleted(props.id)}
       style={styles.button}
       color="orange"
      ></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
   
    justifyContent:'space-around',
    alignContent:'stretch',
  },
  genre: {
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: 'black',
    paddingVertical: 5,
    paddingHorizontal: 7,
  },
  genreText: {
    color: 'white',
    fontSize: 11,

  },
  cover: {
    height: 150,
    width: 100,
    resizeMode: 'contain'
  },
  right: {
   
   
  },
  title: {
    fontSize: 18,
    color: '#44546b'
  },
  year: {
    backgroundColor: '#70b124',
    paddingVertical: 4,
    paddingHorizontal: 6,
    color: 'white',
    fontSize: 11,
    borderRadius: 5,
    overflow: 'hidden',
   
  },
  rating: {
    color: '#6b6b6b',
    fontSize: 14,
    fontWeight: 'bold',
  }

})

export default Suggestion
