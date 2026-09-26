import { Keyboard, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import TheamedView from '../../components/TheamedView'
import { Color, Link } from 'expo-router'
import ThemText  from '../../components/ThemText'
import Input from '../../components/Input'

import Button from '../../components/Button'
import image from '../../assets/Images/car2.jpg'
import { Image } from 'react-native'
import { useUser } from '../../hooks/useUser'

const login = () => {
  const [password,setPassword] = useState();
  const [email , setEmail] = useState();
  const {user} = useUser();
  function setUser (){
    console.log('logging'+user);
  }

  return (
    // <TheamedView style={{flex : 1,justifyContent: 'center',alignItems: 'center'}} ></>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

    
      <TheamedView safe={true} style={{flex : 1}}> 
          <TheamedView style={{height: '40%'}}>
                <ThemText style={{alignSelf: 'center',fontSize : 30,height: '40%',flex:1}}>
                  Welcome 
                </ThemText>
                <Image source={image}  style={{width: '100%', height: '60%'}}/>
            </TheamedView>
              <TheamedView style={{height: '20%'}}>
                <ThemText>Email</ThemText>
                <Input onKeyPress={setPassword} placeholder='email'/>
            </TheamedView>
            <TheamedView style={{height: '20%'}}>
              <ThemText>Password</ThemText>
                <Input  onKeyPress={setEmail}  secureTextEntry placeholder='password' />
            </TheamedView>
            <TheamedView style={{height: '20%'}}>
                <Button onPress={setUser}>
                  <ThemText style={{color: 'black',alignSelf:'center'}}>login</ThemText>  
                </Button>
                <Link href='/register' style={{color:'white',alignSelf:'center'}} >Login</Link>
            </TheamedView>
            
      </TheamedView>
     </TouchableWithoutFeedback>
      
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