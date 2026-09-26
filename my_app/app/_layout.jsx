
import { StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'

import { Colors } from '../constant/color.js'
import { UserProvider } from '../context/userContext.jsx'

const rootLayout = () => {
  const colorSchema = useColorScheme();
   const color = Colors[colorSchema] || Colors['light'] ;
  
  return (
    
     <UserProvider>
      <StatusBar value ='auto'/>
       <Stack  screenOptions={{
        headerStyle :{backgroundColor: color.background},
        headerTintColor : 'white',
        headerTitleAlign :'center',

      }}>
        <Stack.Screen   name='index' options={{title:'Home'}} />
        <Stack.Screen   name='about' options={{title:'About'}} />
        <Stack.Screen   name='(auth)' options={{headerShown : false}} />
        <Stack.Screen   name='(dashboard)' options={{headerShown : false}} />
      </Stack>
     </UserProvider>
      

  )
}

export default rootLayout

const styles = StyleSheet.create({})