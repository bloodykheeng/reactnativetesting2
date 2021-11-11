import React from 'react'
import {StyleSheet, View, Text} from "react-native"

function AppErrorMessage({message,style}){
  if (!message) return null;
  
  return(
    <View style = {styles.container}>
    <Text style ={styles.message,style}>{message}</Text>
    </View>
    );
}

const styles = StyleSheet.create({
  container : {
    display:"flex", 
    flexWrap:"wrap",
    alignContent:"center",
    justifyContent:"center"},
    message:{
      color:"red",
      fontSize:20
    },
});

export default AppErrorMessage;