import React from "react";
import {StyleSheet,Image,Text,View,Button} from "react-native";
import AppButton from "./AppButton";

function Card({children,img}){
  return (
   // console.log(img);
    <View style={styles.container}>
    <Image style ={styles.img} source={require("../assets/img/IMG_20190203_153343.jpg")} />
    <View style={styles.coment}>
    <Text style={{color:"gold",padding:20,fontSize:25}}>{children}</Text>
    <AppButton style={styles.button} title="Tripp" />
    </View>
    </View>
    );
}
export default Card;
const styles = StyleSheet.create({
  container:{padding:0,margin:20,
  borderRadius:10,
  shadowColor:"grey",shadowOffset:{width:10,height:10},shadowOpacity:1,elevation:20,shadowRadius:10},
  coment:{flexWrap:"wrap",alignContent:"center",justifyContent:"center",alignItems:"center",padding:20 },
  img:{ width:"100%",height:250,resizeMode:"stretch" ,borderRadius:10},
  button : {backgroundColor : "pink"},
});