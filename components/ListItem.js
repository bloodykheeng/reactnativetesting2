import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from "react-native";

function ListItem ({name,comment,onPress}){
  return (
    <View onPress={onPress} style={styles.container}>
   <Text style={styles.name}>{name}</Text>
   <Text>{comment}</Text>
    </View>
    );
}
export default ListItem;
const styles = StyleSheet.create({
  container :{
  height:60, 
  borderRadius:10, 
  shadowColor:"grey",
  shadowRadius:10, 
  overflow:"scroll",
  shadowOffset:{width:4,height:4},shadowOpacity:1,
  elevation:20,
    width:"95%",
    padding:20,
    margin:10
  },
  
  
});