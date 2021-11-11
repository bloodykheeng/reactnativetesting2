import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, StyleSheet, Text, View,ScrollView } from 'react-native';

import Test1 from "./components/test1";
import ListItem from "./components/ListItem";
import AppFlatList from "./components/flatlist";
import AppHighLight from "./components/highlight";
import AppTextInput from "./components/AppTextInput";
import AppPicker from "./components/AppPicker";
import MyAppTextInput from "./components/MyAppTextInput";
import AppFormikForm from "./components/AppFormikForm";
import Sharif from "./components/sharif";
import AppYupForm from "./components/AppYupForm";

import AppFormikFormFieldTesting from "./components/AppFormikFormFieldTesting";

     /*PART 2 */

import MyPermisions from "./components/part2/AppPermisions";
import MyImagePicker from "./components/part2/AppSelectImage";
import AppImageInput from "./components/part2/AppImageInput";
import ImageInputListTesting from "./components/part2/ImageInputListTesting";

export default function App() {
  return (
    <View style={styles.container}>
<ImageInputListTesting />
     
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:"100%",
    backgroundColor: '#fff',
    paddingTop:30
  },
});
