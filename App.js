import React, { Component } from 'react';
import {
  Text,
} from 'react-native';

import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/books/containers/suggestion-list';
import Form from './src/books/components/Form';
import API from './utils/api';
import { Input,Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
type Props = {};
export default class App extends Component<Props> {
  state = {
    suggestionList: [],
    loading:{
      status:true
    }
  }
  async componentDidMount() {
    const books = await API.getSuggestion();
    console.log(books);
    this.setState({
      loading:{
        status:false
      },
      suggestionList: books,
     
    })
  }

  updateBook= async()=>{
    this.setState({
      loading:{
        status:true
      }
    })
    const books = await API.getSuggestion();
    console.log(books);
    this.setState({
      loading:{
        status:false
      },
      suggestionList: books,
    })
  }
  render() {
    return (
      <Home>
        <Header />
        <Form></Form>
        <Button
        onPress={()=>this.updateBook()}
        icon={
          <Icon
            name="sync"
            size={30}
            color="#000"
          />
        }
  
  type="clear"
/>
{this.state.loading.status ? 
<Button
  title="Loading button"
  type='clear'
  loading
/> : null
}


        <SuggestionList
          list={this.state.suggestionList}
        />
      </Home>
    );
  }
}


