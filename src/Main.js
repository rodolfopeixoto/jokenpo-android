/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class jokenpo extends Component {
  
  constructor(props){
    super(props);

    this.state = {text: ''};
  }

  updateText(){
    this.setState({text:'Adiciona Texto'});
  }

  updateText(){
    this.setState({text:'Adiciona Texto'});
  }

  render() {
    return (
      <View>
        <Text>
          Escolha do computador
        </Text>
        <Text>
          Escolha do usuário
        </Text>
        <Text> 
            Resultado
        </Text>

        <Button
          onPress={() => {this.updateText()}} 
          title='Pedra'
        />

        <Button
          onPress={() => {this.updateText()}} 
          title='Papel'
        />

        <Button
          onPress={() => {this.updateText()}} 
          title='Tesoura'
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
});