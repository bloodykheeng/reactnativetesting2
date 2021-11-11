import React from 'react';
import {View, Text, FlatList} from 'react-native';
import ListItem from "./ListItem";

const message = [
  {id : 1, name : "bloody" ,comment :"hello world"},
 {id : 2, name : "kheeng" ,comment :"how r u doing"},
 {id : 3, name : "michel" ,comment :"we rule the world"},
 {id : 4, name : "bay" ,comment :"a bay a piece of water projecting into land , thats simple geography dude"},
 {id : 5, name : "header" ,comment :"who run the world boys"},
 {id : 6, name : "manu" ,comment :"i eat ice cream, i eat pizza"},
 {id : 7, name : "pool" ,comment :"bye ive gone ti sleep"},
 {id : 7, name : "pool" ,comment :"bye ive gone ti sleep"},
 {id : 7, name : "pool" ,comment :"bye ive gone ti sleep"},
 {id : 7, name : "last" ,comment :"bye ive gone ti sleep"}
]


function AppFlatList (){
 return(
   <>
  <Text>hello</Text>
    <Text>{message[0].name}</Text>
    
    <FlatList data={message}
    keyExtractor = {(item,index)=> item.id}
  renderItem={(itemData)=>( 
  <ListItem name={itemData.item.name} comment= {itemData.item.comment} />)
      }
    />
 </>
  );
  
}


export default  AppFlatList;