import React from "react";
import {StyleSheet,View,Text} from "react-native";

function sharif ({age}){
  return(
    <View>
    <Text>{age > 21 ? "happy birthday sharif" : "age like fine wine" }</Text>
    </View>
    );
}
export default sharif;;