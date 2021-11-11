import React,{useEffect} from "react";
import * as ImagePicker from 'expo-image-picker';
import {View,Text} from "react-native";

 function AppPermisions(){
  const requestPermission = async ()=>{
    
    const {granted} = await ImagePicker.requestCameraRollPermissionsAsync();
    
    if(!granted) alert("u need to enable permisions")
    
    
  }
  
  useEffect(()=>{
    requestPermission();},[])
    return <View><Text>Permissions</Text></View>
}

/* method 2 */


import * as Permissions from "expo-permissions";

function MyPermissions (){
  
  const myrequestpermissions = async()=>{
    const result = await Permissions.askAsync(Permissions.CAMERA_ROLL,Permissions.LOCATION)
    
    if(!result.granted)
    alert("dude u have to accept permissions");
     }
     
     useEffect(()=>{myrequestpermissions();},[])
return (<View><Text>My Second permissions</Text></View>)  
}

export default MyPermissions;