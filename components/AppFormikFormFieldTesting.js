import React from "react";
import {StyleSheet,View ,Button,Text} from "react-native";
import {Formik} from "formik";
import * as Yup from "yup";

import MyAppTextInput from "./MyAppTextInput";
import AppErrorMessage from "./AppErrorMessage";

import AppFormikFormField from "./AppFormikFormField";


const validationschema = Yup.object().shape({
  email : Yup.string().required().email().label("email"),
  password : Yup.string().required().min(4).label("password")
})

function AppFormikFormFieldTesting(){
  return(
    
    <Formik
    initialValues={{email:"",password:""}}
    onSubmit ={(values)=> console.log(values)}
    validationSchema = {validationschema}
    >
    
    { ({handleSubmit})=> ( 
    <>
    <AppFormikFormField
    autoCapitalize="none"
    autoCorrect={false}
    keyboard-type="email-address"
    placeholder ="email"
    name ="email"
    textContentType = "emailAddress"
   /> 

    <AppFormikFormField 
    autoCapitalize = "none"
    autoCorrect={false}
    placeholder="password"
    name="password"
    secureTextEntry
    textContentType="password"
    />

    <Button title="submit" onPress={handleSubmit}/>
    </>
    )
    }
    
    </Formik>
    
    );
}
export default AppFormikFormFieldTesting;