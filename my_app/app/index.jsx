import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import logo from "../assets/Images/car1.jpg"

const Home = () => {
  return (
    <View style ={{ flex: 1, justifyContent: 'center',alignItems: 'center' ,backgroundColor:'hsl(220, 56%, 5%)'}}>
      
      <Text style ={[styles.text,{color :'green'}]}>This is the Main page</Text>
      <Text style ={{color:'white'}}> Welcome !</Text>
     <Image source={logo}  style ={styles.img} />

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
   

  }
})