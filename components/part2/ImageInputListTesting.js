import React, {useState} from "react";
import {View,StyleSheet,Text} from "react-native";

import ImageInputList from   
"./ImageInputList";

function ImageInputListTesting(){
 
 const [imageuris, setimageuri]= useState([]);
 const addimage = (uri)=>{
   setimageuri([...imageuris,uri])
 }
 const removeimage = (uri)=>{
console.log("deleting start");
console.log("first image uriz")
   console.log(imageuris)
   setimageuri(imageuris.filter((image)=> image !== uri) )
   
   console.log("modified imageuris")
   console.log(imageuris)
 }
  return(
    <ImageInputList 
    onaddimage={(uri)=> addimage(uri)}
    onremoveimage={(uri)=>{ removeimage(uri);}}
    imageuris={imageuris}
    />
    );
}
export default ImageInputListTesting;