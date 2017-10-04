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

    this.state = {userChoose: '', computerChoose: ''};
  }

  jokenpo(userChoose){
    this.setState({userChoose:userChoose});
  }

  render() {
    return (
      <View>
        <Text>
          Escolha do computador: {this.state.computerChoose}
        </Text>
        <Text>
          Escolha do usuário: {this.state.userChoose}  </Text>
        <Text> 
            Resultado
        </Text>

        <Button
          onPress={ () => {this.jokenpo('pedra')}} 
          title='Pedra'
        />

        <Button
          onPress={ () => {this.jokenpo('papel')}} 
          title='Papel'
        />

        <Button
          onPress={ () => {this.jokenpo('tesoura')}} 
          title='Tesoura'
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
});