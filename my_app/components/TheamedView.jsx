import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import { Colors } from '../constant/color';

const TheamedView = ({style,...props}) => {
     const colorSchema = useColorScheme();
    const color = Colors[colorSchema] || Colors['light'] ;
  return (
    <View style={[{backgroundColor : color.background },style]} {...props} />
       
    
  )
}

export default TheamedView

const styles = StyleSheet.create({})