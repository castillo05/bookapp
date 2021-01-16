import React, { Component } from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Api from '../../../utils/api';

class Form extends Component {

    constructor(props) {
        super(props);
        this.state={
            form:{
                autor:'',
                titulo:'',
                descripcion:''
            },
            alert:{
                status:false,
                text:''
            }
        }
    }
    
  

    submit= async(e)=>{
        try {
            console.log('Submit')
            console.log(this.state.form)
            const data=await Api.postBook('book',this.state.form,'post');
            if(data){
                console.log(data.data.status)
                this.setState({
                    form:{
                        autor:'',
                        titulo:'',
                        descripcion:''
                    },
                    alert:{
                        status:true,
                        text:data.data.status
                    }
                })

                setTimeout(()=>{
                    this.setState({
                        alert:{
                            status:false
                        }
                    })
                },2000)

                const books = await Api.getSuggestion();
              
            }
        } catch (error) {
            console.log(error)
        }
        
    }

    handleChange=(e)=>{
        this.setState({
            form:{
               autor:e.target.value
            }
        })
        
    }

    inputValueUpdate = (val, prop) => {
        const state = this.state.form;
        state[prop] = val;
        this.setState(state);
      }

    render() {
        return (
            <View style={styles.form}>
                <View style={styles.containerTitle2}><Text></Text></View>
                
                <View style={styles.containerTitle}><Text style={styles.tituloForm}>Nuevo Libro</Text></View>
                <View style={styles.body}>
                    
                <Input
                placeholder='Autor'
                name="autor"
                onChangeText={(val) => this.inputValueUpdate(val, 'autor')}
                
                />
                {/*  */}
                <Input
                placeholder='Titulo del libro'
                name="titulo"
                onChangeText={(val) => this.inputValueUpdate(val, 'titulo')}
               
                />
                {/*  */}
                <Input
                placeholder='Descripción'
                name="descripcion"
                onChangeText={(val) => this.inputValueUpdate(val, 'descripcion')}
              
                />
                <Button
                    title="Guardar"
                    type="outline"
                    onPress={()=>this.submit()}
                    style={styles.button}
                    color="purple"
                    
                />

            <Text style={styles.alert}>{this.state.alert.status ? this.state.alert.text : null}</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    containerTitle:{
        backgroundColor:'#f50057',
        borderColor:'#000',
        borderStyle:'solid',
        padding:10
    },
    containerTitle2:{
        backgroundColor:'#ff5983'
    },  
    tituloForm:{
        textAlign:'left',
        color:'#fff',
        fontSize: 30,
    },
    body:{
        backgroundColor:'#fffffb',
        marginBottom:20
    },
    form:{
        padding:20
    },
    alert:{
        textAlign:"center",
        color:'#0277bd',
        fontSize:20,
        marginTop:10,
        padding:10    
    },
    button:{
        padding:10,
        marginTop:50,
        color:'#0277bd',
    }
  })
  
export default Form;