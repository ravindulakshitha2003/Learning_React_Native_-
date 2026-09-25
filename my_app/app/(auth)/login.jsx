import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TheamedView from '../../components/TheamedView'
import { Link } from 'expo-router'
import ThemText  from '../../components/ThemText'

const login = () => {
  return (
    <TheamedView style={{flex : 1,justifyContent: 'center',alignItems: 'center'}} >
      <ThemText>login</ThemText>
      <Link href='/register' style={styles.text} ><ThemText>Register</ThemText>  </Link>
    </TheamedView>
  )
}

export default login

const styles = StyleSheet.create({})