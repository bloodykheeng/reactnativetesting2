import React, {useState} from "react";
import {StyleSheet, View , Text, TextInput,Switch,Modal,Button,TouchableOpacity,FlatList } from "react-native";
import ListItem from "./ListItem";



const food = [{id:"1",name:"apple"},{id:"2",name:"banana"},{id:"3",name:"matoke"}];

function AppPicker(){
  
const [modalvisible,setmodalvisible] = useState(false);
const [category,setcategory] = useState();
  
  const selectitem = category;
  const onselectitem = (item)=>{ setcategory(item)};
  return(
    <>
 <TouchableOpacity onPress={()=> setmodalvisible(true)}>
  <ListItem name={selectitem ? selectitem.name : "picker"} />
  </TouchableOpacity>
  <Modal visible={modalvisible} animationType="slide" >
  <FlatList 
  data = {food}
  keyExtractor = {(item,index)=> item.id}
  renderItem ={(DataItem)=> 
    <TouchableOpacity onPress= {()=>{setmodalvisible(false);
      onselectitem(DataItem.item)
    }
    } >
    <ListItem name={DataItem.item.name}/>
    </TouchableOpacity>
  }
  />
  
  <Button title="close" onPress={()=> setmodalvisible(false)} />
  </Modal>
  </>
    ); }

export default AppPicker;