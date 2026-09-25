import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack, Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';

const _layout = () => {
  return (
    <Tabs
        screenOptions={{
            headerShown : false,
            tabBarStyle : {
                backgroundColor : 'white',
                paddingTop : 10,
                height: 70
            },
            tabBarActiveTintColor : 'black',
            tabBarInactiveTintColor : 'black'

        }}
    >
      <Tabs.Screen name="card"  options={{title: 'card',
        tabBarIcon : ({focused})=>{
          return(
          <Ionicons
            size={24}
            name={focused ? 'card' : 'card-outline'}
            
          />)
        }
      }}
       
      />
      <Tabs.Screen name="shop"  options={{title: 'shop',
        tabBarIcon : ({focused})=>{
           return(
          <Ionicons
            size={24}
            name={focused ? 'add-circle' : 'add-circle-outline'}
            
          />)
        }
      }}
       
      />
      <Tabs.Screen name="profile"  options={{title: 'profile',
        tabBarIcon : (focused)=>{
           return(
          <Ionicons
            size={24}
            name={focused ? 'person' : 'person-outline'}
            
          />)
        }
      }}
       
      />
     
    </Tabs>

   
  )
}

export default _layout

const styles = StyleSheet.create({})