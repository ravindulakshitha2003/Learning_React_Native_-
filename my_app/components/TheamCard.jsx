import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react';
import { Colors } from '../constant/color.js';

const TheamCard = ({style,...props}) => {
  const colorSchema = useColorScheme();
    const color = Colors[colorSchema] || Colors['light'] ;
  return (
    <View style={[{backgroundColor : color.background, width:200},style]} {...props} />
       
    
  )
}
export default TheamCard

const styles = StyleSheet.create({})