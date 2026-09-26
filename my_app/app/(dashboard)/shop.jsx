import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TheamedView from '../../components/TheamedView'
import TheamCard from '../../components/TheamCard'
import ThemText from '../../components/ThemText'

const shop = () => {
  return (
    <TheamedView safe={true}>
        <ThemText> SHOPING</ThemText>
    </TheamedView>
  )
}

export default shop

const styles = StyleSheet.create({})