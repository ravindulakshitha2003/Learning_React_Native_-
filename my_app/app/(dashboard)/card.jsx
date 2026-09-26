import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TheamedView from '../../components/TheamedView'
import ThemText from '../../components/ThemText'
import { SafeAreaView } from 'react-native-safe-area-context'

const card = () => {
  return (
    <TheamedView safe={true}>
      <ThemText >card</ThemText>
      <SafeAreaView></SafeAreaView>
    </TheamedView>
  )
}

export default card

const styles = StyleSheet.create({})