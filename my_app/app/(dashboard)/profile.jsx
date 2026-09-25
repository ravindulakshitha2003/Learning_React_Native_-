import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TheamedView from '../../components/TheamedView'
import ThemText from '../../components/ThemText'

const profile = () => {
  return (
   <TheamedView style={{flex : 1,justifyContent: 'center',alignItems: 'center'}} >
        <ThemText>"prfile pircture"</ThemText>
   </TheamedView>
  )
}

export default profile

const styles = StyleSheet.create({})