import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Colors } from '../constant/color';

const ThemText = ({styles,...props}) => {
      const colorSchema = useColorScheme();
    const color = Colors[colorSchema] || Colors['light'] ;
  return (
    <>
        <Text style={[{color : color.text,margin: 10},styles]} {...props} />
    </>
  )
}

export default ThemText

const styles = StyleSheet.create({})