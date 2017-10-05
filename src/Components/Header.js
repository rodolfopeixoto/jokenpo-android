
import React, { Component } from 'react';
import {
  View,
  Image,
  Dimensions
} from 'react-native';

const {height, width} = Dimensions.get('window');
const image = require('./../images/header.jpg');

class Header extends Component{
    render(){
        return(
          <View>
           <Image style={{width: width, height: 180}} source={image} />
          </View>
        );
    }
}

export default Header;