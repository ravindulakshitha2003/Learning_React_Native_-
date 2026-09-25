import { StyleSheet, Text, View,Image, useColorScheme, Pressable } from 'react-native'
import React from 'react'
import logo from "../assets/Images/car1.jpg"
import logo2 from "../assets/Images/car2.jpg"
import { Link } from 'expo-router'
import  {Colors } from '../constant/color.js'
import TheamedView from '../components/TheamedView.jsx'
import TheamCard from '../components/TheamCard.jsx'
import ThemText from '../components/ThemText.jsx'
import Button from '../components/Button.jsx'



const Home = () => {

    const colorSchema = useColorScheme();
    
    const color = Colors[colorSchema];
  return (
    <TheamedView style ={{ flex: 1, justifyContent: 'center',alignItems: 'center' , backgroundColor:color.background}}>
      
      <Text style ={[styles.text,{color :'green'}]}>This is the Main page</Text>
      <Text style ={{color:'white'}}> Welcome !</Text>


      <Button
        onPress={()=>{
        console.log("presssed");
      }}>
        <ThemText styles={{color : 'black',fontWeight :10}} > Login button </ThemText>
      </Button>
    
      <Image source={logo}  style ={styles.img} />
      <Link href='/about' style={styles.text} >about  </Link>
      <Link href='/login' style={styles.text} > Loign .... </Link>
      <Link href='/profile' style={styles.text} > Profile .... </Link>
     
      <TheamCard >
          <Text style ={{color : color.text}}>"this is card view"</Text>
      </TheamCard>
    </TheamedView>
    
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
   textAlign :'center',
   alignItems : 'center',
    color : 'white'
   

  }
  
})