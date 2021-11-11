import React from "react";
import {StyleSheet,View ,Button} from "react-native";
import {Formik} from "formik";

import MyAppTextInput from "./MyAppTextInput";

function AppFormikForm(){
  return(
    
    <Formik
    initialValues={{email:"",password:""}}
    onSubmit ={(values)=> console.log(values)}>
    
    { ({handleChange,handleSubmit})=> ( 
    <>
    <MyAppTextInput 
    autoCapitalize="none"
    autoCorrect={false}
    keyboard-type="email-address"
    onChangeText={handleChange("email")}
    placeholder ="email"
    textContentType = "emailAddress"
    /> 
    <MyAppTextInput 
    autoCapitalize = "none"
    autoCorrect={false}
    placeholder="password"
    secureTextEntry
    textContentType="password"
    onChangeText = {handleChange("password")}
    />
    <Button title="submit" onPress={handleSubmit}/>
    </>
    )
    }
    
    </Formik>
    
    );
}
export default AppFormikForm;