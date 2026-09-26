import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import { Colors } from '../constant/color';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const TheamedView = ({style,safe =false ,...props}) => {
     const colorSchema = useColorScheme();
    const color = Colors[colorSchema] || Colors['light'] ;
  if(!safe){
    return (
    <View style={[{backgroundColor : color.background,
       paddingHorizontal: 20,
       paddingTop: 30
     },style]} {...props} />
       
    
  )
  }else{
    const padding= useSafeAreaInsets();

    return (
    <View style={[{backgroundColor : color.background ,
      paddingTop : padding.top,
      paddingBottom : padding.bottom,
      paddingHorizontal: 20,
    paddingTop: 30
    },style]} {...props} />
       
    
  )
  }
}

export default TheamedView

const styles = StyleSheet.create({})