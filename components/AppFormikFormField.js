import React from 'react';
import {StyleSheet,View,Text} from 'react-native';

import {ErrorMessages,useFormikContext} from "formik";
import MyAppTextInput from "./MyAppTextInput";
import AppErrorMessage from "./AppErrorMessage";

function AppFormikFormField({name,...otherprops}){
  const {setFieldTouched,handleChange,errors,touched} = useFormikContext("");
  return(
    <>
    <MyAppTextInput 
    onBlur = {()=> setFieldTouched(name)}
    onChangeText = {handleChange(name)}
    {...otherprops}
    />
  {  touched[name] && <AppErrorMessage message ={ errors[name]}/> }
    </>
    );
}

export default AppFormikFormField;