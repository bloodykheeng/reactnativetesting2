import React from "react";
import {StyleSheet,View ,Button,Text} from "react-native";
import {Formik} from "formik";
import * as Yup from "yup";

import MyAppTextInput from "./MyAppTextInput";
import AppErrorMessage from "./AppErrorMessage";


const validationschema = Yup.object().shape({
  email : Yup.string().required().email().label("email"),
  password : Yup.string().required().min(4).label("password")
})

function AppYupForm(){
  return(
    
    <Formik
    initialValues={{email:"",password:""}}
    onSubmit ={(values)=> console.log(values)}
    validationSchema = {validationschema}
    >
    
    { ({handleChange,handleSubmit,errors,setFieldTouched,touched})=> ( 
    <>
    <MyAppTextInput 
    autoCapitalize="none"
    autoCorrect={false}
    keyboard-type="email-address"
    onChangeText={handleChange("email")}
    placeholder ="email"
    textContentType = "emailAddress"
    onBlur ={()=> setFieldTouched("email")}
    /> 
    { touched.email && <AppErrorMessage message={errors.email} /> }
    <MyAppTextInput 
    autoCapitalize = "none"
    autoCorrect={false}
    placeholder="password"
    secureTextEntry
    textContentType="password"
    onChangeText = {handleChange("password")}
    onBlur={()=>setFieldTouched("password")}
    />
  { touched.password && <AppErrorMessage message={errors.password} /> }
    <Button title="submit" onPress={handleSubmit}/>
    </>
    )
    }
    
    </Formik>
    
    );
}
export default AppYupForm;