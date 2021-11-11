import React ,{useEffect,useState} from "react";
import {StyleSheet,View, Text, Image, TouchableOpacity, Alert} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import * as ImagePicker from "expo-image-picker";

function AppImageInput ({imageuri,onchange}){
  
 
  
useEffect(()=>{camerapermissions();},[]);

  const camerapermissions = async ()=>{
    const {granted} = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if(!granted) alert("please you have to accept the permissions");
    }

    
  const myimagepicker = async ()=>{
    try{
      const result = await ImagePicker.launchImageLibraryAsync();
      if(!result.cancelled)
      onchange(result.uri)
      console.log(result.uri);
      console.log(imageuri);
    }catch(err){alert("there was an error reading your image");}
  }
  
  
  const handlepress = ()=>{
  if(!imageuri) myimagepicker();
    else Alert.alert("Delete Image","Are you sure you want to delete this image",
    [{text : "yes",onPress:()=>onchange(imageuri)},{text : "no"}])
    
     }
  
  return(
  
 <TouchableOpacity onPress={handlepress}> 
  
 <View style={styles.container}>

  { imageuri &&<Image style={styles.image} source={{uri : imageuri}} />}
  
  { !imageuri && 
<MaterialIcons size={70} name="camera-alt"/>     }
</View >

</TouchableOpacity>

    );
}
export default AppImageInput;

const styles = StyleSheet.create({
  container :{
    width:200,
    height:200,
    borderRadius:10,
    overflow:"hidden"
    },
    image :{
      width:200,
      height:200
    },
});