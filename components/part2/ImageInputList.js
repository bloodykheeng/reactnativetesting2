import React ,{useState} from "react"
import {StyleSheet,View,Text,TouchableOpacity} from "react-native";

import AppImageInput from "./AppImageInput";

function ImageInputList({imageuris = [], onremoveimage,onaddimage}){
  
return(
  <View >
  {imageuris.map(
  (uri)=>(<View key={uri}>
  <TouchableOpacity  >
  <AppImageInput 
  imageuri={uri} 
  onchange={(uri)=> {onremoveimage(uri)}}
  />
  </TouchableOpacity>
  </View>)
   )}
   <AppImageInput onchange={(uri)=> onaddimage(uri)}/>
  </View>
  );  
}
export default ImageInputList;

const styles = StyleSheet.create({
  container:{
    width:200,
    height:200
     },
});
