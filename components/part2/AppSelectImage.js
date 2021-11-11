import React ,{useEffect,useState} from 'react';
import {View, Button,Image} from "react-native";
import * as ImagePicker from "expo-image-picker";

function MyImagePicker(){
  
  const[imageuri,setimageuri] = useState();
  
  const requestpermissions = async()=>{
    const {granted} = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if(!granted)
    alert("please accept the permissiins")
    }
    
    useEffect(()=>{requestpermissions();},[]);
    
    const selectimage = async ()=>{
      try{
      const result = await ImagePicker.launchImageLibraryAsync();
      if(!result.cancelled)
      setimageuri(result.uri)
      }catch(error){
        console.log("error reading image",error);
      }
    }
    return(
      <View>
      <Button title="choose an image" onPress={selectimage} />
      <Image source={{uri:imageuri}} style={{width:400,height:400}} />
      </View>
      );
}
export default MyImagePicker;