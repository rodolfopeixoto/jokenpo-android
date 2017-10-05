import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';

const {height, width} = Dimensions.get('window');

import Header from './Components/Header';
import Icon from './Components/Icon';

export default class jokenpo extends Component {
  
  constructor(props){
    super(props);

    this.state = { userChoose: '', computerChoose: '', result: '' };
  }

  jokenpo(userChoose){
    const choose = Math.floor(Math.random() * 3);
    let computer = '';
    switch(choose) {
        case 0: computer = 'pedra'; break;
        case 1: computer = 'papel'; break;
        case 2: computer = 'tesoura'; break;
        default: computer = '';
    }
    
    let result = '';

    if (computer === 'pedra') {
        if (userChoose === 'pedra') result = 'Vocês empataram!';
        if (userChoose === 'papel') result = 'Você ganhou!';
        if (userChoose === 'tesoura') result = 'Você perdeu! :(';
    } else if (computer === 'papel'){
      if (userChoose === 'pedra') result = 'Você perdeu! :(';
      if (userChoose === 'papel') result = 'Vocês empataram!';
      if (userChoose === 'tesoura') result = 'Você ganhou!';
    } else {
        if (userChoose === 'pedra') result = 'Você ganhou!';
        if (userChoose === 'papel') result = 'Você perdeu! :(';
        if (userChoose === 'tesoura') result = 'Vocês empataram!';
    }

    this.setState({ computerChoose: computer,userChoose, result}); 
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>

        <Header />

        <View style={styles.content}>
          <TouchableOpacity
            onPress={() => {this.jokenpo('pedra')}}
            >
            <Text style={styles.contentText}>Pedra</Text>
            
            </TouchableOpacity>


          <TouchableOpacity
            onPress={() => {this.jokenpo('papel')}}
            >
            <Text style={styles.contentText}>Papel</Text>
            
            </TouchableOpacity>


          <TouchableOpacity
            onPress={() => {this.jokenpo('tesoura')}}
            >
            <Text style={styles.contentText}>Tesoura</Text>
            
            </TouchableOpacity>
        </View>
        
        <View style={styles.results}>
          <Text style={styles.textResult}> {this.state.result} </Text>
        </View>

        <View style={styles.results}>
          <Text style={styles.title}>Você</Text> 
          <Text style={styles.title}>Computador </Text> 
            
        </View>

        <View style={styles.images}>
          <Icon choose={this.state.userChoose} />  
          <Icon choose={this.state.computerChoose}/>
            
        </View>


      </View>
    );
  }
}


const styles = StyleSheet.create({
    content:{
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginVertical: 30
    },
    contentText:{
      fontSize: 17,
      fontWeight: 'bold',
      backgroundColor: 'skyblue',
      color: 'white',
      padding: 15,
      borderRadius: 20
    },
    results:{
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    textResult:{
        fontSize: 25,
        fontWeight: 'bold',
        color: 'red',
        height: 60
    },
    title:{
        fontSize: 22,

    },
    images:{
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row'
    }
});
