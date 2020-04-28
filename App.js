import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, Picker } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Input,Avatar,Button,ListItem,Divider   } from 'react-native-elements';

import List from './List';
export default function App() {

  const [book,setBook]=useState();

  const handleChanfe=()=>{

  }
  
  return (
  
    <View style={styles.container}>
          <View style={styles.container}>

            <Avatar
            size="xlarge"
              source={{
                uri:
                  'https://images.pexels.com/photos/1005324/literature-book-open-pages-1005324.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
              }}
              showEditButton
            />
          </View>

          
      <Input
      
        placeholder='Nombre del Autor'
        onChange={handleChanfe()}
          leftIcon={
        <Icon
          name='user'
          size={15}
          color='black'
        />
      
        }
      />

<Input
      
      placeholder='Nombre del libro'
        leftIcon={
      <Icon
        name='book'
        size={15}
        color='black'
      />
    
      }
    />

<Input
      
      placeholder='Descripción'
        leftIcon={
      <Icon
        name='book'
        size={15}
        color='black'
      />
    
      }
    />


<View style={styles.container2}>
      <Button
style={styles.margin}
type='outline'
  icon={
    <Icon
      name="check"
      size={15}
      color="black"
    />
  }
  title=""
/>

    </View>
    <Text>Lista de Libros</Text>
    <View style={styles.margin}>
<List></List>
</View>

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
  container2: {
    flex: 0.2,
    width:'100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  margin:{
    flex:1,
    backgroundColor:'#fff'
  }
});
