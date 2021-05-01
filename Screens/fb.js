import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, } from 'react-native';

export default class FaceBookScreen extends Component {
  render() {
    return (
      <View>
      <Text style = {styles.textContainer}> FaceBook </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
textContainer:{
    textAlign:'center',
    marginTop:450,
    fontSize: 35,
    color:'red'
}
});