import { Keyboard, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import TheamedView from '../../components/TheamedView'
import { Color, Link } from 'expo-router'
import ThemText  from '../../components/ThemText'
import Input from '../../components/Input'
import { Colors } from '../../constant/color'
import Button from '../../components/Button'
import image from '../../assets/Images/car2.jpg'
import { Image } from 'react-native'


const register = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

    
      <TheamedView safe={true} style={{flex : 1,padding : 50 , height : '100%'}}> 
          <TheamedView style={{height: '40%'}}>
                <ThemText style={{alignSelf: 'center',fontSize : 20,height: '40%',flex:1 }}>
                 Add To Community  
                </ThemText>
                <Image source={image}  style={{width: '100%', height: '60%',}}/>
            </TheamedView>
              <TheamedView style={{height: '18%'}}>
                <ThemText>Email</ThemText>
                <Input placeholder='email'/>
            </TheamedView>
            <TheamedView style={{height: '18%'}}>
              <ThemText>Password</ThemText>
                <Input  secureTextEntry placeholder='password' />
            </TheamedView>
            <TheamedView style={{height: '15%'}}>
                <Button>
                  <ThemText style={{color: 'black',alignSelf:'center'}}>login</ThemText>  
                </Button>
                <Link href='/login' style={{color:'white',alignSelf:'center'}} >Register</Link>
            </TheamedView>
            
      </TheamedView>
     </TouchableWithoutFeedback>
  )
}

export default register

const styles = StyleSheet.create({})