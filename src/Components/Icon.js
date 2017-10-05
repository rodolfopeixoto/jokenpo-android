
import React, { Component } from 'react';
import {
  Image
} from 'react-native';

const pedra = require('./../images/pedra.png');
const papel = require('./../images/papel.png');
const tesoura = require('./../images/tesoura.png');

class Icon extends Component{
    render(){

        if(this.props.choose == 'pedra'){
            return(
                <Image source={pedra} /> 
            );
        }else if(this.props.choose == 'papel'){
            return(
                <Image source={papel} /> 
            );

        }else if(this.props.choose == 'tesoura'){
            return(
                <Image source={tesoura} /> 
            );

        }
          return false;
    }
}

export default Icon;