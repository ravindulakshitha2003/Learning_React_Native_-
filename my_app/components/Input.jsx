import { StyleSheet, TextInput, useColorScheme } from 'react-native'
import React from 'react'
import { Colors } from '../constant/color'

const Input = ({ style, ...props }) => {
  const theam = useColorScheme()
  const colors = Colors[theam] ?? Colors.light

  return (
    <TextInput
      style={[styles.input, { backgroundColor: colors.inputbox, color: colors.inputText }, style]}
     
      {...props}
    />
  )
}

export default Input

const styles = StyleSheet.create({
  input: {
    height: 48,
    borderRadius: 8,
    paddingHorizontal: 14,
    fontSize: 15,
    marginBottom: 12,
    paddingbottom  : 10
  },
})