import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import TheamedView from '../../components/TheamedView'
import { Color, Link } from 'expo-router'
import ThemText  from '../../components/ThemText'
import Input from '../../components/Input'
import { Colors } from '../../constant/color'
import Button from '../../components/Button'
import image from '../../assets/Images/car2.jpg'
import { Image } from 'react-native'

const login = () => {
  return (
    // <TheamedView style={{flex : 1,justifyContent: 'center',alignItems: 'center'}} ></>
     <TheamedView safe={true} style={{flex : 1}}> 
         <TheamedView style={{height: '40%'}}>
              <ThemText style={{alignSelf: 'center',fontSize : 30,height: '40%',flex:1}}>
                Welcome 
              </ThemText>
              <Image source={image}  style={{width: '100%', height: '60%'}}/>
          </TheamedView>
             <TheamedView style={{height: '20%'}}>
              <ThemText>Email</ThemText>
              <Input placeholder='email'/>
          </TheamedView>
          <TheamedView style={{height: '20%'}}>
            <ThemText>Password</ThemText>
               <Input  secureTextEntry placeholder='password' />
          </TheamedView>
          <TheamedView style={{height: '20%'}}>
              <Button>
                <ThemText style={{color: 'black',alignSelf:'center'}}>login</ThemText>  
              </Button>
          </TheamedView>
     </TheamedView>
      
  )
}

export default login

const styles = StyleSheet.create({
  label :{
    textAlign : "center",
    fontSize  :30,
    fontFamily :'Times New Roman' ,
  },
  text :{
    padding : 10,
    margin : 10,

  }
  
})