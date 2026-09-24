import { StyleSheet, Text, View,Image, useColorScheme } from 'react-native'
import React from 'react'
import logo from "../assets/Images/car1.jpg"
import { Link } from 'expo-router'
import  {Colors } from '../constant/color.js'



const Home = () => {

    const colorSchema = useColorScheme();
    
    const color = Colors[colorSchema];
  return (
    <View style ={{ flex: 1, justifyContent: 'center',alignItems: 'center' , backgroundColor:color.background}}>
      
      <Text style ={[styles.text,{color :'green'}]}>This is the Main page</Text>
      <Text style ={{color:'white'}}> Welcome !</Text>

     <Image source={logo}  style ={styles.img} />
      <Link href='/about' style={styles.text} >about  </Link>
    </View>
    
  )
}

export default Home

const styles = StyleSheet.create({
  img :{
     width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    margin : 10,
    padding : 10
   

  },
  text :{
    fontWeight : 'bold',
    textAlignVertical : 'center',
    color : 'white'
   

  }
})