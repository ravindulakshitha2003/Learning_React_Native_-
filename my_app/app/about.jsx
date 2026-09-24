import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const About = () => {
  return (
    <View style ={{ flex: 1, justifyContent: 'center',alignItems: 'center' ,backgroundColor:'hsl(220, 56%, 5%)'}}>
      <Text style={styles.text} >About</Text>
      <Link href='/' style={styles.text} > back to home</Link>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
    text :{
    fontWeight : 'bold',
    textAlignVertical : 'center',
    color : 'white'
   

  }
})