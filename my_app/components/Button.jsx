import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Button = ({ ...props}) => {
  return (
    <Pressable style ={({pressed})=>[styles.btn , pressed && styles.pressed]} {...props} />
        
   
  )
}

export default Button

const styles = StyleSheet.create({
  btn :{
    backgroundColor : 'hsl(207, 22%, 82%)',
    borderRadius : 10,
    borderWidth : 2,
    marginVertical : 12,
    
    
  },
  pressed:{
    opacity: 0.8
  }
})