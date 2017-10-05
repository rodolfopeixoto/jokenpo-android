
import React, { Component } from 'react';
import {
  Image
} from 'react-native';

class Icon extends Component{
    render(){

        if(this.props.choose == 'pedra'){
            return(
                <Image source={require('./../images/pedra.png')} /> 
            );
        }else if(this.props.choose == 'papel'){
            return(
                <Image source={require('./../images/papel.png')} /> 
            );

        }else if(this.props.choose == 'tesoura'){
            return(
                <Image source={require('./../images/tesoura.png')} /> 
            );

        }else{
            return false;
        }
    }
}

export default Icon;