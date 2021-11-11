import React, {useState} from "react";
import {StyleSheet, View , Text, TextInput,Switch,Modal,Button,TouchableOpacity } from "react-native";
import ListItem from "./ListItem";

function AppTextInput(){
  
  const [firstname, setfirstname] = useState('');
  const [myvalue,setmyvalue] = useState(false);
  
  return(
    <>
  <Text style={{color:"gold"}}>Enter first name</Text>
  <TextInput onChangeText = {(text)=>
    setfirstname(text)
  }
 placeholder = "firstname" 
 maxLength={5}
 keyboardType="numeric"
 secureTextEntry={true}
 style= {{borderBottomColor:"blue", height:20,width:200,margin:20}}
  />
  <Text>{firstname}</Text>
  <Switch 
  value={myvalue}
  onValueChange = {(newvalue)=>setmyvalue(newvalue)}
  />
 
  </>
  );
}
export default AppTextInput;