import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TheamedView from '../../components/TheamedView'
import ThemText from '../../components/ThemText'
import { Link } from 'expo-router'


const register = () => {
  return (
    <TheamedView style={{flex : 1,justifyContent: 'center',alignItems: 'center'}}>
        <ThemText  > register</ThemText>
            <Link href='/login' style={{color:'white'}} >Login</Link>
    </TheamedView>
  )
}

export default register

const styles = StyleSheet.create({})