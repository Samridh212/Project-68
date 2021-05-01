import React, { Component } from 'react';
import { Text, View, StyleSheet, } from 'react-native';

export default class InstagramScreen extends Component {
  render() {
    return (
      <View>
      <Text style={styles.textContainer2}> Instagram </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    textContainer2:{
        textAlign:'center',
        marginTop:450,
        fontSize: 35,
        color:'red'
    }
    });