
import React, { Component } from 'react';
import {
  View,
  Image,
  Dimensions
} from 'react-native';

const {height, width} = Dimensions.get('window');

class Header extends Component{
    render(){
        return(
          <View>
           <Image style={{width: width, height: 180}} source={require('./../images/header.jpg')} />
          </View>
        );
    }
}

export default Header;