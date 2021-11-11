import React from "react";
import {StyleSheet, Text,TouchableOpacity} from "react-native";

function AppButton ({title,onPress,style}){
  return(
    <TouchableOpacity style={[styles.container , style]} onPress={onPress}>
    <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
    );
}

export default AppButton;
const styles = StyleSheet.create({
  text : {color:"black",fontSize:20,},
  container : {backgroundColor:"gold",width:"30%", height:50, borderRadius:10,justifyContent:"center",flexWrap:"wrap", alignContent:"center",  
  alignItems:"center",shadowColor:"brown",shadowOpacity:1,shadowRadius:10,shadowOffset:{width:10,height:10},elevation:10
  },
})
