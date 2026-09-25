import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import { Stack } from 'expo-router'
import React from 'react';
import { Colors } from '../../constant/color';

const _layout = () => {
    const colorSchema = useColorScheme();
    const color = Colors[colorSchema] || Colors['light'] ;
 
  return (
    <Stack screenOptions={{ Animation : 'none',
        headerStyle : {backgroundColor: color.background},
        headerTitleAlign :'center',
        headerTintColor : color.text
}} />
  )
}

export default _layout

const styles = StyleSheet.create({})