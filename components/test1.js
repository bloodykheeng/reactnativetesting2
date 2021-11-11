import React from 'react';
import {View, Text, StatusBar,Platform,StyleSheet} from 'react-native';
import {AppLoading} from "expo-app-loading";
import {useFonts,Raleway_200ExtraLight} from "@expo-google-fonts/raleway";
import colors from "../config/colors";

import {MaterialCommunityIcons, FontAwesome5} from "@expo/vector-icons";

import AppText from "./AppText";
import AppButton from "./AppButton";
import Card from "./card";

function pressed(){
  console.log("pressed preesed ive been pressed , the bloody button");
}
function Test1(){
  let [fontsLoaded ,error] = useFonts({
    Raleway_200ExtraLight
  })
  if(!fontsLoaded){return (null)}
  return(
    <View style={styles.container}>
    <Text style={styles.textc}>SHADOWS</Text>
    <View style={styles.div}></View>
    <View style={styles.div1}></View>
    <View>
    <Text>Good Morning</Text>
    <Text style={{
    fontFamily:"Raleway_200ExtraLight",fontSize:30,
      color : colors.primary
    }}>Morning</Text>
    <Text>Hello world</Text>
    <Text style={{fontFamily:"Roboto",lineHeight:40,textDecorationLine:"underline",color:"tomato", textAlign:"center"}}>hello boys i went to the market , i went to the shop, i went to the super market, we went to the swimming pool, we went to the gym, we ate ice creem</Text>
    <Text>MaterialCommunityIcons</Text>
    <MaterialCommunityIcons name="email" size={60} color="dodgerblue"/>
    <FontAwesome5 name="mailchimp" size={60} color="tomato" />
    <AppText>Teating android and ios custom styles web gold android pink</AppText>
    <AppButton title="bloody" onPress={pressed} />
    <Card img="kisspng-quran-praying-hands-prayer-islam-salah-mosque-5ac5d39c02e393.5185826015229142040118.png">Family Day OUT</Card>
    
    <View style={{height:30,borderColor:"orange", borderWidth:1,overflow:"scroll"}}>
    <Text style={{fontSize:20}}>
   we met in the morning we met on the evening we meet in the afternoon, life was good, we ate food, we drunk waterv, ohh llalala , hahah, we swum, we went to pray, hydrogen, water , cufon  
    </Text>
    </View>
    
    
    
    </View>
    </View>
    );
}
export default Test1;

const styles = StyleSheet.create({
  textc:{alignSelf : "center"},
  container:{
padding : Platform.OS == "android" ? StatusBar.currentHeight : 30},
  div : {
    backgroundColor :"red",
    width:100,height:100},
  div1 : {
    backgroundColor:"dodgerblue",
    width:200,
    height:200,
    borderColor: "green",
    margin:10,
   // borderWidth:10,
   // borderTopWidth:20,
    borderRadius:10,
    shadowColor:"grey",
    shadowOpacity:1,
    shadowRadius:10,
    elevation:2,
    shadowOffset:{width:10,height:10},
    },
  })