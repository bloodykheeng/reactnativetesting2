import React ,{useState} from 'react'
import {FlatList,TouchableHighlight, View, Text} from 'react-native';
import ListItem from "./ListItem";

import Swipeable from "react-native-gesture-handler/Swipeable";

const initialmessages = [
  {id:1,name:"bloody",mes:"tsap fam"},
  {id:2,name:"kheeng",mes:"we are musicians"},
  {id:3,name:"max",mes:"i kove reggae "}
  ]

function AppHighlight (){
  
  const [messages,setmessages] = useState(initialmessages);
  const[refreshing , setrefreshing] = useState(false);
  
  const handledelete = (message) =>{
    const newmessages = messages.filter(
      (m)=> m.id !== message.id)
      setmessages(newmessages);
    
  }
  
  
  return(
    
    <Swipeable renderRightActions = {()=>
<View><Text>delete</Text></View>
    } > 
    <FlatList
    data = {messages}
keyExtractor = {(item,index)=> item.id}
    renderItem={(itemData)=>
   <TouchableHighlight  onPress={()=> handledelete(itemData.item)}>
   <ListItem comment={itemData.item.mes}/>
   </TouchableHighlight>
    }
    refreshing = {refreshing}
    onRefresh = {()=>
    setmessages([{id:3,name:"max",mes:"i kove reggae "}])}
   />
   
 </Swipeable>
    );
  
}
export default AppHighlight;