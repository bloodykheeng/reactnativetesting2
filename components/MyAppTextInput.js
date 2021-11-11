import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity,TextInput} from "react-native";

function MyAppTextInput ({ onPress,mystyles ,...otherprops}){
  return (
    <View onPress={onPress} style={styles.container}>
    <TextInput style={styles.input,mystyles} {...otherprops} />

    </View>
    );
}
export default MyAppTextInput;
const styles = StyleSheet.create({
  container :{
  height:60, 
  borderRadius:10, 
  shadowColor:"grey",
  shadowRadius:10, 
  overflow:"scroll",
  shadowOffset:{width:4,height:4},shadowOpacity:1,
  elevation:10,
    width:"95%",
    padding:20,
    margin:10
  },input:{
    alignContent:"center",
    flexWrap:"wrap",
    justifyContent:"center",
    borderColor:"gold",
    borderWidth:1,
    width:"80%"
  },
  
  
});