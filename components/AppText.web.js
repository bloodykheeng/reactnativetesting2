import React from "react";
import {StyleSheet,Text} from "react-native"

function AppText ({children}){
  return (
    <Text style={styles.text}>{children}</Text>
    );
}
export default AppText;

const styles = StyleSheet.create({
  text : {color:"gold",fontSize:18,fontFamily:"Roboto"},
});